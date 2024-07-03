// ------- Selección de todos los elementos ----------//

// Selecciona el botón de encriptar
const btnEncriptar = document.querySelector('.btn-encriptar');

// Selecciona el campo de texto donde se ingresará el texto a encriptar
const txtEncriptar = document.querySelector('.Encriptar');

// Selecciona el elemento que muestra el aviso de texto
const aviso = document.querySelector('.texto-aviso');

// Selecciona el elemento donde se mostrará el texto encriptado o desencriptado
const respuesta = document.querySelector('.evaluar');

// Selecciona el contenedor principal de la tarjeta que contiene los resultados
const contenido = document.querySelector('.tarjeta-contenedor');

// Selecciona el botón para copiar el texto encriptado o desencriptado
const btnCopiar = document.querySelector('.btn-copiar');

// Selecciona el botón de desencriptar
const btnDesencriptar = document.querySelector('.btn-desencriptar');







//------- Botón Encriptar ------------//

// Añade un evento al botón de encriptar que se ejecutará cuando se haga clic en él
btnEncriptar.addEventListener('click', (e) => {
    // Evita el comportamiento predeterminado del evento, en este caso, el envío de un formulario si el botón está dentro de uno
    e.preventDefault();

    // Obtiene el valor del texto ingresado para encriptar
    let texto = txtEncriptar.value;

    // Elimina acentos y caracteres especiales del texto
    let txt = texto.normalize('NFD').replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, '');

    // Verifica si el campo de texto está vacío
    if (texto == '') {
        aviso.style.background = '#0A3871';
        aviso.style.color = '#ffff';
        aviso.style.fontWeight = '800';
        aviso.textContent = 'El campo de texto no debe estar vacío';

        // Remueve el estilo del aviso después de 1500 milisegundos (1.5 segundos)
        setTimeout(() => {
            aviso.removeAttribute('style');
        }, 1500);
    }
    // Verifica si el texto contiene acentos o caracteres especiales
    else if (texto !== txt) {
        aviso.style.background = '#0A3871';
        aviso.style.color = '#FFFF';
        aviso.style.fontWeight = '800';
        aviso.textContent = 'No debe tener acentos y caracteres especiales';

        // Remueve el estilo del aviso después de 1500 milisegundos (1.5 segundos)
        setTimeout(() => {
            aviso.removeAttribute('style');
        }, 1500);
    }
    // Verifica si el texto contiene letras mayúsculas
    else if (texto !== texto.toLowerCase()) {
        aviso.style.background = '#0A3871';
        aviso.style.color = '#FFFF';
        aviso.style.fontWeight = '800';
        aviso.textContent = 'El texto debe ser todo en minúscula';

        // Remueve el estilo del aviso después de 1500 milisegundos (1.5 segundos)
        setTimeout(() => {
            aviso.removeAttribute('style');
        }, 1500);
    }
    // Si pasa todas las validaciones, procede a encriptar el texto
    else {
        // Sustituye las vocales por sus respectivas palabras
        texto = texto.replace(/e/gm, 'enter');
        texto = texto.replace(/i/gm, 'imes');
        texto = texto.replace(/a/gm, 'ai');
        texto = texto.replace(/o/gm, 'ober');
        texto = texto.replace(/u/gm, 'ufat');

        // Muestra el texto encriptado en el elemento respuesta
        respuesta.innerHTML = texto;

        // Hace visible el botón de copiar
        btnCopiar.style.visibility = 'inherit';

        // Elimina el contenedor principal que muestra las instrucciones
        contenido.remove();
    }
});







/*
----------- Botón Desencriptar ----------
*/

// Añade un evento al botón de desencriptar que se ejecutará cuando se haga clic en él
btnDesencriptar.addEventListener('click', (e) => {
    // Evita el comportamiento predeterminado del evento, en este caso, el envío de un formulario si el botón está dentro de uno
    e.preventDefault();

    // Obtiene el valor del texto ingresado para desencriptar
    let texto = txtEncriptar.value;

    // Elimina acentos y caracteres especiales del texto utilizando expresiones regulares
    let txt = texto.normalize('NFD').replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, '');

    // Verifica si el campo de texto está vacío
    if (texto == '') {
        // Configura el estilo del aviso para indicar que el campo no debe estar vacío
        aviso.style.background = '#0A3871';
        aviso.style.color = '#ffff';
        aviso.style.fontWeight = '800';
        aviso.textContent = 'El campo de texto no debe estar vacío';

        // Remueve el estilo del aviso después de 1500 milisegundos (1.5 segundos)
        setTimeout(() => {
            aviso.removeAttribute('style');
        }, 1500);
    }
    // Verifica si el texto contiene acentos o caracteres especiales
    else if (texto !== txt) {
        // Configura el estilo del aviso para indicar que no debe haber acentos o caracteres especiales
        aviso.style.background = '#0A3871';
        aviso.style.color = '#FFFF';
        aviso.style.fontWeight = '800';
        aviso.textContent = 'No debe tener acentos y caracteres especiales';

        // Remueve el estilo del aviso después de 1500 milisegundos (1.5 segundos)
        setTimeout(() => {
            aviso.removeAttribute('style');
        }, 1500);
    }
    // Verifica si el texto contiene letras mayúsculas
    else if (texto !== texto.toLowerCase()) {
        // Configura el estilo del aviso para indicar que el texto debe ser todo en minúscula
        aviso.style.background = '#0A3871';
        aviso.style.color = '#FFFF';
        aviso.style.fontWeight = '800';
        aviso.textContent = 'El texto debe ser todo en minúscula';

        // Remueve el estilo del aviso después de 1500 milisegundos (1.5 segundos)
        setTimeout(() => {
            aviso.removeAttribute('style');
        }, 1500);
    }
    // Si pasa todas las validaciones, procede a desencriptar el texto
    else {
        // Sustituye las palabras por las vocales correspondientes para desencriptar el texto
        texto = texto.replace(/enter/gm, 'e');
        texto = texto.replace(/imes/gm, 'i');
        texto = texto.replace(/ai/gm, 'a');
        texto = texto.replace(/ober/gm, 'o');
        texto = texto.replace(/ufat/gm, 'u');

        // Muestra el texto desencriptado en el elemento respuesta
        respuesta.innerHTML = texto;

        // Hace visible el botón de copiar para copiar el texto desencriptado
        btnCopiar.style.visibility = 'inherit';

        // Elimina el contenedor principal que muestra las instrucciones una vez que se ha desencriptado el texto
        contenido.remove();
    }
});








/*
----------- Botón Copiar ----------
*/

// Añade un evento al botón de copiar que se ejecutará cuando se haga clic en él
btnCopiar.addEventListener('click', (e) => {
    // Evita el comportamiento predeterminado del evento, en este caso, evitará el envío de un formulario si el botón está dentro de uno
    e.preventDefault();

    // Obtiene el elemento donde se encuentra el texto que se desea copiar
    let copiar = respuesta;

    // Selecciona todo el contenido del elemento para copiarlo al portapapeles
    copiar.select();

    // Ejecuta el comando para copiar el texto seleccionado al portapapeles del sistema
    document.execCommand('copy');
});

