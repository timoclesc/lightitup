import Image from 'next/image'
import Link from 'next/link'
import { SITE_TITLE } from 'lib/constants'

export default function Logo({ url }) {
  return (
    <Link href={`${url}`}>
      <a className="max-w-sm">
        <Image
          width={466}
          height={473}
          layout="intrinsic"
          alt={SITE_TITLE}
          src="/image/logo.jpg"
          priority={true}
      /></a>
    </Link>
  )
}
