import Head from 'next/head'
import { Navbar } from '@/components/Navbar'
import { About } from '@/components/About'

export default function AboutPage() {
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
        <About />
      </main>
    </>
  )
}