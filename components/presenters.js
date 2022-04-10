import Avatar from 'components/avatar'

export default function Presenters({ allAuthors }) {
  return (
    <section className="two-col-container">
      <h2 className="mb-8 text-4xl md:text-5xl font-display tracking-wide leading-none">
        Presenters
      </h2>
      <div >
        {allAuthors.map(
              ({node: author}) => <Avatar author={author} key={author._meta}/>
            )}
      </div>
    </section>
  )
}
