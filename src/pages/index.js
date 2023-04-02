import Head from 'next/head'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'
import { Contact } from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Emmanuel Hernandez</title>
        <meta name="description" content="Emmanuel Santiago Hernandez" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
    </>
  )
}
