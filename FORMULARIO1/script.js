// Obtener los elementos del formulario
const form = document.querySelector('.form');
const nombreInput = document.querySelector('input[placeholder="Nombre Completo"]');
const apellidosInput = document.querySelector('input[placeholder="Apellidos"]');
const dniInput = document.querySelector('input[placeholder="DNI"]');
const edadInput = document.querySelector('input[placeholder="Edad"]');
const correoInput = document.querySelector('input[placeholder="CorreoElectronico"]');
const contraseñaInput = document.querySelector('input[placeholder="Contraseña"]');
const terminosCheckbox = document.getElementById('terminos');

// Agregar un evento de escucha al enviar el formulario
form.addEventListener('submit', function(event) {
    // Detener el envío del formulario
    event.preventDefault();

    // Validar los campos del formulario
    if (nombreInput.value === '') {
        alert('Por favor, ingrese su nombre completo.');
        return;
    }

    if (apellidosInput.value === '') {
        alert('Por favor, ingrese sus apellidos.');
        return;
    }

    if (dniInput.value === '') {
        alert('Por favor, ingrese su DNI.');
        return;
    }

    if (edadInput.value === '') {
        alert('Por favor, ingrese su edad.');
        return;
    }

    if (correoInput.value === '') {
        alert('Por favor, ingrese su correo electrónico.');
        return;
    }

    if (contraseñaInput.value === '') {
        alert('Por favor, ingrese una contraseña.');
        return;
    }

    if (!terminosCheckbox.checked) {
        alert('Por favor, acepte los términos y condiciones.');
        return;
    }

    // Si todos los campos son válidos, enviar el formulario
    form.submit();

    // Recargar la página después de enviar el formulario
    window.location.reload();
});