import { ArrowUpRight } from "lucide-react";

export default function FooterPage(){
  return (
    <footer className=" bg-[#1E1E1E] text-gray-300 py-12 px-6 md:px-16 lg:px-24">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-10  border-gray-700">
        {/* Logo + Socials */}
        <div className="col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Intervue
          </h2>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white">
              Facebook
            </a>
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              Linkedin
            </a>
            <a href="#" className="hover:text-white">
              Pinterest
            </a>
          </div>

          <div className="mt-16">
            <h3 className="text-lg font-semibold text-yellow-400">
              Hire better & faster
            </h3>
            <div className="flex items-center mt-2 border-b border-gray-500 pb-1">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent outline-none text-sm flex-1 text-gray-300 placeholder-gray-500"
              />
              <ArrowUpRight className="text-yellow-400 w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-white mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">So gehts</a></li>
            <li><a href="#" className="hover:text-white">Erfahrung</a></li>
            <li><a href="#" className="hover:text-white">Aligner</a></li>
            <li><a href="#" className="hover:text-white">Preise</a></li>
            <li><a href="#" className="hover:text-white">Standorte</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-white mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Lift Media</a></li>
            <li><a href="#" className="hover:text-white">Offene Stellen</a></li>
            <li><a href="#" className="hover:text-white">Presse kit</a></li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-semibold text-white mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Gratis Termin</a></li>
            <li><a href="#" className="hover:text-white">Freunde einladen</a></li>
            <li><a href="#" className="hover:text-white">Patienteninfo</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-500 gap-2">
        <p>© 2025 Intervue. Crafted by great minds.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Datenschutz</a>
          <a href="#" className="hover:text-white">Impressum</a>
          <a href="#" className="hover:text-white">Cookie Policy</a>
          <a href="#" className="hover:text-white">AGBs</a>
        </div>
      </div>
    </footer>
  );
};


