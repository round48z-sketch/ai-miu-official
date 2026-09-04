import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/PageIntro";
import { TextLink } from "@/components/TextLink";
import { profile } from "@/content/profile";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "プロフィール",
  description: "AIみうのプロフィール。透明感のある可愛いAIアイドル／アーティストとしての活動をご紹介します。",
  path: "/profile",
  image: profile.image.src,
});

export default function ProfilePage() {
  return (
    <article className="subpage">
      <div className="container">
        <PageIntro en="Profile" ja="プロフィール" lead={profile.lead} />
      </div>
      <div className="profile-page">
        <div className="profile-page__image">
          <Image
            src={profile.image.src}
            alt={profile.image.alt}
            width={profile.image.width}
            height={profile.image.height}
            sizes="(min-width: 980px) 50vw, 100vw"
            priority
          />
        </div>
        <div className="profile-page__body">
          <p className="profile-band__name">{profile.artistName}</p>
          {profile.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <dl className="facts">
            {profile.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <TextLink href="/music">View Music</TextLink>
        </div>
      </div>
    </article>
  );
}
