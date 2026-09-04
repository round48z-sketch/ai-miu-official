import type { Metadata } from "next";
import { getSiteUrl, siteConfig } from "@/content/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = siteConfig.defaultOgImage,
}: BuildMetadataInput): Metadata {
  const siteUrl = getSiteUrl();
  const url = `${siteUrl}${path}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1536,
          height: 1024,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function buildJsonLd() {
  const siteUrl = getSiteUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteUrl,
        inLanguage: "ja",
        description: siteConfig.description,
      },
      {
        "@type": "MusicGroup",
        "@id": `${siteUrl}/#artist`,
        name: "AIみう",
        alternateName: ["AI Miu", "miu", "AIみう/miu"],
        url: siteUrl,
        image: `${siteUrl}${siteConfig.defaultOgImage}`,
        genre: ["J-Pop", "Idol"],
        sameAs: [
          "https://x.com/miu_4519",
          "https://www.tiktok.com/@miu_4519",
          "https://open.spotify.com/artist/1R4C6DHAIVCRrwCptYNqNw",
        ],
      },
      {
        "@type": "Person",
        name: "みう",
        alternateName: "AIみう",
        jobTitle: "AI Idol / Artist",
        url: `${siteUrl}/profile`,
        image: `${siteUrl}/images/profile/portrait.jpg`,
        memberOf: { "@id": `${siteUrl}/#artist` },
      },
    ],
  };
}
