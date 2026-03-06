export function createWindow(title, content){

let win=document.createElement("div")
win.className="window glass"

win.innerHTML=`
<div class="titlebar">
<span>${title}</span>
<button class="close">×</button>
</div>
<div class="content">${content}</div>
`

document.body.appendChild(win)

win.querySelector(".close").onclick=()=>win.remove()

drag(win)

}

function drag(el){

let posX=0,posY=0

el.querySelector(".titlebar").onmousedown=e=>{

posX=e.clientX
posY=e.clientY

document.onmousemove=move
document.onmouseup=stop

}

function move(e){

el.style.left=el.offsetLeft+(e.clientX-posX)+"px"
el.style.top=el.offsetTop+(e.clientY-posY)+"px"

posX=e.clientX
posY=e.clientY

}

function stop(){
document.onmousemove=null
}

}