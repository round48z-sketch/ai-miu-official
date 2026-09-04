import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/NewsList";
import { TextLink } from "@/components/TextLink";
import { goodsItems } from "@/content/goods";

export function GoodsSection() {
  return (
    <section className="goods-band" id="goods">
      <div className="container">
        <Reveal>
          <SectionHead en="Goods" ja="グッズ" href="/goods" lead="みうを、毎日のそばに。" />
        </Reveal>
        <div className="goods-row">
          {goodsItems.map((item, index) => (
            <Reveal key={item.slug} className="goods-piece" delay={index * 80}>
              <div className="goods-piece__image">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  sizes="(min-width: 980px) 38vw, 92vw"
                />
              </div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <TextLink href={item.href} className="btn" external>
                {item.cta}
              </TextLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
