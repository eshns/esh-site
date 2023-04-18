import Head from 'next/head'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Skills } from '@/components/Skills'
import { Work } from '@/components/Work'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer';

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
        <Skills />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
