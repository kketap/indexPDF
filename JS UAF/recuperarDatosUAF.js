/*document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('mostrarBeneficiariosUAF').addEventListener('click', function () {
    const datosBeneficiariosRecuperados = document.getElementById('datosBenefUAFRecuperados');
    datosBeneficiariosRecuperados.innerHTML = ''; // Limpiar cualquier contenido anterior

    let beneficiarioIndex = 1;

    function crearInputsResidencia() {
      const rowdivResidencia = document.createElement('div');
      rowdivResidencia.className = 'row-md-6';

      const divcol1 = document.createElement('div');
      divcol1.className = 'col-md-6';

      const divcol12 = document.createElement('div');
      divcol12.className = 'col-md-12';

      const label1 = document.createElement('label');
      label1.setAttribute('for', 'nacionalidadSocio');
      label1.className = 'form-label';
      label1.textContent = 'Nacionalidad o País de Constitución';

      const input1 = document.createElement('input');
      input1.setAttribute('type', 'text');
      input1.setAttribute('name', 'declaracionSocios');
      input1.setAttribute('placeholder', 'Nacionalidad o País de Constitución');
      input1.className = 'form-control';
      input1.id = 'nacionalidadSocio';

      divcol12.appendChild(label1);
      divcol12.appendChild(input1);

      divcol1.appendChild(divcol12);

      const divcol2 = document.createElement('div');
      divcol2.className = 'col-md-6 pais-tax1';

      const divcol23 = document.createElement('div');
      divcol23.className = 'col-md-12';

      const label3 = document.createElement('label');
      label3.setAttribute('for', 'paisFiscalSocio1');
      label3.className = 'form-label';
      label3.textContent = 'País de domicilio tributario';

      const input3 = document.createElement('input');
      input3.setAttribute('type', 'text');
      input3.setAttribute('name', 'paisFiscalSocio');
      input3.setAttribute('placeholder', 'País de domicilio tributario');
      input3.className = 'form-control';
      input3.id = 'paisFiscalSocio1';

      const divcol24 = document.createElement('div');
      divcol24.className = 'col-md-12';

      const label4 = document.createElement('label');
      label4.setAttribute('for', 'taxIDSocio');
      label4.className = 'form-label';
      label4.textContent = 'Tax ID de domicilio tributario';

      const input4 = document.createElement('input');
      input4.setAttribute('type', 'text');
      input4.setAttribute('name', 'taxIDSocio');
      input4.setAttribute('placeholder', 'Tax ID de domicilio tributario');
      input4.className = 'form-control';
      input4.id = 'taxIDSocio';

      divcol23.appendChild(label3);
      divcol23.appendChild(input3);

      divcol24.appendChild(label4);
      divcol24.appendChild(input4);

      divcol2.appendChild(divcol23);
      divcol2.appendChild(divcol24);

      const divcol3 = document.createElement('div');
      divcol3.className = 'col-md-6 pais-tax2';

      const divcol25 = document.createElement('div');
      divcol25.className = 'col-md-12';

      const label5 = document.createElement('label');
      label5.setAttribute('for', 'paisFiscal2Socio');
      label5.className = 'form-label';
      label5.textContent = 'País (2) de domicilio tributario';

      const input5 = document.createElement('input');
      input5.setAttribute('type', 'text');
      input5.setAttribute('name', 'paisFiscal2Socio');
      input5.setAttribute('placeholder', 'País (2) de domicilio tributario');
      input5.className = 'form-control';
      input5.id = 'paisFiscal2Socio';

      const divcol26 = document.createElement('div');
      divcol26.className = 'col-md-12';

      const label6 = document.createElement('label');
      label6.setAttribute('for', 'taxID2Socio');
      label6.className = 'form-label';
      label6.textContent = 'Tax ID (2) de domicilio tributario';

      const input6 = document.createElement('input');
      input6.setAttribute('type', 'text');
      input6.setAttribute('name', 'taxID2Socio');
      input6.setAttribute('placeholder', 'Tax ID (2) de domicilio tributario');
      input6.className = 'form-control';
      input6.id = 'taxID2Socio';

      divcol25.appendChild(label5);
      divcol25.appendChild(input5);

      divcol26.appendChild(label6);
      divcol26.appendChild(input6);

      divcol3.appendChild(divcol25);
      divcol3.appendChild(divcol26);

      rowdivResidencia.appendChild(divcol1);
      rowdivResidencia.appendChild(divcol2);
      rowdivResidencia.appendChild(divcol3);

      return rowdivResidencia;
    }

    function crearPreguntaResidencia(numeroBeneficiario) {
      const preguntaResidencia = document.createElement('h5');
      preguntaResidencia.innerHTML = `<br> ¿Tiene el Beneficiario (${beneficiarioIndex}) Residencia Fiscal en Extranjero?`;

      const divResidencia = document.createElement('div');
      divResidencia.className = 'input-group text-center';

      const divSi = document.createElement('div');
      divSi.className = 'form-check form-check-inline';
      divSi.innerHTML = '<label style="padding-right: 10px;">Si</label> <input name="residenciaFiscalPregunta' + numeroBeneficiario + '" class="form-check-input" type="radio" value="0">';

      const divNo = document.createElement('div');
      divNo.className = 'form-check form-check-inline';
      divNo.innerHTML = '<label style="padding-right: 10px;">No</label> <input name="residenciaFiscalPregunta' + numeroBeneficiario + '" class="form-check-input" type="radio" value="1">' + '<br><br>';

      divResidencia.appendChild(divSi);
      divResidencia.appendChild(divNo);

      beneficiarioIndex++;

      return [preguntaResidencia, divResidencia];
    }

    const beneficiario = [
      { nombre: document.getElementById('nomBenef').value, rut: document.getElementById('rutBenef').value },
      { nombre: document.getElementById('nomBenef2') ? document.getElementById('nomBenef2').value : null, rut: document.getElementById('rutBenef2') ? document.getElementById('rutBenef2').value : null },
      { nombre: document.getElementById('nomBenef3') ? document.getElementById('nomBenef3').value : null, rut: document.getElementById('rutBenef3') ? document.getElementById('rutBenef3').value : null },
      { nombre: document.getElementById('nomBenef4') ? document.getElementById('nomBenef4').value : null, rut: document.getElementById('rutBenef4') ? document.getElementById('rutBenef4').value : null },
      { nombre: document.getElementById('nomBenef5') ? document.getElementById('nomBenef5').value : null, rut: document.getElementById('rutBenef5') ? document.getElementById('rutBenef5').value : null }, ,
    ];


    beneficiario.forEach(function (beneficiario, index) {
      if (beneficiario.nombre && beneficiario.rut) {
        const datosBeneficiario = document.createElement('p');
        datosBeneficiario.innerHTML = 'Nombre Completo Beneficiario (' + (index + 1) + ') : ' + beneficiario.nombre + '<br> RUT Beneficiario (' + (index + 1) + ') :' + beneficiario.rut + '<br><br>';

        const rowdivResidencia = crearInputsResidencia(index + 1); // Aquí se corrige la llamada
        datosBeneficiario.appendChild(rowdivResidencia);

        const [preguntaResidencia, divResidencia] = crearPreguntaResidencia(index + 1);
        datosBeneficiario.appendChild(preguntaResidencia);
        datosBeneficiario.appendChild(divResidencia);

        datosBeneficiariosRecuperados.appendChild(datosBeneficiario);
      }
    });
  });
});

*/