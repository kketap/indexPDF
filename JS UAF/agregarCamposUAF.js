//beneficiarios
document.addEventListener('DOMContentLoaded', function () {
  const agregarBenef = document.getElementById('agregarBenefUAF');
  const camposBenefFinales = document.getElementById('camposBenefFinalesUAF');
  const limpiarBeneficiariosBtn = document.getElementById('limpiarBeneficiariosUAFBtn');

  let clienteIndex = 2;
  let maxIndex = 6;

  let beneficiariosAgregados = [];

  cargarDatosBeneficiarios();

  agregarBenef.addEventListener('click', agregarBeneficiario);
  limpiarBeneficiariosBtn.addEventListener('click', limpiarBeneficiarios);

  function agregarBeneficiario() {
    if (clienteIndex <= maxIndex) {
      const nuevoBenefHTML = generarHTMLBeneficiario(clienteIndex);
      const nuevoBenefDiv = document.createElement('div');
      nuevoBenefDiv.innerHTML = nuevoBenefHTML;
      camposBenefFinales.appendChild(nuevoBenefDiv);

      beneficiariosAgregados.push(obtenerDatosBeneficiarios(clienteIndex));

      guardarDatosBeneficiarios();

      clienteIndex++;
    } else {
      alert('El máximo de beneficiarios finales es de 6')
    }
  }

  function generarHTMLBeneficiario(index) {
    return `
    <div class="row mb-3">
    <div class="col-md-6">
      <label for="idBenefUAF${index}" class="form-label">CNI/ID (${index})</label>
      <input type="text" name="idBenefUAF${index}" placeholder="CNI/ID (${index})" class="form-control" 
      id="idBenefUAF${index}">
    </div>
    <div class="col-md-6">
      <label for="nomCompletoAccio${index}" class="form-label">Nombre Completo (${index})</label>
      <input type="text" name="nomCompletoAccio${index}" placeholder="Nombre Completo (${index})" class="form-control"
        id="nomBenefUAF${index}">
    </div>
    <br>
    <br>
    <br>
    <div class="col-md-6">
      <label for="domicilioBenefUAF${index}" class="form-label">Domicilio (${index})</label>
      <input type="text" name="domicilioBenefUAF${index}" placeholder="Domicilio (${index})" class="form-control"
        id="domicilioBenefUAF${index}">
    </div>
    <div class="col-md-6">
      <label for="ciudadBenefUAF${index}" class="form-label">Ciudad (${index})</label>
      <input type="text" name="ciudadBenefUAF${index}" placeholder="Ciudad (${index})" class="form-control" 
      id="ciudadBenefUAF${index}">
    </div>
    <br>
    <br>
    <br>
    <div class="col-md-6">
      <label for="paisBenefUAF${index}" class="form-label">País (${index})</label>
      <input type="text" name="paisBenefUAF${index}" placeholder="País (${index})" class="form-control" 
      id="paisBenefUAF${index}">
    </div>
    <div class="col-md-6">
      <label for="porcentajeBenef${index}" class="form-label">Porcentaje de participación (${index})</label>
      <input type="number" name="porcentajeBenef${index}" placeholder="% (${index})" class="form-control" 
      id="porcentajeBenefUAF${index}" value="10" min="10" max="100">
    </div>
    </div>
    <div class="mb-4"></div>
      `;
  }

  function obtenerDatosBeneficiarios(index) {
    return {
      nomBenefUAF: document.getElementById(`nomBenefUAF${index}`).value,
    }
  }

  function guardarDatosBeneficiarios() {
    localStorage.setItem('beneficiariosAgregados', JSON.stringify(beneficiariosAgregados));
  }

  function limpiarBeneficiarios() {
    if (clienteIndex > 2) {
      var ultimoCampo = camposBenefFinales.lastElementChild;

      camposBenefFinales.removeChild(ultimoCampo);

      beneficiariosAgregados.pop();

      clienteIndex--;

      guardarDatosBeneficiarios();
    } else {
      alert('No hay Beneficiarios para limpiar')
    }
  }

  function cargarDatosBeneficiarios() {
    const datosGuardados = localStorage.getItem('beneficiariosAgregados');
    if (datosGuardados) {
      beneficiariosAgregados = JSON.parse(datosGuardados);
      beneficiariosAgregados.forEach((beneficiario, index) => {
        const nuevoBeneficiarioHTML = generarHTMLBeneficiario(index + 2);
        const nuevoBeneficiarioDiv = document.createElement('div');
        nuevoBeneficiarioDiv.innerHTML = nuevoBeneficiarioHTML;
        camposBenefFinales.appendChild(nuevoBeneficiarioDiv);
      });
      clienteIndex = beneficiariosAgregados.length + 2;
    }
  }
});



document.addEventListener('DOMContentLoaded', function () {
  const agregarBenef = document.getElementById('agregarBenefMenosUAF');
  const camposBenefFinales = document.getElementById('camposBenefMenosUAF');
  const limpiarBeneficiariosBtn = document.getElementById('limpiarBeneficiariosMenosUAFBtn');

  let clienteIndex = 2;
  let maxIndex = 6;

  let beneficiariosAgregados = [];

  cargarDatosBeneficiarios();

  agregarBenef.addEventListener('click', agregarBeneficiario);
  limpiarBeneficiariosBtn.addEventListener('click', limpiarBeneficiarios);

  function agregarBeneficiario() {
    if (clienteIndex <= maxIndex) {
      const nuevoBenefHTML = generarHTMLBeneficiario(clienteIndex);
      const nuevoBenefDiv = document.createElement('div');
      nuevoBenefDiv.innerHTML = nuevoBenefHTML;
      camposBenefFinales.appendChild(nuevoBenefDiv);

      beneficiariosAgregados.push(obtenerDatosBeneficiarios(clienteIndex));

      guardarDatosBeneficiarios();

      clienteIndex++;
    } else {
      alert('El máximo de beneficiarios finales es de 6')
    }
  }

  function generarHTMLBeneficiario(index) {
    return `
    <div class="row mb-3">
    <div class="col-md-6">
              <label for="idBenefMenosUAF${index}" class="form-label">CNI/ID (${index})</label>
              <input type="text" name="idBenefMenosUAF${index}" placeholder="CNI/ID (${index})" class="form-control" 
              id="idBenefMenosUAF${index}">
            </div>
            <div class="col-md-6">
              <label for="nomBenefMenosUAF${index}" class="form-label">Nombre Completo (${index})</label>
              <input type="text" name="nomBenefMenosUAF${index}" placeholder="Nombre Completo (${index})" class="form-control"
                id="nomBenefMenosUAF">
            </div>
            <br>
            <br>
            <br>
            <div class="col-md-6">
              <label for="domicilioBenefMenosUAF${index}" class="form-label">Domicilio (${index})</label>
              <input type="text" name="domicilioBenefMenosUAF${index}" placeholder="Domicilio (${index})" class="form-control"
                id="domicilioBenefMenosUAF${index}">
            </div>
            <div class="col-md-6">
              <label for="ciudadBenefMenosUAF${index}" class="form-label">Ciudad (${index})</label>
              <input type="text" name="ciudadBenefMenosUAF${index}" placeholder="Ciudad (${index})" class="form-control" 
              id="ciudadBenefMenosUAF${index}">
            </div>
            <br>
            <br>
            <br>
            <div class="col-md-6">
              <label for="paisBenefMenosUAF${index}" class="form-label">País (${index})</label>
              <input type="text" name="paisBenefMenosUAF${index}" placeholder="País (${index})" class="form-control" 
              id="paisBenefMenosUAF${index}">
            </div>
            <br>
            <div class="col-md-6">
              <label for="porcentajeMenosBenefUAF${index}" class="form-label">Porcentaje de participación (${index})</label>
              <input type="number" name="porcentajeMenosBenefUAF${index}" placeholder="%" class="form-control" 
              id="porcentajeBenefMenosUAF${index}" value="1" min="1" max="10">
            </div>
    </div>
    <div class="mb-4"></div>
      `;
  }

  function obtenerDatosBeneficiarios(index) {
    return {
      nomBenefMenosUAF: document.getElementById(`nomBenefMenosUAF${index}`).value,
    }
  }

  function guardarDatosBeneficiarios() {
    localStorage.setItem('beneficiariosAgregados', JSON.stringify(beneficiariosAgregados));
  }

  function limpiarBeneficiarios() {
    if (clienteIndex > 2) {
      var ultimoCampo = camposBenefFinales.lastElementChild;

      camposBenefFinales.removeChild(ultimoCampo);

      beneficiariosAgregados.pop();

      clienteIndex--;

      guardarDatosBeneficiarios();
    } else {
      alert('No hay Beneficiarios para limpiar')
    }
  }

  function cargarDatosBeneficiarios() {
    const datosGuardados = localStorage.getItem('beneficiariosAgregados');
    if (datosGuardados) {
      beneficiariosAgregados = JSON.parse(datosGuardados);
      beneficiariosAgregados.forEach((beneficiario, index) => {
        const nuevoBeneficiarioHTML = generarHTMLBeneficiario(index + 2);
        const nuevoBeneficiarioDiv = document.createElement('div');
        nuevoBeneficiarioDiv.innerHTML = nuevoBeneficiarioHTML;
        camposBenefFinales.appendChild(nuevoBeneficiarioDiv);
      });
      clienteIndex = beneficiariosAgregados.length + 2;
    }
  }
});