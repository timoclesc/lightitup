import Head from 'next/head'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Logo from '../components/logo'
import Intro from '../components/intro'
import styles from './layout.module.css'
import cn from 'classnames'

export default function Layout({ isHome, children, title, slug, desc }) {
  return (
    <>
      <Meta title={title} desc={desc} slug={slug}/>
      <Head>
          <title>The Puncher's Chance Podcast</title>
      </Head>
      <div className="min-h-screen">
        <header className={styles.header}>
          <div className="container mx-auto md:flex items-center">
            <Logo url={'/'} />
            <Intro />
          </div>
        </header>
        <main className="container mx-auto">
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}
