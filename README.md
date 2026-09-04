# AIみう Official

AIみうの公式サイト。Next.js（App Router）で構成しています。

## 開発

```bash
npm install
npm run dev
```

## 公開前に変更する値

- `.env.example` を参考に `NEXT_PUBLIC_SITE_URL` を本番URLへ
- `content/site.ts` のお問い合わせメール、Pinterest URL
- `content/music.ts` の YouTube Music / Apple Music リンク

独自ドメインや Google Search Console を設定したあとは、`NEXT_PUBLIC_SITE_URL` をそのドメインに合わせてください。`sitemap.xml` と `robots.txt` は自動で同じURLを使います。
