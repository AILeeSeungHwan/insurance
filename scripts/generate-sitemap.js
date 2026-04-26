// scripts/generate-sitemap.js — 분할 sitemap + 인덱스 생성
const fs = require('fs')
const path = require('path')

const products   = require('../data/products')
const categories = require('../data/categories')
const companies  = require('../data/companies')
const guides     = require('../data/guides')
const situations = require('../data/situations')
const tools      = require('../data/tools')
const compares   = require('../data/compares')
const addons     = require('../data/addons')

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://insurancemoa.ambitstock.com'
const now = new Date().toISOString().slice(0, 10)

function url(loc, lastmod, priority, changefreq) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod || now}</lastmod>\n    <changefreq>${changefreq || 'weekly'}</changefreq>\n    <priority>${priority || '0.8'}</priority>\n  </url>`
}

function urlset(entries) {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`
}

function sitemap(name, entries) {
  fs.writeFileSync(path.join(__dirname, '..', 'public', name), urlset(entries))
  console.log('✓', name, '(' + entries.length + ' urls)')
}

const coreRoutes = [
  ['/',                  '1.0', 'daily'],
  ['/products/',         '0.9', 'daily'],
  ['/categories/',       '0.9', 'weekly'],
  ['/companies/',        '0.7', 'weekly'],
  ['/compare/',          '0.9', 'weekly'],
  ['/tools/',            '0.9', 'weekly'],
  ['/situations/',       '0.8', 'weekly'],
  ['/guides/',           '0.8', 'weekly'],
  ['/addons/',           '0.6', 'weekly'],
  ['/about/',            '0.3', 'monthly'],
  ['/editorial-policy/', '0.3', 'monthly'],
  ['/disclaimer/',       '0.3', 'monthly'],
  ['/privacy/',          '0.3', 'monthly'],
  ['/terms/',            '0.3', 'monthly'],
  ['/contact/',          '0.3', 'monthly'],
]

sitemap('sitemap-core.xml',       coreRoutes.map(([p, pr, cf]) => url(SITE + p, now, pr, cf)))
sitemap('sitemap-products.xml',   products.map(p => url(`${SITE}/products/${p.slug}/`, p.updatedAt, '0.8', 'monthly')))
sitemap('sitemap-categories.xml', categories.map(p => url(`${SITE}/categories/${p.slug}/`, p.updatedAt, '0.9', 'weekly')))
sitemap('sitemap-companies.xml',  companies.map(p => url(`${SITE}/companies/${p.slug}/`, p.updatedAt, '0.7', 'monthly')))
sitemap('sitemap-guides.xml',     guides.map(p => url(`${SITE}/guides/${p.slug}/`, p.updatedAt, '0.8', 'monthly')))
sitemap('sitemap-compares.xml',   compares.map(p => url(`${SITE}/compare/${p.slug}/`, p.updatedAt, '0.9', 'weekly')))
sitemap('sitemap-tools.xml',      tools.map(p => url(`${SITE}/tools/${p.slug}/`, p.updatedAt, '0.9', 'monthly')))
sitemap('sitemap-situations.xml', situations.map(p => url(`${SITE}/situations/${p.slug}/`, p.updatedAt, '0.7', 'monthly')))
sitemap('sitemap-addons.xml',     addons.map(p => url(`${SITE}/addons/${p.slug}/`, p.updatedAt, '0.6', 'monthly')))

// 최근 30일 발행/업데이트
const allPosts = [
  ...products.map(p => ({...p, path: 'products'})),
  ...categories.map(p => ({...p, path: 'categories'})),
  ...companies.map(p => ({...p, path: 'companies'})),
  ...guides.map(p => ({...p, path: 'guides'})),
  ...compares.map(p => ({...p, path: 'compare'})),
  ...situations.map(p => ({...p, path: 'situations'})),
]
const cutoff = new Date(Date.now() - 30*24*60*60*1000).toISOString().slice(0, 10)
const recent = allPosts.filter(p => (p.updatedAt || '0000-00-00') >= cutoff)
sitemap('sitemap-news.xml', recent.map(p => url(`${SITE}/${p.path}/${p.slug}/`, p.updatedAt, '0.9', 'daily')))

const sitemaps = [
  'sitemap-core', 'sitemap-products', 'sitemap-categories', 'sitemap-companies',
  'sitemap-guides', 'sitemap-compares', 'sitemap-tools', 'sitemap-situations',
  'sitemap-addons', 'sitemap-news'
]
const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(n => `  <sitemap>\n    <loc>${SITE}/${n}.xml</loc>\n    <lastmod>${now}</lastmod>\n  </sitemap>`).join('\n')}
</sitemapindex>
`
fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), indexXml)
console.log('✓ sitemap.xml (index of', sitemaps.length, 'sitemaps)')
