// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Paso 1: Declarar el array que almacenará los nombres
let amigos = [];

// Paso 2: Referenciar los elementos del DOM
const input = document.getElementById("amigo");
const ulLista = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

// Paso 3: Función para agregar amigos al array
function agregarAmigo() {
    const nombre = input.value.trim();
    if (nombre === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya ha sido ingresado.");
        input.value = "";
        return;
    }
    amigos.push(nombre);

    const li = document.createElement("li");
    li.textContent = nombre;
    ulLista.appendChild(li);
    input.value = "";
}

// Paso 4: Función para sortear un único amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Primero debes agregar nombres.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const elegido = amigos[indice];

    ulResultado.innerHTML = "";
    const li = document.createElement("li");
    li.textContent = `🎉 El amigo secreto es: ${elegido}`;
    ulResultado.appendChild(li);
}