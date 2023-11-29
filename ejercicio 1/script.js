// Solicitar número de filas y columnas
let numFilas = prompt("Ingrese el número de filas");
let numColumnas = prompt("Ingrese el número de columnas");

// Crear la tabla
let tabla = "<table border='1'>";

for (let i = 0; i < numFilas; i++) {
    tabla += "<tr>";
    for (let j = 0; j < numColumnas; j++) {
        let num = numFilas * numColumnas - i * numColumnas - j;
        tabla += "<td>" + num + "</td>";
    }
    tabla += "</tr>";
}

tabla += "</table>";

// Escribir la tabla en el cuerpo del documento
document.write(tabla);