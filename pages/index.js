import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/Home.module.css'
import HomePage from '@/src/components/home/HomePage'





export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Event Apps</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <HomePage data={data}/>
      
    </>
  )
}

export async function getServerSideProps() {
  const {events_categories} = await import('/data/data.json');
  // console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}


