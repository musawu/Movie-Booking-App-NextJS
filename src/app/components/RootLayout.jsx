import React from 'react';
import Link from 'next/link';

const RootLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-200">
      {/* Navbar */}
      <nav className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-4 fixed w-full z-10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">My App</div>
          <div className="space-x-4">
            <Link href="/" className="text-gray-200 hover:text-white transition duration-300">Home</Link>
            <Link href="/movie" className="text-gray-200 hover:text-white transition duration-300">About</Link>
            <Link href="/movie/moviedetails" className="text-gray-200 hover:text-white transition duration-300">MovieDetails</Link>
          </div>
        </div>
      </nav>

      {/* Added padding-top to account for fixed navbar */}
      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <aside className="bg-pink-900 text-gray-200 w-64 p-4 hidden md:block shadow-lg">
          <h2 className="text-xl font-bold mb-4">Navigation</h2>
          <ul>
            <li className="mb-2">
              <Link href="/" className="hover:text-gray-400 transition duration-300">Home</Link>
            </li>
            <li className="mb-2">
              <Link href="/movie" className="hover:text-gray-400 transition duration-300">Movies</Link>
            </li>
            <li className="mb-2">
              <Link href="/movie/moviedetails" className="hover:text-gray-400 transition duration-300">MovieDetails</Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 bg-black shadow-inner rounded-lg m-4">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-4 text-center shadow-lg sticky bottom-0 w-full">
        © 2024 My App. All rights reserved.
      </footer>

      {/* Bottom Menu for mobile */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 p-4 fixed bottom-0 left-0 right-0 flex justify-around text-gray-200 md:hidden shadow-lg">
        <Link href="/" className="hover:text-gray-400 transition duration-300">Home</Link>
        <Link href="/search" className="hover:text-gray-400 transition duration-300">Search</Link>
        <Link href="/profile" className="hover:text-gray-400 transition duration-300">Profile</Link>
      </div>
    </div>
  );
}

export default RootLayout;