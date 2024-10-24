/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://tw-3.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 7000,
}