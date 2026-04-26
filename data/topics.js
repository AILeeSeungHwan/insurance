// 상위 허브 (홈·헤더 네비)
const topics = [
  { slug: 'categories', name: '보험종류',  nameEn: 'Categories', icon: '📚', color: '#1D4ED8', bgColor: '#DBEAFE', priority: 1, featured: true, description: '실손·자동차·암·치아·운전자·여행자 등 보험 유형별 개요와 선택 포인트.' },
  { slug: 'products',   name: '보험상품',  nameEn: 'Products',   icon: '📝', color: '#DC2626', bgColor: '#FEE2E2', priority: 2, featured: true, description: '보험사별 대표 상품의 주계약·특약·면책·보험료 예시.' },
  { slug: 'compare',    name: '비교',      nameEn: 'Compare',    icon: '⚖️', color: '#B91C1C', bgColor: '#FEF2F2', priority: 3, featured: true, description: '실손·자동차 다이렉트·암·치아·운전자 보험 비교 매트릭스.' },
  { slug: 'tools',      name: '계산기',    nameEn: 'Tools',      icon: '🧮', color: '#0284C7', bgColor: '#E0F2FE', priority: 4, featured: true, description: '실손·자동차·암·연금·펫 보험료 추정 및 세액공제·환급금 계산기.' },
  { slug: 'situations', name: '상황별',    nameEn: 'Situations', icon: '🧭', color: '#7C3AED', bgColor: '#EDE9FE', priority: 5, featured: true, description: '신혼·출산·자영업·시니어·첫차 등 상황별 보험 우선순위.' },
  { slug: 'guides',     name: '가이드',    nameEn: 'Guides',     icon: '📖', color: '#475569', bgColor: '#F1F5F9', priority: 6, featured: true, description: '청구 절차·세액공제·약관 해설·분쟁 대응 심화 가이드.' },
  { slug: 'companies',  name: '보험사',    nameEn: 'Companies',  icon: '🏢', color: '#0891B2', bgColor: '#CFFAFE', priority: 7, featured: false, description: '국내 주요 생명·손해보험사 개요와 재무건전성(공시 기반).' },
  { slug: 'addons',     name: '보조 생활', nameEn: 'Addons',     icon: '🛒', color: '#EA580C', bgColor: '#FFF7ED', priority: 8, featured: false, description: '블랙박스·카시트·낙상방지 등 보험과 연계되는 생활용품 (쿠팡 파트너스).' },
]
module.exports = topics
