import { Aura } from "@/components/Aura";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/NewsList";
import { snsLinks } from "@/content/site";

const snsMeta: Record<string, { blurb: string; action: string }> = {
  X: { blurb: "日常と、みうのいま。", action: "Follow" },
  TikTok: { blurb: "動画で、みうと会おう。", action: "Watch" },
  Pinterest: { blurb: "公開まで、もう少しお待ちください。", action: "Coming Soon" },
  Spotify: { blurb: "楽曲を、いつでも。", action: "Listen" },
};

function SnsMark({ name }: { name: string }) {
  if (name === "X") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4l7.2 8.4L4.6 20h3l5-5.8L17.8 20H20l-7.4-8.7L19.2 4h-3l-4.6 5.4L8.2 4z" />
      </svg>
    );
  }

  if (name === "TikTok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 4v9.2a3.6 3.6 0 1 1-2.4-3.4V7.2A6.2 6.2 0 0 0 16.8 9V6.4A6.4 6.4 0 0 1 14 4z" />
      </svg>
    );
  }

  if (name === "Pinterest") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12.4 8.2c-2 0-3.2 1.2-3.2 3.1 0 1.2.5 2.1 1.7 2.1.2 0 .6 0 .7-.4.1-.4-.2-.7-.3-1.1-.3-1 .4-2.1 1.5-2.1 1 0 1.6.8 1.6 1.9 0 1.5-.7 2.7-1.7 2.7-.5 0-.9-.4-.8-.9l.5-2.2c.1-.4-.1-.7-.5-.7-.4 0-.8.4-.9 1" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 15.2c3.4-1.9 6.6-2.3 14-1.1" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6 12.1c3.6-2 7.2-2.4 13.2-.8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M6.6 9c3.2-1.7 6.7-2 12.4-.7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function SnsCards({ linkedOnly = false }: { linkedOnly?: boolean }) {
  const items = linkedOnly ? snsLinks.filter((item) => item.href) : snsLinks;

  return (
    <ul className="sns-grid">
      {items.map((item, index) => {
        const slug = item.name.toLowerCase();
        const meta = snsMeta[item.name];
        const inner = (
          <>
            <span className="sns-card__mark">
              <SnsMark name={item.name} />
            </span>
            <span className="sns-card__name">{item.name}</span>
            <span className="sns-card__handle">{item.handle}</span>
            {meta ? <span className="sns-card__blurb">{meta.blurb}</span> : null}
            {meta ? <span className="sns-card__action">{meta.action}</span> : null}
          </>
        );

        return (
          <li key={item.name}>
            <Reveal delay={index * 120}>
              {item.href ? (
                <a className={`sns-card sns-card--${slug}`} href={item.href} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <span className={`sns-card sns-card--${slug} is-soon`} aria-disabled="true">
                  {inner}
                </span>
              )}
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}

export function SnsSection() {
  return (
    <section className="sns-band" id="sns">
      <Aura className="aura--follow" />
      <div className="container">
        <Reveal variant="left">
          <SectionHead en="Follow" ja="フォロー" lead="みうのいまは、こちらから。" />
        </Reveal>
        <SnsCards />
      </div>
    </section>
  );
}
