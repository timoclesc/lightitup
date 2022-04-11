import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-4xl md:text-5xl font-display tracking-wide leading-none">
        More Episodes
      </h2>
      <div className="two-col-container">
        {posts.map(({ node }) => (
          <PostPreview
            key={node._meta.id}
            title={node.title}
            coverImage={node.coverimage}
            date={node.date}
            author={node.author}
            excerpt={node.excerpt}
            number={node.number}
            season={node.season}
          />
        ))}
      </div>
    </section>
  )
}
