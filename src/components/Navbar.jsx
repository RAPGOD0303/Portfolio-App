export default function Navbar() {
  return (
    <>
      <nav className="w-full h-max bg-gradient-to-r from-indigo-400 via-purple-500 to-teal-400 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-16">
                <div className="flex items-center justify-center">
                    <div className="flex-shrink-0">
                    <span className="text-2xl font-bold text-black bg-opacity-20 bg-white px-3 py-4">RP</span>
                    </div>
                    <div className="ml-4">
                        <span className="text-white font-semibold text-lg">Rajvardhan Pimple</span>
                    </div>

                    <div>
                        <ul className="flex space-x-2">
                            <li>
                                <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium" href="">About</a>
                            </li>

                             <li>
                                <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium" href="">Skills</a>
                            </li>

                             <li>
                                <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium" href="">Tracer</a>
                            </li>

                             <li>
                                <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium" href="">Projects</a>
                            </li>

                             <li>
                                <a className="text-white hover:text-teal-200 px-3 py-2 rounded-md text-sm font-medium" href="">Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </nav>
    </>
  );
}
