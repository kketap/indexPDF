// Función para guardar datos del formulario 2 en el almacenamiento local
function guardarDatosFormulario2() {
    var datosFormulario2 = {
        nombreCompletoPerNatu: document.getElementById('nombreCompletoPerNatu').value,
    };
    localStorage.setItem('datosFormulario2', JSON.stringify(datosFormulario2)); // Usar una clave única para el formulario 2
}

// Función para cargar datos del formulario 2 desde el almacenamiento local
function cargarDatosFormulario2() {
    var datosGuardados = localStorage.getItem('datosFormulario2');
    if (datosGuardados) {
        var datosFormulario2 = JSON.parse(datosGuardados);
        document.getElementById('nombreCompletoPerNatu').value = datosFormulario2.nombreCompletoPerNatu;
    }
}

// Llamar a la función cargarDatosFormulario2 al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    cargarDatosFormulario2();
});

// Llamar a la función guardarDatosFormulario2 al enviar el formulario 2
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('formPerNatu').addEventListener('submit', function (event) {
        event.preventDefault();
        guardarDatosFormulario2();
    });
});