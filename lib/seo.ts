export const seo = {
  title: 'Ben Fang | 开发者、创始人',
  description:
    '我叫 Ben，我热爱开发，创新，享受生活，以及在未知领域中探索。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://0xbf.net'
      : 'http://localhost:3000'
  ),
} as const
