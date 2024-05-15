


let nombre
let mail
let contraseña


function registrarse(){
 nombre = prompt(" ¿Como te llamas?")
 mail = prompt("Decime tu email")
 contraseña = prompt ("Decime tu contraseña")
alert ("Se ha registrado tu usuario" + " " +  nombre)
}
registrarse()


function iniciodesesion(){
 let maillogin = prompt(" Ingrese su email" )
 let nuevaContraseña = prompt("Ingrese su contraseña")

if( mail== maillogin) {

if ( contraseña == nuevaContraseña ){
    alert( "Se ha iniciado sesion correctamente")
}
else{
alert("Su  contraseña es incorrecta" )
}
}
}
iniciodesesion()



function modificarcontraseña(nuevacontraseña){

let cambiarcontraseña = prompt(" ¿Desea cambiar su contraseña? (si/no)")
if (cambiarcontraseña == "si"){
    let emailconfirmacion = prompt("Por favor inguese su mail")
    if(emailconfirmacion == mail){
        nuevacontraseña = prompt("Ingrese su nueva contraseña")
        alert("Se modifico tu contraseña, ahora es" + " " + nuevacontraseña)
    }
    else{
        alert( "El mail ingresado no coincide con el registrado")
    }
    
} else if (cambiarcontraseña.toLowerCase() === "no") {
     
     alert("No se ha cambiado la contraseña.")
    }
    else {
        alert("Por favor responda con 'si' o con 'no'")
    }
}

modificarcontraseña()