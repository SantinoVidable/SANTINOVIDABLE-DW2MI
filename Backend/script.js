let nombre
let mail
let contraseña


function registrarse(){
 nombre = prompt(" ¿Como se llama?")
 mail = prompt("Ingrese su email")
 contraseña = prompt ("Ingrese su  contraseña")
alert ("Se ha registrado su usuario" + " " +  nombre)}
registrarse()


function iniciodesesion(){
    let emaillogin 
    let nuevaContraseña
   
    emaillogin = prompt(" Ingrese su email" )
   if( mail== emaillogin) {
       nuevaContraseña = prompt("Ingrese su contraseña")
    } else{
        alert("El email ingresado no coincide con el registrado") }
       if(contraseña == nuevaContraseña ){ 
       alert( "Se ha iniciado sesion correctamente") }
   else{
       alert( "La contraseña ingresada no coincide con la registrada") } }
 iniciodesesion()


function modificarcontraseña(nuevacontraseña){
let cambiarcontraseña = prompt(" ¿Desea cambiar su contraseña? (si/no)")

if (cambiarcontraseña == "si"){
    let emailconfirmacion = prompt("Por favor inguese su mail")
    if(emailconfirmacion == mail){
        nuevacontraseña = prompt("Ingrese su nueva contraseña")
        alert("Se modifico su contraseña, ahora es" + " " + nuevacontraseña)}
    else{
        alert( "El mail ingresado no coincide con el registrado")}
    
} else if (cambiarcontraseña == "no") {
     
     alert("No se han realizado cambios.")}
    else {
        alert("Por favor responda con 'si' o con 'no'")}}
modificarcontraseña()