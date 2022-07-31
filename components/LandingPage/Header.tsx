import Link from "next/link";

function Header() {
    return(
        <header className="flex justify-between p-5 max-w-7xl mx-auto">
            
        <div className="flex items-center space-x-4">  
            <Link href="/">
                <img className="w-44 object-contain cursor-pointer" 
                src="https://i.imgur.com/vbZTT0A.png" 
                alt="" /> 
            </Link>
            
            <div className="hidden md:inline-flex items-center space-x-4">
                {/* <h3>About</h3>
                <h3>Contact</h3> */}
                <h3 className="text-white bg-blue-400
                    px-5 py-1 rounded-full
                    " > Follow Us</h3>
            </div>
        <div>
    </div>
    </div>

            <div className="flex items-center space-x-5 border-gray-600">
                {/* <h3>Sign in</h3> */}
                <h3 className="border px-5 py-1 rounded-full border-gray-600 cursor-pointer
                    hover:border-red-400 ">
                    SOON 🔥
                </h3>
            </div>
    </header>
    ) 
}

export default Header;

