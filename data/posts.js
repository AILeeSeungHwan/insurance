// data/posts.js — 모든 엔티티 통합 레지스트리

const products   = require('./products')
const categories = require('./categories')
const companies  = require('./companies')
const guides     = require('./guides')
const situations = require('./situations')
const tools      = require('./tools')
const compares   = require('./compares')
const addons     = require('./addons')

const PREFIX = {
  product:   '/products',  category:  '/categories',
  company:   '/companies', addon:     '/addons',
  situation: '/situations', tool:     '/tools',
  compare:   '/compare',    guide:    '/guides',
}

function withUrl(arr) {
  return arr.map(p => ({ ...p, url: `${PREFIX[p.category]}/${p.slug}/` }))
}

const posts = [
  ...withUrl(products),
  ...withUrl(categories),
  ...withUrl(companies),
  ...withUrl(guides),
  ...withUrl(situations),
  ...withUrl(tools),
  ...withUrl(compares),
  ...withUrl(addons),
]

module.exports = posts
