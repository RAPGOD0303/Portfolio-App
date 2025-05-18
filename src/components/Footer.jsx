import { Github, Linkedin, Twitter } from 'lucide-react';

// Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between text-center md:text-left space-y-8 md:space-y-0">
        
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-semibold">Rajvardhan Pimple</h2>
          <p className="text-sm">Building the future of web development</p>
        </div>

        {/* Center Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm">
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
  <h2 className="text-lg font-semibold mb-2">Connect</h2>
  <div className="flex justify-center md:justify-start space-x-4 text-xl">
    <a href="#" aria-label="GitHub" className="hover:text-gray-300">
      <Github className="w-5 h-5" />
    </a>
    <a href="#" aria-label="LinkedIn" className="hover:text-gray-300">
      <Linkedin className="w-5 h-5" />
    </a>
    <a href="#" aria-label="Twitter" className="hover:text-gray-300">
      <Twitter className="w-5 h-5" />
    </a>
  </div>
</div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-sm text-center mt-8 border-t border-white/20 pt-4">
        © 2025 Rajvardhan Pimple. All rights reserved.
      </div>
    </footer>
  );
}
