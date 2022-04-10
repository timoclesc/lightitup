

export default function Intro({isHome}) {
  const title = 'The Puncher\'s Chance\u00a0Podcast'
  const byline = 'Follow all things in Aussie boxing hosted by Brendan Bradford \u0026 Adam Copland⁣'
  const titleStyles = 'text-5xl md:text-7xl font-display tracking-wide leading-none'
  const bylineStyles = 'md:text-left text-lg mt-5'
  return (
    <section className="mt-4 pb-8 md:mt-8 pl-4 pr-4 md:pl-8 md:pr-8">
      {isHome ? (
        <h1 className={titleStyles}>
          {title}
        </h1>
      ) : (
        <p className={titleStyles}>
          {title}
        </p>
      )}
      <p className={bylineStyles}>
        {byline}
      </p>
    </section>
  )
}
