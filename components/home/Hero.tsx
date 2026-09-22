import Image from "next/image";
import { profile } from "@/content/profile";
import { snsLinks } from "@/content/site";

const heroSns = snsLinks.filter((item) => item.href);

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
      <div className="hero__brand">
        <p className="hero__site">Official Web Site</p>
        <h1>
          <span className="hero__ja">AIみう</span>
          <span className="hero__roma"> / miu</span>
        </h1>
        <p className="hero__catch">{profile.catch}</p>
        <nav className="hero__sns" aria-label="公式SNS">
          {heroSns.map((item) => (
            <a key={item.name} href={item.href!} target="_blank" rel="noopener noreferrer">
              {item.name}
            </a>
          ))}
        </nav>
      </div>
      <a href="#news" className="hero__scroll">
        Scroll
        <i aria-hidden="true" />
      </a>
    </section>
  );
}
