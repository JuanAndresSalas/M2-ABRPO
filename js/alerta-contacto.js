
function alertaCustom(){
    var nombre = document.getElementById("nombre-contacto").value;
    var apellido = document.getElementById("apellido-contacto").value;
    var correo = document.getElementById("correo-contacto").value;
    var ciudad = document.getElementById("ciudad-contacto").value;
    var areaTexto = document.getElementById("area-texto").value;
    var arregloEntradas = [];
    
    

    if(nombre == ""){
        arregloEntradas.push("Nombre")
    }
    if(apellido == ""){
        arregloEntradas.push("Apellido")
    }
    if(correo == ""){
        arregloEntradas.push("Correo")
    }
    if(ciudad == ""){
        arregloEntradas.push("Ciudad")
    }
    if(areaTexto == ""){
        arregloEntradas.push("Mensaje")
    }

    if(arregloEntradas.length > 0){
        $('#prueba-alerta').show();
        var lista=document.getElementById("lista-alerta");
        arregloEntradas.forEach(function(campo) {
            var lineaNueva= document.createElement("li");
            var contenido = document.createTextNode(campo)
            lista.appendChild(lineaNueva);
            lineaNueva.appendChild(contenido);
        })
        }
    }



function ocultarDiv(){
    $('#prueba-alerta').hide();
    arregloEntradas = [];
    lista = "";
    contenido = "";
    lineaNueva = "";
    document.getElementById("lista-alerta").innerHTML = ""
}