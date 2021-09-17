let verificar = (correo, contraseña) => {
    let promesa=new Promise(function(resolve,reject){
        const correo1="ana"
        const contraseña1="maria"
        console.log("Procesando...")
        setTimeout(function(){
            if (correo==correo1 && contraseña==contraseña1){
                resolve("Bienvenido")
            }else{
                reject("No")
            }
        },500)
    })
    return promesa
}

verificar("a", "maria")
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(error){
    console.log(error)
})