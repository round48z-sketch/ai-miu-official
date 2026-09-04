import Link from "next/link";

export default function NotFound() {
  return (
    <article className="subpage">
      <div className="container slim">
        <header className="page-intro">
          <h1>Not Found</h1>
          <p className="section-head__ja">ページが見つかりません</p>
          <p className="page-intro__lead">アドレスをご確認のうえ、トップへお戻りください。</p>
        </header>
        <Link href="/" className="text-link">
          Back to Home
        </Link>
      </div>
    </article>
  );
}
