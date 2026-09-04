import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { snsLinks, siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "お問い合わせ",
  description: "AIみうへのお問い合わせ。メディア、お仕事のご相談はこちら。",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <article className="subpage">
      <div className="container slim">
        <PageIntro
          en="Contact"
          ja="お問い合わせ"
          lead="メディア掲載やお仕事のご相談は、準備が整い次第こちらでも受け付けます。"
        />
        <div className="contact-body">
          {siteConfig.email ? (
            <p>
              メール：
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
          ) : (
            <p>当面は公式SNSのダイレクトメッセージよりご連絡ください。</p>
          )}
          <ul className="sns-row">
            {snsLinks
              .filter((item) => item.href)
              .map((item) => (
                <li key={item.name}>
                  <a href={item.href ?? undefined} target="_blank" rel="noopener noreferrer">
                    {item.name}
                    <small>{item.handle}</small>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
