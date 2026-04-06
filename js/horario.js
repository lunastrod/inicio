document.addEventListener("DOMContentLoaded", () => {
  const diaActual = new Date().getDay(); 
  
  if (diaActual >= 1 && diaActual <= 5) {
      const indiceColumna = diaActual + 1;
      
      const cabeceraDia = document.querySelector(`thead tr th:nth-child(${indiceColumna})`);
      if (cabeceraDia) cabeceraDia.classList.add("dia-actual");
  }
});