// Seleccionamos el canvas y el botón
const canvas = document.getElementById("radar");
const ctx = canvas.getContext("2d");
const locateButton = document.getElementById("locate-button");



// Dibujar el radar
function drawRadar(x, y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar el círculo central (radar)
    ctx.beginPath();
    ctx.arc(150, 150, 140, 0, 2 * Math.PI);
    ctx.strokeStyle = "#61dafb";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Dibujar el punto de la ubicación del dispositivo
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
}

// Función para obtener la ubicación
function locateDevice() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;

            // Convertimos coordenadas (simplificado para el radar)
            const x = 150 + (longitude % 0.001) * 100000;
            const y = 150 - (latitude % 0.001) * 100000;

            drawRadar(x, y);
        }, (error) => {
            console.error("Error al obtener la ubicación:", error);
        });
    } else {
        alert("Geolocalización no soportada en este navegador.");
    }
}


// Evento del botón
locateButton.addEventListener("click", locateDevice);

navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    console.log("Latitud:", latitude, "Longitud:", longitude); // Muestra las coordenadas en la consola
    // Resto del código...
});


  const distance = calculateDistance(


    
    lat1, lon1, // Tu posición
    lat2, lon2  // Posición de la tablet
  );


  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Radio de la Tierra en metros
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;
  
    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return R * c; // Devuelve la distancia en metros
  }


  
  console.log("Distancia en metros:", distance);
  
  function getRelativePosition(lat1, lon1, lat2, lon2, maxRadiusPixels) {
    const distance = calculateDistance(lat1, lon1, lat2, lon2);
    if (distance > 10) return null; // Si está fuera del rango, no mostrar
  
    const dx = lon2 - lon1;
    const dy = lat2 - lat1;
  
    const angle = Math.atan2(dy, dx); // Ángulo entre ambos puntos
    const normalizedDistance = (distance / 10) * maxRadiusPixels; // Escalar distancia al radar
  
    return {
      x: Math.cos(angle) * normalizedDistance,
      y: Math.sin(angle) * normalizedDistance,
    };
  }
  
  // Ejemplo de uso:
  const relativePosition = getRelativePosition(lat1, lon1, lat2, lon2, 100); // 100 es el radio en píxeles
  if (relativePosition) {
    tabletPoint.style.left = `${50 + relativePosition.x}%`;
    tabletPoint.style.top = `${50 + relativePosition.y}%`;
  }
  
  setInterval(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude: lat1, longitude: lon1 } = position.coords;
      const lat2 = 10.123; // Coordenadas de la tablet
      const lon2 = -10.456;
  
      const relativePosition = getRelativePosition(lat1, lon1, lat2, lon2, 100);
      if (relativePosition) {
        tabletPoint.style.left = `${50 + relativePosition.x}%`;
        tabletPoint.style.top = `${50 + relativePosition.y}%`;
      } else {
        tabletPoint.style.display = "none"; // Oculta si está fuera del rango
      }
    });
  }, 1000); // Actualiza cada segundo
  