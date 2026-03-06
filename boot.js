import { initDesktop } from "./core/desktop.js"
import { initDock } from "./core/dock.js"
import { loadApps } from "./core/appLoader.js"

async function boot(){

document.getElementById("boot").innerText = "Booting AetherOS..."

await loadApps()

initDesktop()
initDock()

document.getElementById("boot").remove()

}

boot()