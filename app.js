// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Almacena los nombres
let amigos = [];
let nuevoAmigo = '';
let listaAmigo = document.getElementById('listaAmigos');

console.log(nuevoAmigo) ;

function agregarAmigo() {
    //Recibe el valor (nombre|string) enviado por el usuario
    nuevoAmigo = document.getElementById('amigoRecibido').value;
    console.log(`Amigo agregado: ${nuevoAmigo}`);
    console.log(typeof(nuevoAmigo));
    
    //Verifica si el valor es vacío. En ese caso envia un alert
    if (nuevoAmigo == '') {
        alert('Por favor, inserte un nombre');
    } else {
        //Agrega el amigo a la lista, si el valor es valido
        amigos.push(nuevoAmigo);
        console.log(amigos);
        listaAmigo.innerHTML = `amigo: ${nuevoAmigo}`;
    }
    limpiarCaja();
}

//Limpia el campo de entrada como el principio
function limpiarCaja() {
    return document.getElementById('amigoRecibido').value = '';
}