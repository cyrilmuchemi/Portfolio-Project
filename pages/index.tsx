import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Cyril Muchemi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <section id='hero' className='snap-center'>
      <Hero/>
      </section>
      {/* About  */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  )
}

export default Home