import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Layout from '../components/layout'
import { getAllEpisodesForHome, getAllPostsForHome } from '../lib/api'
import SectionSeparator from 'components/section-separator'
import Presenters from 'components/presenters'

export default function Index({ preview, allPosts, allAuthors }) {
  const heroPost = allPosts[0].node
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout preview={preview}>
        <Container>
          <Presenters allAuthors={allAuthors} />
          <SectionSeparator />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const data = await getAllEpisodesForHome(previewData)
  const allPosts = data.allEpisodes.edges
  const allAuthors = data.allAuthors.edges
  return {
    props: { preview, allPosts, allAuthors }
  }
}
