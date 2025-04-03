const Info = () => {
  return (
    <section id="information">
      <div className="container mx-auto pt-28 sm:pt-44 px-4 sm:px-6 lg:px-8 text-center max-w-screen-md">
        <img 
          src="/images/logo/logo.png" 
          alt="Logo Fleuriste" 
          className="mx-auto w-64 sm:w-80 md:w-96 lg:w-[500px] xl:w-[600px] 2xl:w-[700px]"
        />
        <p className="mt-3 text-sm sm:text-sm md:text-base lg:text-lg text-black">
          Les couleurs des fleurs peuvent être entièrement choisies selon vos préférences. Contactez-nous pour discuter de vos besoins et pour toute personnalisation.
        </p>
        <p className="mt-3 text-sm sm:text-sm md:text-base lg:text-lg text-black">
          Aucun paiement ne peut être effectué en ligne. Veuillez remplir le formulaire en bas de page pour passer commande.
        </p>
      </div>
      <svg className="block w-full -mb-[2px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#f1ece3" fillOpacity="1" d="M0,256L60,234.7C120,213,240,171,360,170.7C480,171,600,213,720,240C840,267,960,277,1080,272C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>    
    </section>
  );
};

export default Info;