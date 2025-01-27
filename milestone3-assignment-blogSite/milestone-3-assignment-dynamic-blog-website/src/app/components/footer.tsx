import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
            <div className="mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-self-center px-20">
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-bold mb-4 text-gray-100">About Us</h4>
                        <p className="text-sm">
                            We are a team of passionate individuals dedicated to providing innovative AI solutions.
                        </p>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-bold mb-4 text-gray-100">Explore</h4>
                        <ul className="text-sm space-y-3">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors duration-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-white transition-colors duration-300">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-white transition-colors duration-300">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition-colors duration-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-bold mb-4 text-gray-100">Connect</h4>
                        <form className="flex flex-col space-y-2 w-full max-w-xs mx-auto md:mx-0">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="bg-gray-800 text-gray-400 rounded p-2 focus:outline-none focus:ring focus:ring-blue-500 w-full text-sm"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="bg-gray-800 text-gray-400 rounded p-2 focus:outline-none focus:ring focus:ring-blue-500 w-full text-sm"
                                required
                            />
                            <textarea
                                placeholder="Your Message"
                                className="bg-gray-800 text-gray-400 rounded p-2 focus:outline-none focus:ring focus:ring-blue-500 w-full h-16 resize-none text-sm"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-300 text-sm"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                    <div className="text-center col-span-full mt-8 pt-4 border-t border-gray-700 text-xs text-gray-500">
                      &copy; {new Date().getFullYear()} My Blog. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;