function test(){
let nombre_seleccionado; 
let trans = txid;
//Declaramos el json con las variables de idioma.
let jsonTransactions;

//Obtenemos el json con las variables de idioma.
jsonTransactions = JSON.parse(transacciones);
console.log(jsonTransactions);


//También los textos de los botones se usarán como texto variable.
nombre_seleccionado = jsonTransactions[trans].nombre;
console.log(nombre_seleccionado);

area_nombre = document.getElementById('nombre');
area_nombre.innerHTML = nombre_seleccionado;
console.log("Ésto es un Test!");
}