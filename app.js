// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Almacena los nombres
let amigos = [];
let nuevoAmigo = '';
let listaAmigo = document.getElementById('listaAmigos');

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
    
    //Verifica si el nombre ya está en la lista
    if (amigos.includes(nuevoAmigo)) {
        //Agrega mensaje si el nombre ya está en la lista
        asignarTextoElemento('#advertencia', 'No pueden repetirse los nombres', 'messsage-name');
    } else if (nuevoAmigo == '') {
        //Agrega mensaje si no se colocó ningun nombre
        asignarTextoElemento('#advertencia', 'Debes colocar un nombre', 'messsage-name');
    } else {
        //Agrega el amigo a la lista, si el valor es valido
        amigos.push(nuevoAmigo);
        limparAdvertencia();
        actualizarAmigo();
        
        console.log(`Amigo agregado: ${nuevoAmigo}`);
        console.log(typeof(nuevoAmigo));
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
        asignarTextoElemento('#listaAmigos', '');
        asignarTextoElemento('#listaAmigos', `El amigo sorteado es ${amigos[amigoSorteado]}!`, 'message-draw');

    } else {
        alert('Debes colocar un nombre');
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