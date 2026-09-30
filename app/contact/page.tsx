import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageIntro } from "@/components/PageIntro";
import { SnsCards } from "@/components/home/SnsSection";
import { contactCopy } from "@/content/contact";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "お問い合わせ",
  description: "AIみうへのお問い合わせ。メディア、お仕事のご相談はこちら。",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <article className="subpage">
      <div className="container">
        <div className="contact-main">
          <PageIntro en="Contact" ja="お問い合わせ" lead={contactCopy.lead} />
          <ContactForm />
        </div>
        <div className="contact-body">
          <p>{contactCopy.snsLead}</p>
          <SnsCards linkedOnly />
        </div>
      </div>
    </article>
  );
}
