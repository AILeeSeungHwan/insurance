import Layout from '../../components/Layout'
import PostRenderer from '../../components/PostRenderer'
import PageTracker from '../../components/PageTracker'
import situations from '../../data/situations'
import categories from '../../data/categories'
import guides from '../../data/guides'
import tools from '../../data/tools'
import addons from '../../data/addons'

export async function getStaticPaths() {
  return { paths: situations.map(p => ({ params: { slug: p.slug } })), fallback: false }
}

export async function getStaticProps({ params }) {
  const meta = situations.find(p => p.slug === params.slug)
  if (!meta) return { notFound: true }

  let postData = null
  try { postData = require(`../../posts/situations/${meta.slug}.js`) } catch (_) { postData = null }
  if (postData && postData.default) postData = postData.default

  const related = [
    ...(meta.recommendedCategorySlugs || []).map(s => categories.find(x => x.slug === s)).filter(Boolean).map(x => ({ ...x, url:`/categories/${x.slug}/` })),
    ...(meta.recommendedToolSlugs || []).map(s => tools.find(x => x.slug === s)).filter(Boolean).map(x => ({ ...x, url:`/tools/${x.slug}/` })),
    ...(meta.recommendedGuideSlugs || []).map(s => guides.find(x => x.slug === s)).filter(Boolean).map(x => ({ ...x, url:`/guides/${x.slug}/` })),
    ...(meta.recommendedAddonSlugs || []).map(s => addons.find(x => x.slug === s)).filter(Boolean).map(x => ({ ...x, url:`/addons/${x.slug}/` })),
  ].slice(0, 8)

  return { props: { meta, postData, related } }
}

export default function SituationDetail({ meta, postData, related }) {
  return (
    <Layout title={meta.title} description={meta.description} topAd={false}>
      <PageTracker slug={meta.slug} title={meta.title} />
      <PostRenderer meta={meta} postData={postData} related={related} />
    </Layout>
  )
}
