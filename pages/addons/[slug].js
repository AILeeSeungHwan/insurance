import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import addons from '../../data/addons'
import categories from '../../data/categories'

export async function getStaticPaths() {
  return { paths: addons.map(p => ({ params: { slug: p.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = addons.find(p => p.slug === params.slug)
  if (!meta) return { notFound: true }

  let postData = null
  try { postData = require(`../../posts/addons/${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  const related = (meta.relatedInsuranceCategorySlugs || [])
    .map(s => categories.find(x => x.slug === s))
    .filter(Boolean)
    .map(x => ({ ...x, url: `/categories/${x.slug}/` }))

  return { props: { meta, postData, related } }
}

export default function AddonDetail({ meta, postData, related }) {
  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer meta={meta} postData={postData} related={related} />
    </Layout>
  )
}
