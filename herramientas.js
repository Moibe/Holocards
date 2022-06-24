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

