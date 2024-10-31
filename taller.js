
let nombre = "Juan";
let edad = 25;
let esEstudiante = true;

let mensaje = `Nombre: ${nombre}, Edad: ${edad}, Es estudiante: ${esEstudiante}`;
let contador = 1;
while (contador <= 2) {
    document.getElementById("variables").innerText += `${mensaje}\n`;
    nombre = "María";
    edad = 30;
    esEstudiante = false;
    mensaje = `Nombre actualizado: ${nombre}, Edad actualizada: ${edad}, Es estudiante actualizado: ${esEstudiante}`;
    contador++;
}

function realizarOperaciones() {
    let a = parseFloat(document.getElementById("inputA").value);
    let b = parseFloat(document.getElementById("inputB").value);

    let operacionesTexto = `
        Suma: ${a + b}
        Resta: ${a - b}
        Multiplicación: ${a * b}
        División: ${a / b}
    `;
    document.getElementById("operaciones").innerText = operacionesTexto;

    const comparadores = [
        { desc: "a es igual a b", resultado: a === b },
        { desc: "a es diferente de b", resultado: a !== b },
        { desc: "a es mayor que b", resultado: a > b },
        { desc: "a es menor que b", resultado: a < b },
        { desc: "a es mayor o igual que b", resultado: a >= b },
        { desc: "a es menor o igual que b", resultado: a <= b }
    ];

    let comparacionTexto = "";
    for (let i = 0; i < comparadores.length; i++) {
        comparacionTexto += `${comparadores[i].desc}: ${comparadores[i].resultado}\n`;
    }
    document.getElementById("comparaciones").innerText = comparacionTexto;
}

let esMayorDeEdad = true;
let tieneLicencia = false;

let puedeConducir = esMayorDeEdad && tieneLicencia;
document.getElementById("puedeConducir").innerText = `¿Puede conducir? ${puedeConducir}`;

let mensajeBienvenida = `Bienvenido ${nombre}, tienes ${edad} años.`;
document.getElementById("mensajeBienvenida").innerText = mensajeBienvenida;
