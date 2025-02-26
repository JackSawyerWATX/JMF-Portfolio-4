import Image from "next/image";
import bg from "../../../../public/background/contact-background-3.png";
import Form from "@/components/contact/Form";

export default function Contact() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-75" />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Make First Contact
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Initiate communication sequence and transmit your mission’s operational scope. Whether your objective is to establish collaborations, decode unknown data, or relay personal logs of exploration, your transmissions are critical elements of our journey. Please utilize the form below to send your messages through the secure communication channel and await confirmation of receipt and follow-up instructions.
          </p>
        </div>
        <Form />
      </article>

    </>
  );
}
