import Image from "next/image";
import { Aura } from "@/components/Aura";
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
      <Aura className="aura--hero" />
      <div className="hero__sparkles" aria-hidden="true" />
      <div className="hero__shade" />
      <div className="hero__motif" aria-hidden="true">
        <span className="motif motif--star a" />
        <span className="motif motif--heart b" />
        <span className="motif motif--star c" />
        <span className="motif motif--line d" />
      </div>
      <div className="hero__brand">
        <p className="hero__site">
          <span className="hero-mask__inner">Official Web Site</span>
        </p>
        <h1>
          <span className="hero-mask__inner">
            <span className="hero__ja">
              <span className="hero__ai">AI</span><span className="hero__name">みう</span>
            </span>
            <span className="hero__roma">
              <span className="hero__slash">/</span>miu
            </span>
          </span>
        </h1>
        <p className="hero__catch">
          <span className="hero-mask__inner">{profile.catch}</span>
        </p>
        <nav className="hero__sns" aria-label="公式SNS">
          <span className="hero-mask__inner">
            {heroSns.map((item) => (
              <a key={item.name} href={item.href!} target="_blank" rel="noopener noreferrer">
                {item.name}
              </a>
            ))}
          </span>
        </nav>
      </div>
      <a href="#news" className="hero__scroll">
        Scroll
        <i aria-hidden="true" />
      </a>
    </section>
  );
}
