export default function Home() {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left: Title + Tagline */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold">Gram Panchayat – Shanti Nagar</h1>
          <p className="mt-1 text-sm">Working together for a better tomorrow</p>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex gap-6 mt-3 md:mt-0">
          <button className="rounded-2xl px-4 py-4 bg-white text-black hover:bg-black hover:text-white">
            <a href="#about" className="hover:text-gray-200">
            About
          </a>
          </button>
          <button className="decoration-0 rounded-2xl px-4 py-4 bg-white text-black hover:bg-black hover:text-white">
            <a href="#contact" className="hover:text-gray-200">
            Contact
          </a>
          </button>
        </div>
      </div>
    </nav>
  );
}
