//Persona normal 
document.addEventListener('DOMContentLoaded', function () { //Cambiar a modo oscuro
  let toggle = document.getElementById('toggle');
  let labelToggle = document.getElementById('labelToggle');

  toggle.addEventListener('change', (event) => {
    let checked = event.target.checked;
    document.body.classList.toggle('dark');

    if (checked == true) {
      labelToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      labelToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("opcionEstCivilPerNatu").addEventListener("change", function () {
    var estadoCivil = this.value; // Obtener el valor seleccionado del select
    var conyugeDiv = document.getElementById("conyuge");

    if (estadoCivil === "1") { // Si la opción seleccionada es "Casado(a)"
      conyugeDiv.style.display = "block"; // Mostrar el div "conyuge"
    } else {
      conyugeDiv.style.display = "none"; // Ocultar el div "conyuge" para cualquier otra opción
    }
  });
});

document.addEventListener("DOMContentLoaded", function () { //mostrar contenido si se responde "si" y ocultarlo si se elige "no"
  document.getElementById("clientePEPsi").addEventListener("click", function () {
    document.getElementById("respuestaPEPPerNatuSi").style.display = this.checked ? "block" : "none";
  });

  document.getElementById("clientePEPno").addEventListener("click", function () {
    document.getElementById("respuestaPEPPerNatuSi").style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () { //mostrar contenido si se responde "si" y ocultarlo si se elige "no"
  document.getElementById("usPersonSi").addEventListener("click", function () {
    document.getElementById("respuestaUsPersonSi").style.display = this.checked ? "block" : "none";
  });

  document.getElementById("usPersonNo").addEventListener("click", function () {
    document.getElementById("respuestaUsPersonSi").style.display = "none";
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const pregunta1Si = document.getElementById('pregunta1Si');
  const pregunta2Si = document.getElementById('pregunta2Si');
  const pregunta3Si = document.getElementById('pregunta3Si');

  pregunta1Si.addEventListener('change', verificarRespuesta);
  pregunta2Si.addEventListener('change', verificarRespuesta);
  pregunta3Si.addEventListener('change', verificarRespuesta);

  function verificarRespuesta() {
    if (pregunta1Si.checked || pregunta2Si.checked || pregunta3Si.checked) {
      declaroInversionSer.checked = true;
      declaroInversionSer.disabled = false;
    } else {
      declaroInversionSer.checked = false;
      declaroInversionSer.disabled = true;
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const pregunta1No = document.getElementById('pregunta1No');
  const pregunta2No = document.getElementById('pregunta2No');
  const pregunta3No = document.getElementById('pregunta3No');

  pregunta1No.addEventListener('change', verificarRespuesta);
  pregunta2No.addEventListener('change', verificarRespuesta);
  pregunta3No.addEventListener('change', verificarRespuesta);

  function verificarRespuesta() {
    if (pregunta1No.checked && pregunta2No.checked && pregunta3No.checked) {
      declaroInversionNoSer.checked = true;
      declaroInversionNoSer.disabled = false;
    } else {
      declaroInversionNoSer.checked = false;
      declaroInversionNoSer.disabled = true;
    }
  }
});

document.addEventListener("DOMContentLoaded", function () { //mostrar contenido si se responde "si" y ocultarlo si se elige "no"
  document.getElementById("residenciaFiscalSi").addEventListener("click", function () {
    document.getElementById("respuestaFiscalPerNatuSi").style.display = this.checked ? "block" : "none";
  });

  document.getElementById("residenciaFiscalNo").addEventListener("click", function () {
    document.getElementById("respuestaFiscalPerNatuSi").style.display = "none";
  });
});
