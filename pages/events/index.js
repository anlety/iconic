import AllEvents from '@/src/components/events/AllEvents';
import React from 'react'
// import Image from 'next/image';
// import Link from 'next/link';




const EventsPage = ({data}) => {
  return (
    <AllEvents data={data}/>
  //   <div className='events_page'>
  //   <h1>All the Event </h1>
  //   <div>
  //     {data?.map(event => (
  //       <Link key={event.id} href={`/events/${event.id}`}>
  //         <Image src={event.image} alt={event.title} width={300} height={300}/>
  //     <h2>{event.title}</h2>
  //       </Link>
       
  //     ))}
    
  //   </div>
  // </div>
  )
}

export default EventsPage;

export async function getStaticProps() {
  const {events_categories} = await import('/data/data.json')
  return {
    props: {
      data: events_categories,
    }, // will be passed to the page component as props
  }
}

