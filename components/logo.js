import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ url }) {
  return (
    <div className="sm:mx-0">
      <Link href={`${url}`}>
        <a>
          <Image
            width={224}
            height={124}
            layout="intrinsic"
            alt={`The Puncher's Chance Podcast home page`}
            src="/image/logo2x.jpg"
            priority={true}
        /></a>
      </Link>
    </div>
  )
}
