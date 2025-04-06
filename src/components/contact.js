import { FaPhone, FaEnvelope } from "react-icons/fa";
import OrderForm from "./orderForm";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 pb-20" style={{ backgroundImage: 'url(/images/bgContact.jpg)', backgroundSize: 'cover', backgroundPosition: 'center',}}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"> 
        <path fill="white" fillOpacity="1" d="M0,224L80,218.7C160,213,320,203,480,181.3C640,160,800,128,960,128C1120,128,1280,160,1360,176L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
      </svg>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-md flex flex-col h-full items-center text-center">
            <div className="flex flex-col space-y-4">
              <span className="text-black text-2xl font-bold">Contact et adresse</span>
              <span className="text-black text-lg">
                Centre commercial des Meillottes, 1 rue de la forêt de Sénart, 91450 Soisy-sur-Seine
              </span>
            </div>
            <ul className="flex flex-col items-center gap-6 text-black mt-6">
              <li className="flex items-center gap-2">
                <FaPhone className="text-black" />
                <p>06 03 05 91 95</p>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-black" />
                <a href="mailto:fleursdelaseine@gmail.com" className="hover:underline">fleursdelaseine@gmail.com</a>
              </li>
            </ul>
            <p className="text-black mt-4">
              Préférence de contact par mail, si pas de retour n&rsquo;hésitez pas à laisser un SMS.
            </p>


            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.8556102286766!2d2.4553558765596786!3d48.65087737130489!2m3!1f0!2f0!3</a>f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5e08f4d41bc51%3A0x90f9e0d74c940714!2sMarie%20Starck!5e0!3m2!1sfr!2sfr!4v1740942980240!5m2!1sfr!2sfr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>

          <div className="w-full h-full rounded-lg overflow-hidden shadow-lg flex">
            <OrderForm />
            {/*<iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.8556102286766!2d2.4553558765596786!3d48.65087737130489!2m3!1f0!2f0!3</a>f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5e08f4d41bc51%3A0x90f9e0d74c940714!2sMarie%20Starck!5e0!3m2!1sfr!2sfr!4v1740942980240!5m2!1sfr!2sfr" allowFullScreen="" loading="lazy" referrerPolicy="no-re</div>ferrer-when-downgrade"></iframe>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;