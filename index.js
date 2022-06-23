//IDIOMA
let jsonTraducciones;
let idioma = 'english';
let nombre_completo; 

//Declaramos el json que contendrá toda la información.
let jsonTransactions;

function carga(){

//Se obtiene el id del arreglo con el que vamos a trabajar. 
const urlParams = new URLSearchParams(window.location.search);
const txid = urlParams.get('txid');

//Transacciones
jsonTransactions = JSON.parse(transacciones);

//Traducciones
jsonTraducciones = JSON.parse(traducciones);

escribeNombre(txid, jsonTransactions);
}

function escribeNombre(txid, jsonTransactions){

    //Textos Fijos
    welcome1 = jsonTraducciones[idioma].welcome1;
    welcome2 = jsonTraducciones[idioma].welcome2;

    //Variable: Nombre.
    nombre_completo = jsonTransactions[txid].nombre;
    nombre_propio = obtenNombre(nombre_completo)
    console.log("Nombre propio:" + nombre_propio);

    texto_completo = welcome1 + nombre_propio + welcome2; 
    
    welcome_message = document.getElementById('welcome_message');
    welcome_message.innerHTML = texto_completo;
    
    }