let basedeDatos = [];

function registrarse(){
    let nombre = prompt("¿Cómo se llama?");
    let mail = prompt("Ingrese su email");
    let contraseña = prompt("Ingrese su contraseña");

    let usuarioExistente = basedeDatos.find(usuario => usuario.email === mail);
    
    if (usuarioExistente) {
        alert("El email ya está registrado.");
        alert("Falla al registrarse.");
    } else {
        let nuevoUsuario = {
            usuario: nombre,
            email: mail,
            contraseña: contraseña
        };
        basedeDatos.push(nuevoUsuario);
        alert("Se ha registrado su usuario " + nombre);
        alert("Registro exitoso. ");
    }
}



function iniciodesesion(){
    let emaillogin = prompt("Ingrese su email");
    let usuarioEncontrado = basedeDatos.find(usuario => usuario.email === emaillogin);
    
    if (usuarioEncontrado) {
        let Contraseña = prompt("Ingrese su contraseña");
        if (usuarioEncontrado.contraseña === Contraseña) {
            alert("Se ha iniciado sesión correctamente");
        } else {
            alert("La contraseña ingresada no coincide con la registrada");
        }
    } else {
        alert("El email ingresado no está registrado.");
    }
}

function modificarContraseña() {
    let emaillogin = prompt("Ingrese su email");
    let usuarioEncontrado = basedeDatos.find(usuario => usuario.email === emaillogin);
    
    if (usuarioEncontrado) {
        let contraseñaActual = prompt("Ingrese su contraseña actual");
        if (usuarioEncontrado.contraseña === contraseñaActual) {
            let nuevaContraseña = prompt("Ingrese su nueva contraseña");
            usuarioEncontrado.contraseña = nuevaContraseña;
            alert("La contraseña se ha modificado correctamente");
        } else {
            alert("La contraseña actual no coincide con la registrada");
        }
    } else {
        alert("El email ingresado no está registrado.");
    }
}


document.getElementById("registrarse").addEventListener("click", registrarse);
document.getElementById("iniciodesesion").addEventListener("click", iniciodesesion);
document.getElementById("modificarContraseña").addEventListener("click", modificarContraseña);









