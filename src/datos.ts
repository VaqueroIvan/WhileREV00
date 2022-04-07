//Declaración de variables
let nota: number, promedio: number, contador: number, suma: number;
//Inicialización de variables
contador = 1;
suma = 0;
//MAIN
while (contador <= 10) {
  nota = Number(prompt("Introduzca la nota número " + contador, "7"));
  suma = suma + nota; //se puede escribir: suma +=nota;
  contador++;
}
promedio = suma / 10;
alert("el promedio es " + promedio);
