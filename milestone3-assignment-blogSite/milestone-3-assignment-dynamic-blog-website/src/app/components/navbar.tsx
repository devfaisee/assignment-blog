import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 shadow-md sticky top-0 z-50"> 
      <div className="container mx-auto px-6 flex justify-between items-center"> 
        <Link href="/" className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300"> 
          My Blog
        </Link>
        <ul className="flex space-x-8"> 
          <li>
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"> 
              Home
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;