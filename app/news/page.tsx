import type { Metadata } from "next";
import { NewsList } from "@/components/NewsList";
import { PageIntro } from "@/components/PageIntro";
import { newsItems } from "@/content/news";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "ニュース",
  description: "AIみうの最新情報、リリース、ゲーム、グッズ、メディアのお知らせ。",
  path: "/news",
});

export default function NewsPage() {
  return (
    <article className="subpage">
      <div className="container">
        <PageIntro en="News" ja="お知らせ" lead="みうの最新情報をお届けします。" />
        <NewsList items={newsItems} />
      </div>
    </article>
  );
}
