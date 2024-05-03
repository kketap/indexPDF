document.addEventListener('DOMContentLoaded', function () {
  const botonAlternar = document.getElementById('alternarTexto1');
  const textoAdicional = document.querySelector('.texto-adicional1');
  const puntosSuspensivos = document.querySelector('.puntos-suspensivos1'); // Aquí corregido

  botonAlternar.addEventListener('click', function () {
    if (textoAdicional.style.display === 'inline') {
      textoAdicional.style.display = 'none'; // Ocultar el texto adicional
      botonAlternar.textContent = 'Mostrar Definición'; // Cambiar texto del botón
      puntosSuspensivos.style.display = 'inline';
    } else {
      textoAdicional.style.display = 'inline'; // Mostrar el texto adicional
      botonAlternar.textContent = 'Mostrar Menos'; // Cambiar texto del botón
      puntosSuspensivos.style.display = 'none'; // Ocultar los puntos suspensivos
    }
  });
});