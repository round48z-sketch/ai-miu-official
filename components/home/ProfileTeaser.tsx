import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/NewsList";
import { TextLink } from "@/components/TextLink";
import { profile } from "@/content/profile";

export function ProfileTeaser() {
  return (
    <section className="profile-band" id="profile">
      <Reveal className="profile-band__photo">
        <Image
          src={profile.image.src}
          alt={profile.image.alt}
          width={profile.image.width}
          height={profile.image.height}
          sizes="(min-width: 980px) 52vw, 100vw"
        />
      </Reveal>
      <Reveal className="profile-band__text" delay={80}>
        <SectionHead en="Profile" ja="プロフィール" />
        <p className="profile-band__name">{profile.artistName}</p>
        <p className="profile-band__lead">{profile.lead}</p>
        <p>{profile.bio}</p>
        <dl className="facts">
          {profile.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        <TextLink href="/profile">View Profile</TextLink>
      </Reveal>
    </section>
  );
}
