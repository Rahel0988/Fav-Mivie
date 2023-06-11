import Image from 'next/image'
import { maxHeaderSize } from "http";
import Link from 'next/link'
export default function About(){
    return(
        <main >
            
             
        <ul>
      <li>
        <Link href="/"className="hover:to-blue-900 hover:font-semibold hover:shadow">Home</Link>
      </li>
      <li>
        <Link href="/About" className="text-blue-900 font-bold px-10 ">About </Link>
      </li>
      <li>
        <Link href="/Contact"className="hover:to-blue-900 hover:font-semibold hover:shadow">Contact</Link>
      </li>
    </ul>
    <h1 className="text-2xl py-10">Get to know Us</h1>
            <div className="font-serif">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur illo perspiciatis libero alias, fugiat corporis adipisci, delectus atque temporibus magnam error nulla ea ratione aliquam quis similique odio? Facilis, architecto.</p>
            </div>
        </main>
    )
}
