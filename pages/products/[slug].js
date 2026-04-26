import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import products   from '../../data/products'
import categories from '../../data/categories'
import companies  from '../../data/companies'

export async function getStaticPaths() {
  return { paths: products.map(p => ({ params: { slug: p.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = products.find(p => p.slug === params.slug)
  if (!meta) return { notFound: true }

  let postData = null
  try { postData = require(`../../posts/products/${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  const related = [
    ...(meta.relatedProductSlugs || []).map(s => products.find(x => x.slug === s)).filter(Boolean).map(x => ({ ...x, url:`/products/${x.slug}/` })),
    ...(meta.relatedCategorySlug ? [categories.find(c => c.slug === meta.relatedCategorySlug)].filter(Boolean).map(c => ({ ...c, url:`/categories/${c.slug}/` })) : []),
    ...(meta.companySlug ? [companies.find(c => c.slug === meta.companySlug)].filter(Boolean).map(c => ({ ...c, url:`/companies/${c.slug}/` })) : []),
  ].slice(0, 6)

  return { props: { meta, postData, related } }
}

export default function ProductDetail({ meta, postData, related }) {
  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer meta={meta} postData={postData} related={related} />
    </Layout>
  )
}
