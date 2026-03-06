import { launch } from "./appLoader.js"

export function initDock(){

const dock=document.getElementById("dock")

fetch("system/apps.json")
.then(r=>r.json())
.then(apps=>{

apps.forEach(app=>{

let icon=document.createElement("img")

icon.src=app.icon || ""
icon.className="dockIcon"
icon.title=app.name

icon.onclick=()=>launch(app.id)

dock.appendChild(icon)

})

})

}