import React, { useState } from "react";

function Testimonios() {
  const [testimonios, setTestimonios] = useState([
    {
      nombre: "Anonimo",
      mensaje:
        "Me da vergüenza confesarlo, pero es la verdad. Quisiera decir que esto es extraordinario; que tuve un mal día, que las cosas se salieron de control y terminé aquí, pensando en morirme, pero que ya se me pasará. Esa no es la verdad. Llevo varios días, de varias semanas, de ya un par de meses, despertándome con ladrillos en el pecho. Su peso no me deja respirar. No encuentro por ningún lado energías para levantarme de la cama. Siento que todo lo que está más allá de la puerta de mi apartamento es un abismo lleno de hostilidad, caos, peligro. En mi cuarto, en mi casa, me siento rodeado por un desastre que me carcome, me tortura, me asfixia. No tengo escapatoria a la zozobra. Quisiera decir que tengo excusas; que esto que siento se debe a una serie de malas fortunas, a un duelo, a un dolor tangible, real. Quisiera poder señalarles una pierna rota y decirles: ¡por esto es que no me siento bien hoy! \nPERO No. La verdad es que todo en mi vida, en este preciso momento en el que estoy pensando en morirme, anda bien. Tengo un buen trabajo. Tengo personas que me quieren. Y las quiero. Tengo un hogar. Tengo una rutina de ejercicios que hago religiosamente. Tengo buena comida. Tengo dos gatas preciosas. Tengo antidepresivos que me tomo con juicio. Y aun así, aquí estoy; aplastado por Io intangible, Io indecible, lo confuso. Sufriendo sin razones, aparentemente Quisiera que mi mente dejara de intentar matarme, pero ahí sigue, diciéndome una, Y otra y otra, Y otra,Y otra vez todo Io que está mal conmigo.",
    },
    {
      nombre:
        "Fragmento de 'Las muertes chiquitas' de Margarita Posada Jaramillo",
      mensaje:
        "cuando estás triste algo te hace falta, cuando estás deprimido no te hace falta nada. Solo te hace falta el ánimo y todos gritan '¡Ánimo!' Esa palabra detestable que algunos repiten con toda la buena voluntad del mundo cuando uno está deprimido. A veces comparo la depresión con la diabetes de mi sobrino y es como si todos le gritaran '¡Azúcar!' en plan Celia Cruz cada vez que su glucómetro marca bajas en su sangre",
    },
    {
      nombre: "Anonimo",
      mensaje:
        "El ambiente tranquilo y las respuestas empáticas me dieron mucha paz.",
    },
  ]);

  const [nuevoNombre, setNuevoNombre] = useState("");
  const [nuevoMensaje, setNuevoMensaje] = useState("");

  const handleAgregarTestimonio = () => {
    if (nuevoNombre.trim() && nuevoMensaje.trim()) {
      setTestimonios([
        ...testimonios,
        { nombre: nuevoNombre, mensaje: nuevoMensaje },
      ]);
      setNuevoNombre("");
      setNuevoMensaje("");
    }
  };

  return (
    <div className="w-full px-6 py-10 bg-white bg-opacity-80 rounded-lg shadow-lg max-w-4xl mx-auto my-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Testimonios
      </h2>

      <div className="space-y-6">
        {testimonios.map((testimonio, index) => (
          <div
            key={index}
            className="border border-gray-300 p-4 rounded-lg bg-gray-100"
          >
            <p className="text-lg italic text-gray-700 whitespace-pre-line">
              "{testimonio.mensaje}"
            </p>
            <p className="text-right font-semibold text-gray-600 mt-2">
              - {testimonio.nombre}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Comparte tu experiencia
        </h3>
        <input
          type="text"
          placeholder="Tu nombre"
          value={nuevoNombre}
          onChange={(e) => setNuevoNombre(e.target.value)}
          className="border border-gray-400 p-2 rounded w-full mb-4"
        />
        <textarea
          placeholder="Tu testimonio"
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
          className="border border-gray-400 p-2 rounded w-full mb-4 h-24"
        />
        <button
          onClick={handleAgregarTestimonio}
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition"
        >
          Enviar Testimonio
        </button>
      </div>
    </div>
  );
}

export default Testimonios;
