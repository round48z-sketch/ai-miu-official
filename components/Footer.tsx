import Link from "next/link";
import { navItems, siteConfig, snsLinks } from "@/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <Link href="/" className="logo">
            {siteConfig.logo}
          </Link>
          <p>{siteConfig.tagline}</p>
        </div>
        <div className="site-footer__links">
          <nav aria-label="フッター">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.en}
              </Link>
            ))}
          </nav>
          <nav aria-label="SNS">
            {snsLinks.map((item) =>
              item.href ? (
                <a key={item.name} href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              ) : (
                <span key={item.name}>{item.name}</span>
              ),
            )}
          </nav>
        </div>
      </div>
      <p className="site-footer__copy">© {new Date().getFullYear()} {siteConfig.name}</p>
    </footer>
  );
}
