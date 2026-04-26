import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import companies from '../../data/companies'
import products  from '../../data/products'

export async function getStaticPaths() {
  return { paths: companies.map(p => ({ params: { slug: p.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = companies.find(p => p.slug === params.slug)
  if (!meta) return { notFound: true }

  let postData = null
  try { postData = require(`../../posts/companies/${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  const related = products
    .filter(p => p.companySlug === meta.slug)
    .map(p => ({ ...p, url: `/products/${p.slug}/` }))
    .slice(0, 6)

  return { props: { meta, postData, related } }
}

export default function CompanyDetail({ meta, postData, related }) {
  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer meta={meta} postData={postData} related={related} />
    </Layout>
  )
}
