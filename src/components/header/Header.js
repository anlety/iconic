import Image from "next/image";
import Link from "next/link";
Image

const Header = () => {
  return (
    <header>
      <div>
      <div className='topNav'>
        {/* <Image src={} alt='logo' width={50} height={50} /> */}
        <h1>LK</h1>
        <nav>
          <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/events'>Events</Link></li>
            <li><Link href='/about'>About Us</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
          </ul>
              
              
              
              
              
             
        </nav>
      </div>
        <h1> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proiden</h1>
        </div>
      </header>
  )
}

export default Header