// lib/jsonld.js — 구조화 데이터 빌더 (insurancemoa)

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'https://insurancemoa.ambitstock.com'
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || '보험모아'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': SITE + '/#organization',
    name: SITE_NAME,
    url: SITE,
    logo: { '@type': 'ImageObject', url: SITE + '/android-chrome-512x512.png', width: 512, height: 512 },
    description: '보험종류·상품·보험사·비교·계산기·상황별 허브·청구 가이드 통합. 금융감독원·보험협회 공시실 기준의 중립 정보.',
    inLanguage: 'ko',
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': SITE + '/#website',
    url: SITE,
    name: SITE_NAME,
    inLanguage: 'ko',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: SITE + '/search?q={search_term_string}' },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url ? (SITE + it.url) : undefined,
    })),
  }
}

export function articleSchema({ title, description, url, date, updated, image, tags }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: (date || '') + 'T00:00:00+09:00',
    dateModified: (updated || date || '') + 'T00:00:00+09:00',
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE },
    publisher: { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: SITE + '/android-chrome-512x512.png', width: 512, height: 512 } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    image: image || (SITE + '/og-default.png'),
    keywords: (tags || []).join(', '),
    inLanguage: 'ko',
  }
}

export function faqSchema(items) {
  if (!items || items.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(it => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: it.a },
    })),
  }
}

export function howToSchema({ title, description, steps }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: (steps || []).map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
  }
}

// 보험상품 (단정적 금리/수익률 값은 넣지 않는다 — 보험업법 준수)
export function financialProductSchema({ productName, companyName, url, description, categoryLabel }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialProduct',
    name: productName,
    category: categoryLabel || '보험상품',
    provider: companyName ? { '@type': 'Organization', name: companyName } : undefined,
    description,
    feesAndCommissionsSpecification: '보험료는 성별·연령·보장기간·특약 선택에 따라 상이합니다. 정확한 보험료는 각 보험사 공시실 및 상품설명서를 확인해야 합니다.',
    url,
    inLanguage: 'ko',
  }
}

// 보험사
export function insuranceCompanySchema({ companyName, url, description, companyType, established, website }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: companyName,
    description,
    url: website || url,
    foundingDate: established ? String(established) : undefined,
    additionalType: companyType || '보험사',
    inLanguage: 'ko',
  }
}

// 계산기 (WebApplication)
export function webApplicationSchema({ name, description, url }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url,
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  }
}
