import React from "react";

function TopImages() {
  const images = [
    {
      src: "https://ladepresionnoexiste.com/wp-content/uploads/2020/07/la-depresion-no-existe-interiores-15.png?w=500",
      link: "https://ladepresionnoexiste.com/tag/leer-gratis/",
      alt: "Información sobre Depresión",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGL-tOnzrx7eLCDWbyvI4EoahTa_084YNfVw&s",
      link: "https://lacomicteca.com/depresion-o-victoria/",
      alt: "Apoyo emocional",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjiyGZK8hHB6n4FEKFuif2A2C00HGyIppFgw&s",
      link: "",
      alt: "Línea de ayuda Colombia",
    },
  ];

  return (
    <div className="w-full py-6 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {images.map((img, index) => (
          <a
            key={index}
            href={img.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block transform hover:scale-105 transition duration-300"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default TopImages;
