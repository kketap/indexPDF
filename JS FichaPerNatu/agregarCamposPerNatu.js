//Persona Natural

// funcion agregar AAM
document.addEventListener('DOMContentLoaded', function () {
  var agregarAAMBtnPerNatu = document.getElementById('agregarAAMBtnPerNatu');
  var camposContainerAAM = document.getElementById('camposAAMPerNatu');
  var campoIndex = 2;

  agregarAAMBtnPerNatu.addEventListener('click', function () {
      var nuevoCampoHTML = `
              <!-- código HTML-->
                      <div class="col-md-6">
              <label for="nombreAAMPerNatu${campoIndex}" class="form-label">Nombre Completo (${campoIndex})</label>
              <input type="text" name="nombreAAMPerNatu${campoIndex}" placeholder="Nombre Completo (${campoIndex})" class="form-control"
                id="nombreAAMPerNatu${campoIndex}">
            </div>
            <div class="col-md-6">
              <label for="rutAAMPerNatu${campoIndex}" class="form-label">RUT (${campoIndex})</label>
              <input type="text" name="rutAAMPerNatu${campoIndex}" placeholder="RUT (${campoIndex})" class="form-control" 
              id="rutAAMPerNatu${campoIndex}">
            </div>
            <br>
            <br>
            <br>
            <div class="col-md-6">
              <label for="nacionalidadAAMPerNatu${campoIndex}" class="form-label">Nacionalidad (${campoIndex})</label>
              <input type="text" name="nacionalidadAAMPerNatu${campoIndex}" placeholder="Nacionalidad (${campoIndex})" class="form-control"
                id="nacionalidadAAMPerNatu${campoIndex}">
            </div>
            <div class="col-md-6">
              <label for="correoAAMPerNatu${campoIndex}" class="form-label">Correo Electrónico (${campoIndex})</label>
              <input type="email" name="correoAAMPerNatu${campoIndex}" placeholder="Correo Electrónico (${campoIndex})" class="form-control"
                id="correoAAMPerNatu${campoIndex}">
            </div>
            <br>
            <br>
            <br>
            <div class="col-md-6">
              <label for="direccionAAMPerNatu${campoIndex}" class="form-label">Dirección (${campoIndex})</label>
              <input type="text" name="direccionAAMPerNatu${campoIndex}" placeholder="Dirección (${campoIndex})" class="form-control"
                id="direccionAAMPerNatu${campoIndex}">
            </div>
            <div class="col-md-6">
              <label for="comunaAAMPerNatu${campoIndex}" class="form-label">Comuna (${campoIndex})</label>
              <input type="text" name="comunaAAMPerNatu${campoIndex}" placeholder="Comuna (${campoIndex})" class="form-control"
                id="comunaAAMPerNatu${campoIndex}">
            </div>
            <br>
            <br>
            <br>
            <div class="col-md-6">
              <label for="estadoCivilAAMPerNatu${campoIndex}" class="form-label">Estado Civil (${campoIndex})</label>
              <input type="text" name="estadoCivilAAMPerNatu${campoIndex}" placeholder="Estado Civil (${campoIndex})" class="form-control"
                id="estadoCivilAAMPerNatu${campoIndex}">
            </div>
            <div class="col-md-6">
              <label for="telefonoAAMPerNatu${campoIndex}" class="form-label">Telefóno (${campoIndex})</label>
              <input type="tel" name="telefonoAAMPerNatu${campoIndex}" placeholder="Telefóno (${campoIndex})" class="form-control"
                id="telefonoAAMPerNatu${campoIndex}">
            </div>
              <br>
              <br>
              <br>
              <br>
              <br>
          `;
      var nuevoCampoContainer = document.createElement('div');
      nuevoCampoContainer.classList.add('row');
      nuevoCampoContainer.innerHTML = nuevoCampoHTML;

      camposContainerAAM.appendChild(nuevoCampoContainer);

      campoIndex++;
  });
});