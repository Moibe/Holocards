function obtenNombre(nombre){

const [first, ...rest] = nombre.split(" "); 

console.log(first); // 👉️ try
console.log(rest); // 👉️ ['again', 'later']

return first; 

}

