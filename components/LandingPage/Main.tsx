import Image from 'next/image'
import { FaDiscord } from 'react-icons/fa';
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
                        <a className='' href="www.youtube.com"> Join Our Discord</a>
                    </span>


                    <div className = "flex justify-start sm:justify-start lg:justify-start xl:justify-start -space-x-1.5">
                    <img className='w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white'
                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" alt="" />
                     <img className='w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white'
                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" alt="" />
                    <img className='w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white'
                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" alt="" />
                    <img className='w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white'
                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" alt="" />
                    <img className='w-6 h-6 rounded-full bg-slate-100 ring-2 ring-white dark:ring-slate-700 dark:group-hover:ring-white'
                     src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" alt="" />
                    
                    </div>
                    <p className=' text-slate-300'> Already 36 joined..</p>
                    


                </div>
                </div>

                </div>
        
            </main>
            )
}

export default Main;