import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
    <main >
    
    
    <ul className="">
      <li>
        <Link href="/" className="text-blue-900 font-bold origin-top-left px-10 ">Home</Link>
      </li>
      <li>
        <Link href="/About" className="hover:to-blue-900 hover:font-semibold hover:shadow">About </Link>
      </li>
      <li>
        <Link href="/Contact"className="hover:to-blue-900 hover:font-semibold hover:shadow">Contact</Link>
      </li>
    </ul>
    <h1 className="text-5xl text-center">welcome to your FAV-Movie </h1>
    <div className="py-10">
      <p className="text-2xl top-10">Here you can find all your favourite movies </p>
    </div>
    <h2 className="text-xl py-5 ">Movie list </h2>
    <div>
    {
              ['1','2','3'].map(path => {
               return(
                <div key={path}>
                <img src="" alt="" />
                </div>
               ) 
              })
            }
    </div>
    </main>
  )
}

 

