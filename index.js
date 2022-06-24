//IDIOMA
let jsonTraducciones;
let idioma = 'english';
let pais;
let nombre_completo; 
let locale; 

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

//Countries
jsonCountries = JSON.parse(paises);

pais = jsonTransactions[txid].pais;
console.log("ESTO ES EL PAIS DEL USUARIO.");
console.log(pais);

locale = jsonCountries[pais].locale;
console.log("Esto es el locale:");
console.log(locale);

currency = jsonCountries[pais].currency;
console.log("Esto es el currency:");
console.log(currency);

escribeTitulo();
escribeNombre(txid);
escribePrecio(); 
escribeFooter();
}

function escribeTitulo(){
    texto_top_title = jsonTraducciones[idioma].top_title;
    top_title = document.getElementById('top_title');
    top_title.innerHTML = texto_top_title;
}

function escribeNombre(txid){

    //Textos Fijos
    welcome1 = jsonTraducciones[idioma].welcome1;
    welcome2 = jsonTraducciones[idioma].welcome2;

    //Variable: Nombre.
    nombre_completo = jsonTransactions[txid].nombre;
    nombre_propio = obtenNombre(nombre_completo)
   
    texto_completo = welcome1 + nombre_propio + welcome2; 
    
    welcome_message = document.getElementById('welcome_message');
    welcome_message.innerHTML = texto_completo;
    
}

function escribePrecio(){

    precio = 25;

    //Textos Fijos
    texto_price1 = jsonTraducciones[idioma].texto_price1;
        
    texto_completo = texto_price1 + precio + " " + currency;

    for (let i = 1; i < 5; i++) {
        price = document.getElementById(i);
        price.innerHTML = texto_completo;
      }
    
    

}

function escribeFooter(){
    
    //Textos Fijos
    footer1 = jsonTraducciones[idioma].footer1;
    footer2 = jsonTraducciones[idioma].footer2;

    

    fecha_limite = obtenFecha(locale);
    texto_completo = footer1 + fecha_limite + footer2; 

    
    
    footer = document.getElementById('footer');
    footer.innerHTML = texto_completo;
}