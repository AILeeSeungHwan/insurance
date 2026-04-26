import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import categories from '../../data/categories'
import products   from '../../data/products'
import guides     from '../../data/guides'
import tools      from '../../data/tools'
import situations from '../../data/situations'

export async function getStaticPaths() {
  return { paths: categories.map(p => ({ params: { slug: p.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = categories.find(p => p.slug === params.slug)
  if (!meta) return { notFound: true }

  let postData = null
  try { postData = require(`../../posts/categories/${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  const related = [
    ...(meta.relatedProductSlugs || []).map(s => products.find(x => x.slug === s)).filter(Boolean).map(x => ({ ...x, url:`/products/${x.slug}/` })),
    ...(meta.relatedGuideSlugs || []).map(s => guides.find(x => x.slug === s)).filter(Boolean).map(x => ({ ...x, url:`/guides/${x.slug}/` })),
    ...(meta.relatedToolSlugs || []).map(s => tools.find(x => x.slug === s)).filter(Boolean).map(x => ({ ...x, url:`/tools/${x.slug}/` })),
    ...(meta.relatedSituationSlugs || []).map(s => situations.find(x => x.slug === s)).filter(Boolean).map(x => ({ ...x, url:`/situations/${x.slug}/` })),
  ].slice(0, 8)

  return { props: { meta, postData, related } }
}

export default function CategoryDetail({ meta, postData, related }) {
  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer meta={meta} postData={postData} related={related} />
    </Layout>
  )
}
