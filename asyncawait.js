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
async function procesar(){
    try{
        let resultadoPromesa=await verificar("a", "maria");
        console.log(resultadoPromesa)
    }catch(error){
        console.log(error)
    }
}

procesar()