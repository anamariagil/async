let verificar = (correo, contraseña, mensaje) => {
    const correo1="ana"
    const contraseña1="maria"
    console.log("Procesando...")
    setTimeout(function(){
        if (correo==correo1 && contraseña==contraseña1){
            mensaje(200)
        }else{
            mensaje(404)
        }
    },5000)
}

verificar("ana", "maria", let = valor=>{
    if (valor==200){
        console.log("Si")
    } else {
        console.log("No")
    }
})