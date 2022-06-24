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
console.log("Date as a string:");
console.log(n);

// get the time as a string
const time = date.toLocaleTimeString();
console.log("Time as a string:");
console.log(time);

// display date
console.log('Date: ' + n);

// display time
console.log('Time: ' + time);


// get the day from the date
let day = date.getDate();
console.log("Éste es el número de día:");
console.log(day);

// get the month from the date
// + 1 because month starts from 0
let month = date.getMonth() + 1;
console.log("Ésto es el número de mes:");
console.log(month);

console.log("Ésta es la fecha formateada...");
console.log(day + "," + month);

mes_escrito = date.toLocaleString(locale, { month: 'long' })

console.log("Éste es el resultado final que queremos!:");
console.log(mes_escrito + " " + day);
fecha_requerida = mes_escrito + " " + day;

return fecha_requerida; 

}

