import Image from "next/image";
import bg from "../../../../public/background/contact-background-3.png";
import Form from "@/components/contact/Form";
export const metadata = {
  title: "Contact | Jonathan Fausset"
};
export default function Contact() {
  return <div><Image priority sizes="100vw" src={bg} alt="" className="interior-background" /><section className="contact-grid"><div><p className="eyebrow"><span className="signal-dot" /> 04 / OPEN A CHANNEL</p><h1>Great things<br />start with<br /><span>hello.</span></h1><p className="page-intro">Have a project in mind, an idea to explore, or just want to connect? Send a message. Let’s see where it takes us.</p></div><div className="contact-panel"><p className="eyebrow">YOUR NEXT MISSION</p><h2>Let’s hear your idea.</h2><Form /></div></section></div>;
}
