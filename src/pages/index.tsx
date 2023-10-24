import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

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
      <main>
        <p>here is main page</p>
      </main>
    </>
  )
}
