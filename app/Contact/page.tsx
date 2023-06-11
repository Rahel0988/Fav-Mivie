import Image from 'next/image'
import { maxHeaderSize } from "http";
import Link from 'next/link'
export default function Contact(){
    return(
        <main >
           
            <ul className="">
      <li>
        <Link href="/"className="hover:to-blue-900 hover:font-semibold hover:shadow">Home</Link>
      </li>
      <li>
        <Link href="/About"className="hover:to-blue-900 hover:font-semibold hover:shadow">About </Link>
      </li>
      <li>
        <Link href="/Contact" className="text-blue-900 font-bold px-10">Contact</Link>
      </li>
    </ul>
    <h1 className="bg-violet-400 bg-clip-text text-blue-800 mt 20- font-bold text text-4xl text-center  " >Contact Us anytime, from anywhere </h1>
            <div className="py-10">
                <p className="text 2xl ">keep in touch with me ,leave your question through this email ...#email adress..</p>
            </div>
        </main>
    )
}
