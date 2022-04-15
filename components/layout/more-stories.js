import PostPreview from '@/modules/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section className="h-full">
      <h2 className="text-3xl md:text-6xl mb-10 font-display font-bold leading-none text-gunpowder max-w-sm mx-auto">
        Episodes
      </h2>
      {posts.map(({ node }) => (
        <PostPreview
          key={node._meta.id}
          title={node.title}
          coverImage={node.coverimage}
          date={node.date}
          author={node.author}
          content={node.content}
          number={node.number}
          season={node.season}
          apple={node.apple}
          spotify={node.spotify}
        />
      ))}
    </section>
  )
}
