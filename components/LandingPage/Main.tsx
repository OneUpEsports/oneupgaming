import Image from 'next/image' 
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import {FaArrowDown} from 'react-icons/fa'

function Main() {
    return (
    <main className="flex justify-between p-5 max-w-7xl mx-auto">
                <div className="space-y-5 xl:space-y-5">
                    <span className=" font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-600">
                        Are you ready for the Future of Esports?
                    </span> 
                <div>

                <div className="space-y-5 xl:space-y-5">
                    <span className=" text-sm  text-center  text-slate-300 border-solid border-2 border-sky-500 p-2 rounded-md">
                        <a className='' href="https://discord.gg/mjGsssjQ" >  Join Our Discord  
                        </a>
                    </span>                    
                </div>
                </div>

                </div>
        
            </main>
            )
}

export default Main;