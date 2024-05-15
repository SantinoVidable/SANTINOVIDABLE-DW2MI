


let nombre
let mail
let contraseña


function registrarse(){
 nombre = prompt(" ¿Como se llamas?")
 mail = prompt("Ingrese su email")
 contraseña = prompt ("Ingrese su  contraseña")
alert ("Se ha registrado su usuario" + " " +  nombre)
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
        alert("Se modifico su contraseña, ahora es" + " " + nuevacontraseña)
    }
    else{
        alert( "El mail ingresado no coincide con el registrado")
    }
    
} else if (cambiarcontraseña == "no") {
     
     alert("No se han realizado cambios.")
    }
    else {
        alert("Por favor responda con 'si' o con 'no'")
    }
}

modificarcontraseña()