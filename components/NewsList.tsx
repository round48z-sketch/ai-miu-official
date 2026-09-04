import Link from "next/link";
import { newsCategoryLabel, type NewsItem } from "@/content/news";
import { TextLink } from "@/components/TextLink";

export function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <ul className="news-list">
      {items.map((item) => {
        const inner = (
          <>
            <time dateTime={item.date.replaceAll(".", "-")}>{item.date}</time>
            <span className="news-list__cat">{newsCategoryLabel[item.category]}</span>
            <span className="news-list__title">{item.title}</span>
          </>
        );

        return (
          <li key={item.slug}>
            {item.href ? (
              <Link href={item.href} className="news-list__link">
                {inner}
              </Link>
            ) : (
              <div className="news-list__link">{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export function SectionHead({
  en,
  ja,
  href,
  linkLabel = "View More",
  lead,
}: {
  en: string;
  ja?: string;
  href?: string;
  linkLabel?: string;
  lead?: string;
}) {
  return (
    <div className="section-head">
      <div>
        <h2>{en}</h2>
        {ja ? <p className="section-head__ja">{ja}</p> : null}
        {lead ? <p className="section-lead">{lead}</p> : null}
      </div>
      {href ? <TextLink href={href}>{linkLabel}</TextLink> : null}
    </div>
  );
}
