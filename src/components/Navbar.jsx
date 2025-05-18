import {Menu, X} from "lucide-react";
import { useState } from "react";
export default function Navbar() {
    const[isMenuopen, setMenuopen] = useState(false);
  return (
    <>
      <nav className="w-full h-max bg-gradient-to-r from-indigo-400 via-purple-500 to-teal-400 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                    <span className="text-2xl font-bold text-black bg-opacity-20 bg-white px-3 py-4 justify-start">RP</span>
                    </div>
                    <div className="ml-4">
                        <span className="text-white font-semibold text-lg">Rajvardhan Pimple</span>
                    </div>

                    <div className="hidden md:block">
                        <ul className="flex space-x-2">
                            <li>
                                <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium" href="">About</a>
                            </li>

                             <li>
                                <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium" href="#skills">Skills</a>
                            </li>

                             <li>
                                <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium" href="">Tracer</a>
                            </li>

                             <li>
                                <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium" href="#projects">Projects</a>
                            </li>

                             <li>
                                <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium" href="#Contact">Contacts</a>
                            </li>
                        </ul>
                    </div>

                    {/* mobile navigation */}
                    <div className="md:hidden">
                        <button onClick={()=>setMenuopen(!isMenuopen)} className="text-white hover:text-teal-200 focus:outline-none transition-color duration-200s">
                        {isMenuopen ? (
                            <X className="h-6 w-6"></X>
                        ):(
                            <Menu className="w-6 h-6"></Menu>
                        )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {/* mobile navigation */}

        {isMenuopen &&(
            <div className="md:hidden bg-gradient-to-b from-indigo-600 to-purple-600">
                <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
                    <a className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-colors duration-300">About</a>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
                    <a className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-colors duration-300">Skills</a>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
                    <a className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-colors duration-300">Tracer</a>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
                    <a className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-colors duration-300">Projects</a>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
                    <a className="text-white hover:text-teal-400 block px-3 py-2 rounded-md transition-colors duration-300">Contact</a>
                </div>
            </div>
        )}
      </nav>
    </>
  );
}
