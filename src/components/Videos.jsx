import React from "react";

const Videos = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Sección de la imagen y el primer video */}
      <div className="w-full flex justify-between mt-8">
        <div className="w-1/2 pr-4">
          <img
            src="https://www.tebeosfera.com/T3content/img/T3_muestras/T3_numeros/v/m/m_depresion_o_victoria_2020_reservoir_3930vm.jpg"
            alt="Imagen"
            className="w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
          />
        </div>
        <div className="w-1/2 pl-4">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?loop=1&playlist=UIcVLxoPzLI"
            frameBorder="0"
            allow="encrypted-media"
            title="Video de YouTube"
            className="rounded-lg shadow-lg"
            style={{ height: "256px" }}
          />
        </div>
      </div>

      {/* Sección de los dos videos adicionales */}
      <div className="mt-8 flex space-x-4">
        <div className="w-1/2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/i4dwATyTcCk"
            frameBorder="0"
            allow="encrypted-media"
            title="Segundo Video"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-1/2">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/XwD6YO_aaYs"
            frameBorder="0"
            allow="encrypted-media"
            title="Tercer Video"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Videos;
