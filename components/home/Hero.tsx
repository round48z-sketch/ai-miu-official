import Image from "next/image";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site";

export function Hero() {
  return (
    <section className="hero" aria-label="メインビジュアル">
      <Image
        src="/images/hero/hero.jpg"
        alt="石段に座って微笑むAIみう"
        fill
        priority
        sizes="100vw"
        className="hero__image"
      />
      <div className="hero__glow" aria-hidden="true" />
      <div className="hero__sparkles" aria-hidden="true" />
      <div className="hero__shade" />
      <div className="hero__copy">
        <p className="hero__ruby">Official</p>
        <h1>{siteConfig.shortName}</h1>
        <p className="hero__catch">{profile.catch}</p>
      </div>
      <a href="#news" className="hero__scroll">
        Scroll
        <i aria-hidden="true" />
      </a>
    </section>
  );
}
