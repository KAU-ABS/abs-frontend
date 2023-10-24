import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/UI/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Aerospace Broadcasting Station</title>
        <meta name="description" content="abs_hannarae" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/abs_symbol.svg" />
      </Head>
      <main className='h-full w-full'>
        <div className="h-full w-full bg-[url('/back2.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
          <Navbar />
          <div className='pt-20'>
            <p className=''>here is main page</p>
          </div>
        </div>
      </main>
    </>
  )
}
