export const emailConfig = {
  from: 'fyz.ben@icloud.com',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://0xbf.net`
      : 'http://localhost:3000',
}
