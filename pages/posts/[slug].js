import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import IconLinks from '../../components/icon-links'
import ContentContainer from '../../components/content-container'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import { CMS_NAME } from '../../lib/constants'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?._meta?.uid) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview} title={post.title[0].text} slug={post?._meta?.uid} desc={post.excerpt}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle tag="h1">Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title[0].text} | The Puncher's Chance Podcast
                </title>
              </Head>
              <PostHeader
                title={post.title}
                date={post.date}
                episodenumber={post.episodenumber}
                seasonnumber={post.seasonnumber}
              />
              <ContentContainer>
                <PostBody content={post.content} />
                <IconLinks appleLink={post.applelink} spotifyLink={post.spotifylink} />
              </ContentContainer>
            </article>
            <SectionSeparator />
            {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await getPostAndMorePosts(params.slug, previewData)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? [],
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ node }) => `/posts/${node._meta.uid}`) || [],
    fallback: true,
  }
}
