


var eleccion = console.log(prompt);
function show() {
    //  alert("Producto Agregado");
     var dato;
     dato = prompt("Sin tomate, lechuga o salsa? Escribelo aquí");
    var eleccion;
    eleccion = 20;
    alert("Instrucciones para cocina" + " "+":" + dato + " " );
// document.getElementById ("popup")
// .style.display = "block";

document.getElementById('contenido').setAttribute('style', 'background: lightgray; color: black; border:1px solid red');
 document.getElementById('botons').setAttribute('style', 'background: red; color: white;');


var eliminar = document.querySelector('button');
eliminar.innerHTML = "Eliminar producto";
eliminar.style.fontFamily= "verdana";
// eliminar.style.fontSize= "10px";
eliminar.style.borderRadius= "20px";
// eliminar.style.margin = "0px auto";
}
