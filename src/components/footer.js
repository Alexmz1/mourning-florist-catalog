// components/Footer.js

const Footer = () => {
    return (
      <footer className="bg-black text-white py-4 fixed bottom-0 w-full">
        <div className="container mx-auto text-center">
          <p className="text-white">© {new Date().getFullYear()} - Tous droits réservés</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;