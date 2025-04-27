import React from "react";

function LightMapBackground() {
  const colors = ["#ffffff", "#c084fc", "#60a5fa", "#f472b6", "#a5f3fc"]; // blanco, lila, azul, rosa, celeste

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      <div className="absolute w-full h-full">
        {[...Array(120)].map((_, i) => {
          const size = Math.random() * 6 + 4; // Tamaño entre 4px y 10px (más grandes)
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const durationMove = Math.random() * 10 + 5;
          const durationFade = Math.random() * 5 + 5;
          const delay = Math.random() * 5;
          const color = colors[Math.floor(Math.random() * colors.length)];

          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                backgroundColor: color,
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
                animation: `
                  moveLight${i} ${durationMove}s ease-in-out ${delay}s infinite alternate,
                  fadeLight ${durationFade}s ease-in-out ${delay}s infinite alternate
                `,
              }}
            />
          );
        })}
      </div>

      {/* Definimos las animaciones */}
      <style>
        {`
          ${[...Array(120)]
            .map(
              (_, i) => `
            @keyframes moveLight${i} {
              0% { transform: translate(0, 0); }
              100% { transform: translate(${Math.random() * 40 - 20}px, ${
                Math.random() * 40 - 20
              }px); }
            }
          `
            )
            .join("\n")}

          @keyframes fadeLight {
            0%, 100% { opacity: 0.1; }
            50% { opacity: 0.8; }
          }
        `}
      </style>
    </div>
  );
}

export default LightMapBackground;
