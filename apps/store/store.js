import {createWindow} from "../../core/windowManager.js"

export function start(){

let html=`<h2>App Store</h2><div id="apps"></div>`

createWindow("App Store",html)

loadStore()

}

async function loadStore(){

const res=await fetch("system/apps.json")
const apps=await res.json()

let list=document.getElementById("apps")

apps.forEach(a=>{

let card=document.createElement("div")

card.innerHTML=`
<h3>${a.name}</h3>
<button onclick="alert('Installed ${a.name}')">Install</button>
`

list.appendChild(card)

})

}