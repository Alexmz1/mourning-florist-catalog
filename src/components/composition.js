import Image from "next/image";

const Compositions = () => {
  let imageCounter = 1;

  const compositions = [
    {
      id: 1,
      title: "Les coeurs",
      images: [
        { id: 1, src: "/images/coeur/coeur2D.jpg", alt: "Arrangement 5", name: "Coeur 2D", price: "350€" },
        { id: 2, src: "/images/coeur/coeur3.jpg", alt: "Arrangement 3", name: "Coeur blanc", price: "250€" },
        { id: 3, src: "/images/coeur/coeur65cm1.jpg", alt: "Arrangement 6", name: "Coeur 65cm", price: "250€" },
        { id: 4, src: "/images/coeur/coeur65cm2.jpg", alt: "Arrangement 7", name: "Coeur 65cm", price: "250€" },
        { id: 5, src: "/images/coeur/coeur65cm3.jpg", alt: "Arrangement 8", name: "Coeur 65cm", price: "250€" },
        { id: 6, src: "/images/coeur/coeur1.jpeg", alt: "Arrangement 1", name: "Coeur 40cm", price: "150€" },
        { id: 7, src: "/images/coeur/coeur2.jpg", alt: "Arrangement 2", name: "Coeur 40cm", price: "150€" },
        { id: 8, src: "/images/coeur/coeur4.jpg", alt: "Arrangement 4", name: "Coeur 40cm", price: "150€" },
      ]
    },
    {
      id: 2,
      title: "Les couronnes",
      images: [
        { id: 1, src: "/images/couronne/couronne1.jpg", alt: "Arrangement Funéraire 1", name: "Couronne", price: "300€" },
        { id: 2, src: "/images/couronne/couronne2.jpg", alt: "Arrangement Funéraire 2", name: "Couronne", price: "300€" },
        { id: 3, src: "/images/couronne/couronne3.jpg", alt: "Arrangement Funéraire 3", name: "Couronne", price: "300€" },
        { id: 4, src: "/images/couronne/couronne4.jpg", alt: "Arrangement Funéraire 4", name: "Couronne", price: "300€" },
        { id: 5, src: "/images/couronne/couronne5.jpg", alt: "Arrangement Funéraire 5", name: "Couronne", price: "300€" },
      ]
    },
    {
      id: 3,
      title: "Les coussins",
      images: [
        { id: 1, src: "/images/coussin/coussin.jpg", alt: "Bouquet Souvenir 1", name: "Coussin", price: "200€" },
        { id: 2, src: "/images/coussin/coussinOrange.jpeg", alt: "Bouquet Souvenir 1", name: "Coussin", price: "200€" },
        { id: 3, src: "/images/coussin/coussin1.jpg", alt: "Bouquet Souvenir 1", name: "Coussin", price: "170€" },
        { id: 4, src: "/images/coussin/coussinBlanc.jpg", alt: "Bouquet Souvenir 1", name: "Coussin", price: "170€" },
        { id: 5, src: "/images/coussin/coussinFushia.jpeg", alt: "Bouquet Souvenir 1", name: "Coussin", price: "170€" },
        { id: 6, src: "/images/coussin/coussinPeche.jpg", alt: "Bouquet Souvenir 1", name: "Coussin", price: "170€" },
        { id: 7, src: "/images/coussin/coussinViolineBleu.jpg", alt: "Bouquet Souvenir 1", name: "Coussin", price: "170€" },
        { id: 8, src: "/images/coussin/coussinPanier.jpg", alt: "Bouquet Souvenir 1", name: "Coussin", price: "170€" },
        { id: 9, src: "/images/coussin/coussinRosePastel.jpg", alt: "Bouquet Souvenir 1", name: "Coussin", price: "140€" },
        { id: 10, src: "/images/coussin/coussinViolineBlanc.jpeg", alt: "Bouquet Souvenir 1", name: "Coussin", price: "140€" },
        { id: 11, src: "/images/coussin/petitCoussin.jpg", alt: "Bouquet Souvenir 1", name: "Petit Coussin", price: "140€" },
      ]
    },
    {
      id: 4,
      title: "Les croix",
      images: [
        { id: 1, src: "/images/croix/croix1.jpg", alt: "Bouquet Souvenir 1", name: "Croix", price: "300€" },
      ]
    },
    {
      id: 5,
      title: "Les dessus de cercueil",
      description: "Le prix varie en fonction de la taille et de la composition. 120cm de long, 30cm de large 250€. 150cm de long, 40cm de large 300€.",
      images: [
        { id: 1, src: "/images/dessusCercueil/dessusCercueil1.jpg", alt: "Bouquet Souvenir 1", name: "Dessus de cercueil", price: "250€ - 300€" },
        { id: 2, src: "/images/dessusCercueil/dessusCercueil2.jpg", alt: "Bouquet Souvenir 1", name: "Dessus de cercueil", price: "250€ - 300€" },
        { id: 3, src: "/images/dessusCercueil/dessusCercueil3.jpg", alt: "Bouquet Souvenir 1", name: "Dessus de cercueil", price: "250€ - 300€" },
        { id: 4, src: "/images/dessusCercueil/dessusCercueil4.jpg", alt: "Bouquet Souvenir 1", name: "Dessus de cercueil", price: "250€ - 300€" },
        { id: 5, src: "/images/dessusCercueil/dessusCercueil5.jpeg", alt: "Bouquet Souvenir 1", name: "Dessus de cercueil", price: "250€ - 300€" },
        { id: 6, src: "/images/dessusCercueil/dessusCercueilTombant.jpg", alt: "Bouquet Souvenir 1", name: "Dessus de cercueil tombant", price: "100€" },
      ]
    },
    {
      id: 6,
      title: "Les gerbes piquées",
      images: [
        { id: 1, src: "/images/gerbePiquet/gerbePiquet1.jpg", alt: "Bouquet Souvenir 1", name: "Gerbe piquet", price: "100€" },
        { id: 2, src: "/images/gerbePiquet/gerbePiquet2.jpg", alt: "Bouquet Souvenir 1", name: "Gerbe piquet", price: "100€" },
        { id: 3, src: "/images/gerbePiquet/gerbePiquet3.jpg", alt: "Bouquet Souvenir 1", name: "Gerbe piquet", price: "100€" },
        { id: 4, src: "/images/gerbePiquet/gerbePiquet4.jpg", alt: "Bouquet Souvenir 1", name: "Gerbe piquet", price: "100€" },
      ]
    }
  ];

  return (
    <div>
      <section id="compositions" className="bg-gradient-to-b from-[#f1ece3] to-white">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-center text-4xl mb-16 text-black" style={{ fontFamily: 'Timess', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)' }}>Nos compositions</h2>
          {compositions.map((category) => (
            <div key={category.id} id={category.title.toLowerCase().replace(/\s+/g, '-')} className="mb-24 text-center">
              <h3 className="text-3xl mb-8 text-black text-center" style={{ fontFamily: 'FleurDeLeah', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>{category.title}</h3>
              
              {/* Affichage de la description si elle existe */}
              {category.description && (
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                  {category.description}
                </p>
              )}
              
              <div
                className={`grid ${
                  category.id === 5 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                } gap-12`}
              >
                {category.images.map((image) => (
                  <div
                    key={image.id}
                    className="card bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-2xl relative"
                  >
                    {/* Petit rond avec le numéro */}
                    <div className="absolute bottom-2 right-2 bg-gray-800 text-white text-sm w-8 h-8 flex items-center justify-center rounded-full z-10">
                      {imageCounter++}
                    </div>
                    <figure
                      className={`relative w-full ${
                        category.id === 5 && (image.id === 5 || image.id === 6)
                          ? "pt-[85%]"
                          : category.id === 5
                          ? "pt-[50%]"
                          : "pt-[100%]"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
                    </figure>
                    <div className="card-body text-center p-4">
                      <h4 className="text-lg mb-2 text-gray-800">{image.name}</h4>
                      <p className="text-md mb-2 text-gray-500 text-center">{image.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Compositions;