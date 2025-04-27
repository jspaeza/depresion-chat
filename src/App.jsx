import { useState } from "react";
import axios from "axios";

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
  console.log(apiKey);
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
    <div className="min-h-screen bg-[url('https://plus.unsplash.com/premium_photo-1666286163385-abe05f0326c4?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex flex-col items-center p-4">
      <div className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-2xl shadow-2xl max-w-4xl w-full flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-bold text-blue-900">Depresión</h1>

        {/* Chat Bot */}
        <div className="w-full max-w-md bg-white bg-opacity-90 rounded-xl p-4 flex flex-col space-y-2 shadow-md">
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

        {/* Video de YouTube */}
        <div className="w-full max-w-lg mt-8">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?loop=1&playlist=UIcVLxoPzLI"
            frameBorder="0"
            allow="encrypted-media"
            title="Video de YouTube"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Recursos de Ayuda */}
        <div className="w-full bg-white bg-opacity-90 rounded-xl p-6 shadow-md space-y-4">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">
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

          <h2 className="text-2xl font-bold text-blue-700 mt-6 mb-2">
            Líneas de ayuda en Medellín 🇨🇴
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">
                Línea Amiga Salud Mental Medellín:
              </span>{" "}
              📞 (604) 444 44 48
            </li>
            <li>
              <span className="font-semibold">Línea 123 Social Medellín:</span>{" "}
              📞 123 opción 2
            </li>
            <li>
              <span className="font-semibold">
                Línea Nacional de la Esperanza:
              </span>{" "}
              📞 (604) 604 27 84
            </li>
          </ul>

          <div className="mt-4 text-gray-600 text-center">
            <strong>
              "No dudes en buscar ayuda profesional; la depresión es un problema
              de salud tratable"
            </strong>
            🌟
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
