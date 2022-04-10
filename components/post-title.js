export default function PostTitle({ tag, children }) {
  const Tag = tag ? tag : 'h1';
  return (
    <Tag className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </Tag>
  )
}
