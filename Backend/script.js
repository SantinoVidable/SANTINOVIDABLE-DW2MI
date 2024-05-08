


let nombre
let mail
let contraseña


function registrarse(){
 nombre = prompt(" ¿Como te llamas?")
 mail = prompt("Decime tu email")
 contraseña = prompt ("Decime tu contraseña")
alert ("Se ha registrado tu usuario" + " " +  nombre)
}

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

function modificarcontraseña(nuevacontraseña){
    contraseña = nuevacontraseña
    alert(" se modificó tu contraseña, ahora es " + contraseña)     
}

modificarcontraseña("santino567")

