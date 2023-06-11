import image from 'next/image'
import Link from 'next/link'
import { maxHeaderSize } from "http";
import path from 'path';

export default function Home (){
    return (
        <div>
            {
              ['1','2','3'].map(path => {
               return(
                <div key={path}>
                 
                </div>
               ) 
              })
            }
        </div>
    )
}
