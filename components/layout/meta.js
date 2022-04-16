import { useRouter } from 'next/router'
import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL, SITE_DESC, SITE_TITLE} from 'lib/constants'

export default function Meta({title, desc, slug}) {
  const router = useRouter();
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
      <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Andika&display=swap" rel="stylesheet" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-32x32.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="canonical" href={`https://lightituppodcast.com/${slug ? slug : ''}`} />
      <meta name="og:url" content={`https://lightituppodcast.com${slug ? slug : ''}`}></meta>
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      <meta property="og:title" content={ title ? title : SITE_TITLE}></meta>


      <meta property="og:type" content="Website"></meta>

      <meta
        name="description"
        content={ desc ? desc : SITE_DESC}
      />

      <meta
        property="og:description"
        content={ desc ? desc : SITE_DESC}></meta>

      <meta property="og:image" content={'https://lightitup-timoclesc.vercel.app/image/meta_img.png'} />

    </Head>
  )
}
