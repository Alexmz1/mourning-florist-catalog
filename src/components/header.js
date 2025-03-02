import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuBurger = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuBurger.current && !menuBurger.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="w-full bg-black text-white py-4">
            <div className="container mx-auto grid grid-cols-3 items-center px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <img src="/images/logo/logoFleuriste.png" alt="Logo" className="h-10 w-10" />
                    </Link>
                </div>

                {/* Title */}
                <div className="text-l font-bold text-center">
                    <p>Fleurs des pompes funèbres de Soisy-sur-Seine</p>
                </div>

                {/* Navigation */}
                <div className="flex justify-end items-center">
                    <nav className="hidden md:flex space-x-8">
                        <Link href="#compositions" className="text-lg">Compositions</Link>
                        <Link href="#contact" className="text-lg">Contact</Link>
                    </nav>

                    {/* Mobile Menu */}
                    <div className="md:hidden relative" ref={menuBurger}>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-3xl text-white">
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>

                        {isOpen && (
                            <ul className="absolute top-16 right-4 bg-black border border-white shadow-lg rounded-lg w-48 p-4 space-y-2 z-50">
                                <li>
                                    <Link href="#compositions" className="block py-2 text-white hover:text-purple-500" onClick={() => setIsOpen(false)}>Compositions</Link>
                                </li>
                                <li>
                                    <Link href="#contact" className="block py-2 text-white hover:text-purple-500" onClick={() => setIsOpen(false)}>Contact</Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
