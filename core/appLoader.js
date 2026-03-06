let registry={}

export async function loadApps(){

const apps=await fetch("system/apps.json").then(r=>r.json())

apps.forEach(app=>{
registry[app.id]=app
})

}

export async function launch(id){

let app=registry[id]

let module=await import(app.entry)

module.start()

}