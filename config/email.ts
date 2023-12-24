export const emailConfig = {
  from: 'fyz.ben@icloud.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://updates.0xbf.net`
      : 'http://localhost:3000',
}
