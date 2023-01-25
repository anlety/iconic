import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AllEvents = ({data}) => {
  return (
    <div className='events_page'>
      
        {data?.map(event => (
          <Link key={event.id} href={`/events/${event.id}` }>
            <div className='card'>
              <Image src={event.image} alt={event.title} width={300} height={300}/>
        <h2>{event.title}</h2>
            </div>
            
          </Link>
         
        ))}
      
      
    </div>
  )
}

export default AllEvents