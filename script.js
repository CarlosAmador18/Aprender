let pruebas = document.getElementById("pruebas");

// Map : Recorre el array y devuelve un nuevo array con los valores modificados
// pruebas.addEventListener("click", () => {
//     alert(["hola","adios"].map(x => x[0]))
// }) Resultado h,a

//filter : Recorre el array y devuelve un nuevo array con los valores que cumplan la condición
// pruebas.addEventListener("click", () => {
//     alert([1,2,3,4,5,6,7,8,9,10].filter(x => x % 2 == 1))
// }) Resultado 1,3,5,7,9

//find : Recorre el array y devuelve el primer valor que cumpla la condición
// pruebas.addEventListener("click", () => {
//     alert(["hola","adios"].find(x => x == "adios"))
// }) Resultado adios

//findindex : Recorre el array y devuelve el indice del primer valor que cumpla la condición
    // pruebas.addEventListener("click", () => {
    //     alert([1,2,3,4,5,6,7,8,9,10].findIndex(x => x == 5)) 
    // }) //Resultado 4

//fill : Rellena el array con el valor que le pases
// pruebas.addEventListener("click", () => {
//     alert([1,2,3,4,5,6,7,8,9,10].fill(0))
//  }) // Resultado 0 en todas las casillas

// every : Recorre el array y devuelve true si todos los valores cumplen la condición
// pruebas.addEventListener("click", () => {
//     alert([1,2,3,4,5,6,7,8,9,10].every(x => x % 2 == 0))
// }) // Resultado false por que no todos los numeros son pares

// some : Recorre el array y devuelve true si algun valor cumple la condición
// pruebas.addEventListener("click", () => {
//     alert([1,2,3,4,5,6,7,8,9,10].some(x => x % 2 == 0))
// }) // Resultado true por que algun numero es par

// reduce : Recorre el array y devuelve un valor
// pruebas.addEventListener("click", () => {
// alert([1,2,3,4,5,6,7,8,9,10].reduce((acc, cur) => acc + cur))
// }) // Resultado 55


// Pruebas con objetos