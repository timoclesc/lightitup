import Image from 'next/image'
import IconLinks from 'components/icon-links'

export default function Avatar({ author }) {
  var {name, picture, bio, instagram, _meta} = author
  return (
    <div className="flex items-center mb-4" key={_meta}>
      <div className="w-36 h-36 grow-0 shrink-0 relative mr-6">
        <Image
          src={picture.url}
          layout="fill"
          className="rounded-full object-cover"
          alt={name[0].text}
        />
      </div>
      <div>
        <h4 className="text-2xl lg:text-3xl font-bold mb-3">{name}</h4>
        <IconLinks instagramLink={instagram} />
      </div>
    </div>
  )
}
