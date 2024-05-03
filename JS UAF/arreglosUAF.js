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
  document.getElementById("opcionDeclaracionUAF").addEventListener("change", function () {
    var declaracion = this.value; // Obtener el valor seleccionado del select
    var sinCambios = document.getElementById("sinCambios");

    if (declaracion === "2") { // Compara con cada valor por separado
      sinCambios.style.display = "none"; // Mostrar el div "conyuge"
    } else {
      sinCambios.style.display = "block"; // Ocultar el div "conyuge" para cualquier otra opción
    }
  });
});
