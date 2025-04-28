import { useState } from "react";
import axios from "axios";
import Testimonios from "./components/Testimonios";
import Videos from "./components/Videos";
import PHQ9Test from "./components/PHQ9Test";
import LightMapBackground from "./components/LightMapBackground";
import TopImages from "./components/TopImages";
import CitaMercader from "./components/CitaMercader";

function App() {
  const [messages, setMessages] = useState([
    {
      text: "Hola, estoy aquí para escucharte. ¿Cómo te sientes hoy?",
      from: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

  const handleSend = async () => {
    if (input.trim() === "") return;

    // Agregar el mensaje del usuario
    setMessages((prev) => [...prev, { text: input, from: "user" }]);
    setInput("");

    // Mostrar el indicador de carga
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
          max_tokens: 150,
        },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      const aiResponse = response.data.choices[0].message.content;
      setMessages((prev) => [...prev, { text: aiResponse, from: "bot" }]);
    } catch (error) {
      console.error("Error al conectar con OpenAI:", error);
      setMessages((prev) => [
        ...prev,
        {
          text: "Lo siento, no pude obtener una respuesta en este momento. Intenta de nuevo más tarde.",
          from: "bot",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
      {/* // <div className="min-h-screen bg-[url('https://plus.unsplash.com/premium_photo-1666286163385-abe05f0326c4?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex flex-col items-center p-4"> */}
      <LightMapBackground />
      <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-2xl shadow-2xl max-w-4xl w-full flex flex-col items-center space-y-8">
        <h1 className="text-4xl text-center font-bold text-blue-900">
          No estás solo o sola. Aquí encuentras un espacio seguro para ti
        </h1>
        <CitaMercader />
        <TopImages />

        {/* Chat Bot */}
        <div className="w-full bg-white bg-opacity-90 rounded-xl p-4 flex space-x-4 shadow-md mt-8">
          {/* Sección del chatbot */}
          <div className="flex-1 bg-white rounded-xl p-4 flex flex-col space-y-2">
            <div className="flex-1 overflow-y-auto h-80 space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.from === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2 rounded-2xl max-w-xs text-white ${
                      msg.from === "user" ? "bg-blue-500" : "bg-blue-400"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-2 pt-2">
              <input
                type="text"
                placeholder="Escribe algo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                className="flex-1 border border-blue-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handleSend}
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 font-semibold"
              >
                {loading ? "Cargando..." : "Enviar"}
              </button>
            </div>
          </div>

          {/* Sección de la imagen al lado derecho */}
          <div className="w-1/4 h-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjbi6ad0dX13_M8_MTNdQfeBb9aFJl3GUiwxoNyrshfeSHa7GpxL6WDcz2dhApkUL5b50&usqp=CAU"
              alt="Imagen del lado derecho"
              className="w-full h-full object-cover rounded-xl transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>

        <Testimonios />
        <PHQ9Test />

        <Videos />

        {/* Recursos de Ayuda */}
        <div className="w-full bg-white bg-opacity-90 rounded-xl p-6 shadow-md space-y-4">
          <div className="w-full bg-white bg-opacity-90 rounded-xl p-6 shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Sección de textos y links */}
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center">
                  Recursos confiables sobre Depresión
                </h2>

                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <a
                      href="https://www.who.int/es/news-room/fact-sheets/detail/depression"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Organización Mundial de la Salud - Depresión
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.mayoclinic.org/es/diseases-conditions/depression/symptoms-causes/syc-20356007"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Mayo Clinic - Información sobre Depresión
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.cdc.gov/tobacco/campaign/tips/spanish/enfermedades/tabaquismo-afecciones-mentales-depresion-ansiedad.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Afecciones mentales: Depresión y Ansiedad
                    </a>
                  </li>
                </ul>
              </div>

              {/* Sección de la imagen */}
              <div className="flex-1 flex justify-center">
                <img
                  src="https://efesalud.com/wp-content/uploads/2021/10/depresionovictoria-1170x752.jpg?crop=1"
                  alt="Apoyo emocional"
                  className="rounded-lg shadow-md w-80 h-auto object-cover transform hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          </div>

          <div className="w-full bg-white bg-opacity-90 rounded-xl p-6 shadow-md">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Imagen a la izquierda */}
              <div className="flex-1 flex justify-center">
                <img
                  src="https://unperiodistaenelbolsillo.com/wp-content/uploads/2020/04/Depresi%C3%B3n-o-victoria_61.jpg"
                  alt="Apoyo emocional"
                  className="rounded-lg shadow-md w-80 h-auto object-cover transform hover:scale-105 transition duration-300"
                />
              </div>

              {/* Texto a la derecha */}
              <div className="flex-1 flex flex-col items-center text-center space-y-4">
                <h2 className="text-2xl font-bold text-blue-700 mt-6 mb-2">
                  Quiero hablar ¿Con quién puedo hablar?
                </h2>
                <ul className="space-y-4">
                  <li>
                    <div className="font-semibold">
                      Línea Amiga Salud Mental Medellín
                    </div>
                    <div className="text-blue-600">📞 (604) 444 44 48</div>
                  </li>
                  <li>
                    <div className="font-semibold">
                      Línea 123 Social Medellín
                    </div>
                    <div className="text-blue-600">📞 123 opción 2</div>
                  </li>
                  <li>
                    <div className="font-semibold">
                      Línea Nacional de la Esperanza
                    </div>
                    <div className="text-blue-600">📞 (604) 604 27 84</div>
                  </li>
                  <li>
                    <div className="font-semibold">Línea de vida Sabaneta</div>
                    <div className="text-blue-600">📞 3052218057</div>
                  </li>
                  <li>
                    <div className="font-semibold">Fundación Sergio Urrego</div>
                    <div className="text-blue-600">📞 3117668666</div>
                    <div className="text-sm text-gray-600 mt-1">
                      (Especializada en temas de discriminación, población
                      LGBTIQ+ y acoso en el ámbito educativo)
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 text-gray-600 text-center">
            <strong>
              No dudes en buscar ayuda profesional; la depresión es un problema
              de salud tratable
            </strong>
            🌟
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
