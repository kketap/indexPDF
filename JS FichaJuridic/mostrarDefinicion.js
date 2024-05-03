document.addEventListener('DOMContentLoaded', function () {
  const botonAlternar = document.getElementById('alternarTexto');
  const textoAdicional = document.querySelector('.texto-adicional');
  const puntosSuspensivos = document.querySelector('.puntos-suspensivos'); // Aquí corregido

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

document.addEventListener('DOMContentLoaded', function () { //funcion Mostrar más texto2
  const botonAlternar = document.getElementById('alternarTexto2');
  const texto = document.getElementById('texto2');
  const textoAdicional = texto.querySelector('.texto-adicional2');

  botonAlternar.addEventListener('click', function () {
    if (texto.classList.contains('texto-completo2')) {
      texto.classList.remove('texto-completo2');
      textoAdicional.style.display = 'inline'; // Mostrar texto adicional
      botonAlternar.textContent = 'Mostrar Menos'; // Cambiar texto del botón
    } else {
      texto.classList.add('texto-completo2');
      textoAdicional.style.display = 'none'; // Ocultar texto adicional
      botonAlternar.textContent = 'Mostrar Más'; // Cambiar texto del botón
    }
  });
});

document.addEventListener('DOMContentLoaded', function () { //funcion Mostrar más texto3
  const botonAlternar = document.getElementById('alternarTexto3');
  const texto = document.getElementById('texto3');
  const textoAdicional = texto.querySelector('.texto-adicional3');

  botonAlternar.addEventListener('click', function () {
    if (texto.classList.contains('texto-completo3')) {
      texto.classList.remove('texto-completo3');
      textoAdicional.style.display = 'inline'; // Mostrar texto adicional
      botonAlternar.textContent = 'Mostrar Menos'; // Cambiar texto del botón
    } else {
      texto.classList.add('texto-completo3');
      textoAdicional.style.display = 'none'; // Ocultar texto adicional
      botonAlternar.textContent = 'Mostrar Funciones y Personas que son consideradas como PEP' // Cambiar texto del botón
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const botonAlternar = document.getElementById('alternarTexto4');
  const textoAdicional = document.querySelector('.texto-adicional4');
  const puntosSuspensivos = document.querySelector('.puntos-suspensivos4'); // Aquí corregido

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

document.addEventListener('DOMContentLoaded', function () {
  const botonAlternar = document.getElementById('alternarTexto5');
  const textoAdicional = document.querySelector('.texto-adicional5');
  const puntosSuspensivos = document.querySelector('.puntos-suspensivos5'); // Aquí corregido

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

document.addEventListener('DOMContentLoaded', function () {
  const botonAlternar = document.getElementById('alternarTexto6');
  const textoAdicional = document.querySelector('.texto-adicional6');
  const puntosSuspensivos = document.querySelector('.puntos-suspensivos6'); // Aquí corregido

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

document.addEventListener('DOMContentLoaded', function () {
  const botonAlternar = document.getElementById('alternarTexto7');
  const textoAdicional = document.querySelector('.texto-adicional7');
  const puntosSuspensivos = document.querySelector('.puntos-suspensivos7'); // Aquí corregido

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

document.addEventListener('DOMContentLoaded', function () {
  const botonAlternar = document.getElementById('alternarTexto8');
  const textoAdicional = document.querySelector('.texto-adicional8');
  const puntosSuspensivos = document.querySelector('.puntos-suspensivos8'); // Aquí corregido

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

document.addEventListener('DOMContentLoaded', function () {
  const botonAlternar = document.getElementById('alternarTexto9');
  const textoAdicional = document.querySelector('.texto-adicional9');
  const puntosSuspensivos = document.querySelector('.puntos-suspensivos9'); // Aquí corregido

  botonAlternar.addEventListener('click', function () {
    if (textoAdicional.style.display === 'inline') {
      textoAdicional.style.display = 'none'; // Ocultar el texto adicional
      botonAlternar.textContent = 'Mostrar Definición de Beneficiario Final'; // Cambiar texto del botón
      puntosSuspensivos.style.display = 'inline';
    } else {
      textoAdicional.style.display = 'inline'; // Mostrar el texto adicional
      botonAlternar.textContent = 'Mostrar Menos'; // Cambiar texto del botón
      puntosSuspensivos.style.display = 'none'; // Ocultar los puntos suspensivos
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const botonAlternar = document.getElementById('alternarTexto10');
  const textoAdicional = document.querySelector('.texto-adicional10');
  const puntosSuspensivos = document.querySelector('.puntos-suspensivos10'); // Aquí corregido

  botonAlternar.addEventListener('click', function () {
    if (textoAdicional.style.display === 'inline') {
      textoAdicional.style.display = 'none'; // Ocultar el texto adicional
      botonAlternar.textContent = 'Mostrar Mostrar Significado de cada categoría de Riesgo de Cliente'; // Cambiar texto del botón
      puntosSuspensivos.style.display = 'inline';
    } else {
      textoAdicional.style.display = 'inline'; // Mostrar el texto adicional
      botonAlternar.textContent = 'Mostrar Menos'; // Cambiar texto del botón
      puntosSuspensivos.style.display = 'none'; // Ocultar los puntos suspensivos
    }
  });
});