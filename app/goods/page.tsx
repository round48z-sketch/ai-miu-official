import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { TextLink } from "@/components/TextLink";
import { goodsItems } from "@/content/goods";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "グッズ",
  description: "AIみうの公式グッズ。LINEスタンプなどの最新アイテム。",
  path: "/goods",
});

export default function GoodsPage() {
  return (
    <article className="subpage">
      <div className="container">
        <PageIntro en="Goods" ja="グッズ" lead="みうを、毎日のそばに。" />
        <div className="goods-row">
          {goodsItems.map((item) => (
            <article key={item.slug} className="goods-piece">
              <div className="goods-piece__image">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  sizes="(min-width: 980px) 40vw, 92vw"
                />
              </div>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <TextLink href={item.href} className="btn" external>
                {item.cta}
              </TextLink>
            </article>
          ))}
        </div>
      </div>
    </article>
  );
}
