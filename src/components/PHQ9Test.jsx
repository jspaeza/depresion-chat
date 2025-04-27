import React, { useState } from "react";

const questions = [
  "Ha tenido poco interés o placer en hacer cosas",
  "Se ha sentido decaído(a), deprimido(a), o sin esperanzas",
  "Dificultad para dormir o permanecer dormido(a), o ha dormido demasiado",
  "Se ha sentido cansado(a) o con poca energía",
  "Ha tenido poco apetito o ha comido en exceso",
  "Se ha sentido mal con usted mismo(a) - o que es un fracaso o que ha quedado mal con usted mismo(a) o con su familia",
  "Ha tenido dificultad para concentrarse en cosas tales como leer o ver televisión",
  "¿Se ha estado moviendo o hablando tan lento que otras personas podrían notarlo?, o por el contrario – ha estado tan inquieto(a) o agitado(a), que se ha estado moviendo mucho más de lo normal",
  "Ha pensado que estaría mejor muerto(a) o se le ha ocurrido lastimarse de alguna manera",
];

const options = [
  { label: "Nunca", value: 0 },
  { label: "Varios días", value: 1 },
  { label: "Más de la mitad de los días", value: 2 },
  { label: "Casi todos los días", value: 3 },
];

function PHQ9Test() {
  const [answers, setAnswers] = useState(Array(9).fill(null));
  const [score, setScore] = useState(null);

  const handleAnswer = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    if (answers.includes(null)) {
      alert("Por favor responde todas las preguntas.");
      return;
    }
    const total = answers.reduce((acc, curr) => acc + curr, 0);
    setScore(total);
  };

  const getResult = (score) => {
    if (score <= 9) return "Sintomas depresivos leves";
    if (score <= 14) return "Depresión leve";
    if (score <= 19) return "Depresión moderada";
    if (score <= 27) return "Depresión Grave. ¡Busca un especialista!";
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center mb-6">
        Cuestionario PHQ-9
      </h2>
      <h2 className="mb-3">
        Durante las últimas 2 semanas, ¿con qué frecuencia le han molestado cada
        uno de los siguientes problemas?
      </h2>
      <div className="space-y-6">
        {questions.map((question, index) => (
          <div key={index}>
            <p className="font-semibold mb-2">
              {index + 1}. {question}
            </p>
            <div className="flex flex-wrap gap-4">
              {options.map((option, optIndex) => (
                <label key={optIndex} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option.value}
                    onChange={() => handleAnswer(index, option.value)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          onClick={calculateScore}
        >
          Ver Resultado
        </button>
      </div>

      {score !== null && (
        <div className="mt-8 text-center">
          <h3 className="text-xl font-bold mb-2">Puntaje: {score}</h3>
          <p className="text-lg">{getResult(score)}</p>
        </div>
      )}
    </div>
  );
}

export default PHQ9Test;
