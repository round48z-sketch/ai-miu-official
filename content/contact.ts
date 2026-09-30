export const contactCategories = [
  "お仕事のご依頼",
  "メディア掲載・取材",
  "楽曲・コラボレーション",
  "その他",
] as const;

export type ContactCategory = (typeof contactCategories)[number];

export const contactCopy = {
  lead: "メディア掲載やお仕事のご相談は、こちらのフォームよりお送りください。",
  snsLead: "公式SNSのダイレクトメッセージからもご連絡いただけます。",
  subject: "AIみう公式サイト お問い合わせ",
  success: "お問い合わせありがとうございます。\n内容を確認のうえ、必要に応じてご連絡いたします。",
  error: "送信に失敗しました。\n時間をおいてもう一度お試しください。",
} as const;
