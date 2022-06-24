let divBtnPaypal;
let currentDiv;

function obtenNombre(nombre){

const [first, ...rest] = nombre.split(" "); 

//(first) 👉️ try
//(rest) 👉️ ['again', 'later']

return first; 

}

function obtenFecha(locale){

// program to display the date
// get local machine date time
const date = new Date();

// get the date as a string
const n = date.toDateString();

// get the time as a string
const time = date.toLocaleTimeString();


// get the day from the date
let day = date.getDate();


// get the month from the date
// + 1 because month starts from 0
let month = date.getMonth() + 1;

mes_escrito = date.toLocaleString(locale, { month: 'long' })

fecha_requerida = mes_escrito + " " + day;

return fecha_requerida; 

}

function construyePaypal(tzid, nodo){

    var paypalScript = document.createElement("script");
    console.log("CREANDO PAYPAL_SCRIPT");
    console.log(paypalScript);
    paypalScript.type = "text/javascript";
    paypalScript.id = "btnPaypal";
    paypalScript.src = "/localpaypal.js?merchant=735A4R6642VWC";
    paypalScript.style.textalign = "center";
    //Agregaremos los atributos....
    paypalScript.setAttribute("data-name", "Digital Download");
    paypalScript.setAttribute("data-amount", "25");
    paypalScript.setAttribute("data-currency", "USD");
    paypalScript.setAttribute("data-size", "small");
    paypalScript.setAttribute("data-noshipping", 1);
    paypalScript.setAttribute("data-return", "http://127.0.0.1:5501/");
    paypalScript.setAttribute("data-cancel_return", "http://127.0.0.1:5501/success.html?tzid=" + tzid + "&node=" + nodo);
    paypalScript.setAttribute("data-currency_code", "USD");
    paypalScript.setAttribute("data-locale", "es_ES");
    paypalScript.setAttribute("data-type", "form");
    paypalScript.setAttribute("async", "");

    // add the newly created element and its content into the DOM
    //Haz un FOR para no repetir esto 4 veces.

    //Crea sus clones:
    let paypalScript2 = paypalScript.cloneNode();
    paypalScript2.setAttribute("data-amount", "50");
    let paypalScript3 = paypalScript.cloneNode();
    paypalScript3.setAttribute("data-amount", "75");
    let paypalScript4 = paypalScript.cloneNode();
    paypalScript4.setAttribute("data-amount", "100");
    
    
    divBtnPaypal = document.getElementById("btnPaypal1");
    currentDiv = document.getElementById("referencia1");
    divBtnPaypal.insertBefore(paypalScript, currentDiv);

    divBtnPaypal = document.getElementById("btnPaypal2");
    currentDiv = document.getElementById("referencia2");
    divBtnPaypal.insertBefore(paypalScript2, currentDiv);

    divBtnPaypal = document.getElementById("btnPaypal3");
    currentDiv = document.getElementById("referencia3");
    divBtnPaypal.insertBefore(paypalScript3, currentDiv);

    divBtnPaypal = document.getElementById("btnPaypal4");
    currentDiv = document.getElementById("referencia4");
    divBtnPaypal.insertBefore(paypalScript4, currentDiv);


    

    

}

