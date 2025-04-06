import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-black p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link href="#information" className="link link-hover text-white">Informations</Link>
        <Link href="#compositions" className="link link-hover text-white">Compositions</Link>
        <Link href="#contact" className="link link-hover text-white">Contact</Link>
      </nav>

      <nav className="grid grid-flow-col gap-4 mt-4">
        <a href="https://www.instagram.com/mariestarckfleursdeuil/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline mx-2">
        <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
        </svg>
        </a>
      </nav>

      <aside className="mt-4">
        <p className="text-white">© {new Date().getFullYear()} - Tous droits réservés | Marie Starck</p>
      </aside>
    </footer>
  );
};

export default Footer;