export function writeFile(name,data){
localStorage.setItem(name,data)
}

export function readFile(name){
return localStorage.getItem(name)
}

export function listFiles(){
return Object.keys(localStorage)
}