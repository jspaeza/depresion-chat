import React, { useState, useEffect } from "react";

function Testimonios() {
  const [testimonio, setTestimonio] = useState("");
  const [testimonios, setTestimonios] = useState([]);

  // Cargar testimonios guardados al cargar la app
  useEffect(() => {
    const savedTestimonios =
      JSON.parse(localStorage.getItem("testimonios")) || [];
    setTestimonios(savedTestimonios);
  }, []);

  // Guardar el testimonio cuando el usuario lo envía
  const handleSubmit = (e) => {
    e.preventDefault();

    if (testimonio.trim() !== "") {
      const newTestimonios = [...testimonios, testimonio];
      setTestimonios(newTestimonios);
      setTestimonio("");

      // Guardar en localStorage
      localStorage.setItem("testimonios", JSON.stringify(newTestimonios));
    }
  };

  return (
    <div className="w-full mx-auto my-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Testimonios</h2>

      {/* Formulario para agregar testimonio */}
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={testimonio}
          onChange={(e) => setTestimonio(e.target.value)}
          placeholder="Comparte tu testimonio..."
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          rows="4"
        />
        <button
          type="submit"
          className="max-w-md bg-blue-500 text-white p-2 rounded-md"
        >
          Enviar Testimonio
        </button>
      </form>

      {/* Mostrar los testimonios guardados */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Testimonios Recibidos:</h3>
        <ul className="space-y-4">
          {testimonios.length > 0 ? (
            testimonios.map((testimonio, index) => (
              <li
                key={index}
                className="bg-white p-4 border rounded-md shadow-sm"
              >
                <p className="text-gray-800">{testimonio}</p>
              </li>
            ))
          ) : (
            <p className="text-gray-500">No hay testimonios aún...</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Testimonios;
