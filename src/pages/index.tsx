import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/UI/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className='h-full w-full'>
        <div className="h-full w-full bg-zinc-800 bg-center bg-fixed bg-cover">
          <Navbar />
          <div className='pt-20'>
          </div>
          <div className='w-full flex flex-col items-center'>
            <p className='w-fit text-white text-sm'>here is main page</p>
            <h1 className='w-fit text-white text-8xl'>ABS</h1>
            
          </div>
        </div>
      </main>
    </>
  )
}
