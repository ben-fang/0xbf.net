export const emailConfig = {
  from: 'updates@0xbf.net',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://updates.0xbf.net`
      : 'http://localhost:3000',
}
