import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/NewsList";
import { snsLinks } from "@/content/site";

export function SnsSection() {
  return (
    <section className="sns-band" id="sns">
      <div className="container">
        <Reveal>
          <SectionHead en="Follow" ja="フォロー" />
          <p>みうのいまは、こちらから。</p>
        </Reveal>
        <Reveal delay={60}>
          <ul className="sns-row">
            {snsLinks.map((item) => (
              <li key={item.name}>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.name}
                    <small>{item.handle}</small>
                  </a>
                ) : (
                  <span>
                    {item.name}
                    <small>{item.handle}</small>
                  </span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
