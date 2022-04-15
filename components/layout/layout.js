import Head from 'next/head'
import Meta from '@/layout/meta'
import { SITE_TITLE } from 'lib/constants'
import Header from '@/modules/header'

export default function Layout({ isHome, children, title, slug, desc, homepage }) {
  return (
    <>
      <Meta title={title} desc={desc} slug={slug}/>
      <Head>
          <title>{SITE_TITLE}</title>
      </Head>
      <div className="min-h-screen max-w-[1400px] mx-auto">
        <div className="md:relative">
          <Header isHome={isHome} tag={homepage.tag} description={homepage.description} />
          <main className="flex flex-col md:ml-[50%]">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}
