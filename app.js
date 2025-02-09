// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Almacena los nombres
let amigos = [];
let nuevoAmigo = '';
let cantidadAmigos = 1;
let listaAmigo = document.getElementById('listaAmigos');
let limiteAmigos = 0;

function establecerLimite() {
    // Obtiene el valor del input y lo convierte a número
    let valor = parseInt(document.getElementById('cantidadAmigos').value);
    
    // Verifica que el valor sea un número y que sea mayor o igual a 2
    if (isNaN(valor) || valor < 2) {
        asignarTextoElemento('#advertencia', 'El número debe ser mayor o igual a 2', 'message-name');
    } else {
        limiteAmigos = valor;
        limparAdvertencia(); 

        let container = document.getElementById('cantidad-container');
        container.classList.add('fade-out');
        
        // Oculta completamente el contenedor luego de la transición 
        container.addEventListener('transitionend', function() {
            container.style.display = 'none';
            document.getElementById('input-container').style.marginTop = '20px';
        }, { once: true });
    }
}

//Simplifica la asignación de texto a elemento HTML.
function asignarTextoElemento(elemento, texto, clase) {
    //Selecciona el elemento HTML y lo asigna a una variable
    let elementoHTML = document.querySelector(elemento);
    //Asigna el texto al elemento HTML
    elementoHTML.innerHTML = texto;
    elementoHTML.classList.add(clase);
    return;
}

function actualizarAmigo() {
    //Limpia la lista de amigos antes de actualizarla
    listaAmigo.innerHTML = '';

    //Recorre el array de amigos
    for (let i = 0; i < amigos.length; i++) {
        //Crea un nuevo elemento li
        const li = document.createElement('li');
        //Establece el texto del <li> como el nombre del amigo
        li.textContent = amigos[i];
        //Agregar el <li> a la lista <ul>
        listaAmigo.appendChild(li);
    }
    return;
}

function agregarAmigo() {
    //Recibe el valor (nombre|string) enviado por el usuario
    nuevoAmigo = document.getElementById('amigoRecibido').value;

    // Convierte el nombre a mayúsculas
    nuevoAmigo = nuevoAmigo.toUpperCase();

    //Limita la cantidad de amigos
    if (amigos.length < limiteAmigos) {
            //Verifica si el nombre ya está en la lista
        if (amigos.includes(nuevoAmigo)) {
            //Agrega mensaje si el nombre ya está en la lista
            asignarTextoElemento('#advertencia', 'No pueden repetirse los nombres', 'message-name');
        } else if (nuevoAmigo == '') {
            //Agrega mensaje si no se colocó ningun nombre
            asignarTextoElemento('#advertencia', 'Debes colocar un nombre', 'message-name');
        } else {
            //Agrega el amigo a la lista, si el valor es valido
            amigos.push(nuevoAmigo);
            limparAdvertencia();
            actualizarAmigo();
        
            console.log(`Amigo agregado: ${nuevoAmigo}`);
            console.log(typeof(nuevoAmigo));
        }
    } else {
        //Si el limite se superó
        asignarTextoElemento('#advertencia', `El límite máximo de amigos es ${limiteAmigos}`, 'message-name');
    }
    limpiarCaja();
    return;
}

function sortearAmigo() {
    //Comprueba que la lista no esté vacía
    if (amigos.length > 0) {
        //Genera un índice aleatorio
        let amigoSorteado = Math.floor(Math.random() * (amigos.length));
        //Obtiene el amigo sorteado
        console.log(amigos[amigoSorteado]);
        //Muestra el resultado
        limparAdvertencia();
        asignarTextoElemento('#listaAmigos', '');
        asignarTextoElemento('#listaAmigos', `El amigo sorteado es ${amigos[amigoSorteado]}!`, 'message-draw');

    } else {
        asignarTextoElemento('#advertencia', 'Debes colocar un nombre', 'message-name')
    }
}

//Limpia el campo de entrada 
function limpiarCaja() {
    document.getElementById('amigoRecibido').value = '';
    return; 
}

//Limpia el campo de advertencia
function limparAdvertencia() {
    asignarTextoElemento('#advertencia', '');
    document.getElementById('advertencia').style.marginTop = '0px';
    return;
}