

let nombreproducto= "paquetes de galletitas" 
let preciounitario= 1000

 
cantidaddeseada = prompt("Ingrese la cantidad de " + nombreproducto + " " +  "que desea comprar")
costototal = preciounitario * cantidaddeseada


let descuento;
if( cantidaddeseada >= 5){
    descuento= costototal * 0.1;
    costototalcondescuento = costototal - descuento
    alert("El costo total de la  compra  con descuento es " + costototalcondescuento )
}
else{
    descuento = 0;
    alert("El costo total de la  compra es " + costototal)
}





