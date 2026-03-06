import {createWindow} from "../../core/windowManager.js"

export function start(){

createWindow(
"Notes",
`<textarea style="width:100%;height:100%;background:black;color:white"></textarea>`
)

}