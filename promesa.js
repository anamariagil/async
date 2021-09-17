let verificar = (correo, contraseña) => {
    let promesa=new Promise(function(resolve,reject){
        const correo1="ana"
        const contraseña1="maria"
        console.log("Procesando...")
        setTimeout(function(){
            if (correo==correo1 && contraseña==contraseña1){
                resolve(console.log("Bienvenido"))
            }else{
                reject(console.log("No"))
            }
        },500)
    })
    return promesa
}

verificar("ana", "maria")