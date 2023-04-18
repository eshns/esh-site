import Head from 'next/head';
import { Navbar } from '@/components/Navbar';
import { Work } from '@/components/Work';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function SkillsPage() {
  return (
    <>
      <Head>
        <title>Emmanuel Hernandez</title>
        <meta name='description' content='Emmanuel Santiago Hernandez' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main>
        <Navbar />
        <Work />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
