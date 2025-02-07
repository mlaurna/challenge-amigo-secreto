// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Almacena los nombres
let amigos = [];
let nuevoAmigo = '';
let listaAmigo = document.getElementById('listaAmigos');

console.log(nuevoAmigo) ;

function agregarAmigo() {
    //Recibe el valor (nombre|string) enviado por el usuario
    nuevoAmigo = document.getElementById('amigoRecibido').value;
    
    //Verifica si el nombre ya está en la lista
    if (amigos.includes(nuevoAmigo)) {
        // Agregar el mensaje de advertencia si no existe ya
        alert('No se puede repetir los nombres');
    } else if (nuevoAmigo == '') { //Verifica si el valor es vacío. En ese caso envia un alert
        alert('Por favor, inserte un nombre');
    } else {
        //Agrega el amigo a la lista, si el valor es valido
        amigos.push(nuevoAmigo);
        console.log(amigos);
        //listaAmigo.innerHTML = `amigo: ${nuevoAmigo}`;

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
        
        console.log(`Amigo agregado: ${nuevoAmigo}`);
        console.log(typeof(nuevoAmigo));
    }
    limpiarCaja();
}

//Limpia el campo de entrada como el principio
function limpiarCaja() {
    document.getElementById('amigoRecibido').value = '';
    if (document.querySelector('.advertencia')) {
        mensajeAdvertencia.remove();
    }
    return; 
}

function actualizarAmigos() {
    //Seleccionar el espacio donde se colocarán los amigos
}