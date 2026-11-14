"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from "@emailjs/browser";
import { Toaster, toast } from 'sonner';
import { motion } from 'framer-motion';
import { useAmbientAudio } from '../AmbientAudio';
const container = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5
    }
  }
};
const item = {
  hidden: {
    scale: 0
  },
  show: {
    scale: 1
  }
};
export default function Form() {
  const { enabled } = useAmbientAudio();
  const enabledRef = useRef(enabled);
  const completionAudio = useRef(null);
  const mounted = useRef(false);
  enabledRef.current = enabled;

  useEffect(() => {
    mounted.current = true;
    const clip = completionAudio.current;
    return () => {
      mounted.current = false;
      clip.pause();
    };
  }, []);

  useEffect(() => {
    if (!enabled) completionAudio.current?.pause();
  }, [enabled]);

  const {
    register,
    handleSubmit,
    formState: {
      errors
    },
    reset
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sendEmail = async params => {
    setIsSubmitting(true);
    const toastID = toast.loading("Sending your message, please wait...");
    try {
      await emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, params, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        limitRate: {
          throttle: 5000 // cannot send more than one email every 5 seconds
        }
      });

      toast.success("I have received your message and will reply to you soon.", {
        id: toastID
      });
      if (enabledRef.current && mounted.current && completionAudio.current) {
        const clip = completionAudio.current;
        clip.volume = 0.65;
        clip.currentTime = 0;
        // Playback failure must not change a successful submission into an error.
        void clip.play().catch(() => {});
      }
      return true;
    } catch (error) {
      toast.error("There was an error sending your message. Please try again soon.", {
        id: toastID
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };
  const onSubmit = async data => {
    const templateParams = {
      to_name: "Jack Sawyer",
      from_name: data.name,
      from_email: data.email,
      message: data.message
    };
    const sent = await sendEmail(templateParams);
    if (sent) reset();
  };
  return <>
            <audio ref={completionAudio} src="/audio/transfer-complete.mp3" preload="auto" />
            <Toaster richColors={true} />
            <motion.form variants={container} initial="hidden" animate="show" onSubmit={handleSubmit(onSubmit)} className='max-w-md w-full flex flex-col item-center justify-center space-y-3 xxs:space-y-4 px-4'>

                <label htmlFor="contact-name">Your name</label>
                <motion.input id="contact-name" autoComplete="name" variants={item} type="text" placeholder="name" {...register("name", {
        required: "This field is required.",
        minLength: {
          value: 2,
          message: "Name should be at least 2 characters long."
        }
      })} className='w-full p-3 xxs:p-4 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg text-sm xxs:text-base' />

                {errors.name && <span className="inline-block self-start text-accent text-xs xxs:text-sm">{errors.name.message}</span>}

                <label htmlFor="contact-email">Email address</label>
                <motion.input id="contact-email" autoComplete="email" variants={item} type="email" placeholder="email" {...register("email", {
        required: "This field is required."
      })} className='w-full p-3 xxs:p-4 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg text-sm xxs:text-base' />

                {errors.email && <span className="inline-block self-start text-accent text-xs xxs:text-sm">{errors.email.message}</span>}

                <label htmlFor="contact-message">Your message</label>
                <motion.textarea id="contact-message" variants={item} rows={4} placeholder='message' {...register("message", {
        required: "This field is required.",
        maxLength: {
          value: 1000,
          message: "Message should be less than 1,000 characters."
        },
        minLength: {
          value: 4,
          message: "Message should be at least a 4 letter word."
        }
      })} className='w-full p-3 xxs:p-4 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg resize-none text-sm xxs:text-base' />

                {errors.message && <span className="inline-block self-start text-accent text-xs xxs:text-sm">{errors.message.message}</span>}
                <motion.input variants={item} value={"Send Transmission"} disabled={isSubmitting} aria-label="Send message" className='w-full px-6 xxs:px-10 py-3 xxs:py-4 rounded-md shadow-lg bg-background border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize disabled:opacity-50 disabled:cursor-not-allowed text-sm xxs:text-base' type="submit" />
            </motion.form>
        </>;
}
