import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const menuBurger = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuBurger.current && !menuBurger.current.contains(event.target)) {
                setIsOpen(false);
            }
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="w-full bg-black text-white py-4">
            <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 relative">
                
                {/* Menu Burger */}
                <div className="lg:hidden" ref={menuBurger}>
                <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-white flex flex-col items-center">
                    {isOpen ? <FaTimes /> : <FaBars />}
                    <span className="text-xs mt-1 text-center">Menu</span>
                </button>

                    {/* Menu Mobile */}
                    {isOpen && (
                        <ul className="absolute top-16 left-4 bg-black border border-white shadow-lg rounded-lg w-48 p-4 space-y-2 z-50">
                            <li>
                                <Link href="#information" className="block py-2 text-white" onClick={() => setIsOpen(false)}>Information</Link>
                            </li>

                            {/* Dropdown Compositions pour mobile */}
                            <li>
                                <button 
                                    className="block w-full text-left py-2 text-white flex justify-between items-center"
                                    onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                                >
                                    Compositions
                                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>

                                {isMobileDropdownOpen && (
                                    <ul className="bg-white rounded-lg mt-2 p-2">
                                        <li><Link href="#les-coeurs" className="block py-2 text-black" onClick={() => setIsOpen(false)}>Les coeurs</Link></li>
                                        <li><Link href="#les-couronnes" className="block py-2 text-black" onClick={() => setIsOpen(false)}>Les couronnes</Link></li>
                                        <li><Link href="#les-coussins" className="block py-2 text-black" onClick={() => setIsOpen(false)}>Les coussins</Link></li>
                                        <li><Link href="#les-croix" className="block py-2 text-black" onClick={() => setIsOpen(false)}>Les croix</Link></li>
                                        <li><Link href="#les-dessus-de-cercueil" className="block py-2 text-black" onClick={() => setIsOpen(false)}>Les dessus de cercueil</Link></li>
                                        <li><Link href="#les-gerbes-piquées" className="block py-2 text-black" onClick={() => setIsOpen(false)}>Les gerbes piquées</Link></li>
                                    </ul>
                                )}
                            </li>

                            <li>
                                <Link href="#contact" className="block py-2 text-white" onClick={() => setIsOpen(false)}>Contact</Link>
                            </li>
                        </ul>
                    )}
                </div>

                {/* Texte à gauche (visible sur desktop, centré sur mobile) */}
                <div className="block text-center lg:text-left">
                    <p className="text-md">Fleurs du service funéraire de la Seine</p>
                </div>


                {/* Espace vide à droite pour équilibrer la mise en page sur mobile */}
                <div className="lg:hidden w-8"></div>

                {/* Navigation Desktop avec dropdown "Compositions" */}
                <nav className="hidden lg:flex space-x-8 ml-auto">
                    <Link href="#information" className="text-md">Information</Link>

                    {/* Dropdown Compositions (desktop) */}
                    <div 
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                        ref={dropdownRef}
                    >
                        <button className="text-md flex items-center">
                            Compositions
                            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Menu déroulant */}
                        {isDropdownOpen && (
                            <div className="absolute left-0 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                                <Link href="#les-coeurs" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Les coeurs</Link>
                                <Link href="#les-couronnes" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Les couronnes</Link>
                                <Link href="#les-coussins" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Les coussins</Link>
                                <Link href="#les-croix" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Les croix</Link>
                                <Link href="#les-dessus-de-cercueil" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Les dessus de cercueil</Link>
                                <Link href="#les-gerbes-piquées" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Les gerbes piquées</Link>
                            </div>
                        )}
                    </div>

                    <Link href="#contact" className="text-md">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
