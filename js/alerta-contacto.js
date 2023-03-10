
function alerta(){

    var nombre = document.getElementById("nombre-contacto").value;
    var apellido = document.getElementById("apellido-contacto").value;
    var correo = document.getElementById("correo-contacto").value;
    var region = document.getElementById("region-contacto").value;
    var comuna = document.getElementById("comuna-contacto").value;
    var areaTexto = document.getElementById("area-texto").value;
    var arregloEntradas = [];
    
    if(nombre == ""){
        arregloEntradas.push("Nombre")
    }
    if(apellido == ""){
        arregloEntradas.push("Apellido")
    }
    if(correo == "" || !correo.includes("@")){
        arregloEntradas.push("Correo")
    }
    if(region == ""){
        arregloEntradas.push("Region")
    }
    if(comuna == "-" || comuna == "Comuna"){
        arregloEntradas.push("Comuna")
        document.getElementById('comuna-contacto').value = "";
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
        document.getElementById("formulario").addEventListener("click", function(event){
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
              }
        });
    }else{
        $('#confirmacion-envio').show();
    }
}

function ocultarConfirmacion(){
    $('#confirmacion-envio').hide();
}

function ocultarDiv(){
    $('#prueba-alerta').hide();
    
    arregloEntradas = [];
    lista = "";
    contenido = "";
    lineaNueva = "";
    document.getElementById("lista-alerta").innerHTML = ""
}


function desplegarComuna(){
 
    document.getElementById("comuna-contacto").innerHTML = "";
    let region = document.getElementById("region-contacto").value;
    let listaComunas = document.getElementById("comuna-contacto");

    switch(region){
        case "arica": 
            let comunas1 = ["-","Arica", "Camarones", "Putre", "General Lagos"];
            comunas1.sort();
            comunas1.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            document.getElementById('comuna-contacto').setAttribute('value', "")
            
            break;
        
        case "tarapaca":
            let comunas2 = ["-","Iquique", "Alto Hospicio", "Pozo Almonte", "Cami??a", "Colchane", "Huara", "Pica"];
            comunas2.sort();
            comunas2.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;

        case "antofagasta":
            let comunas3 = ["-","Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollag??e", "San Pedro de Atacama", "Tocopilla", "Mar??a Elena"]
            comunas3.sort();
            comunas3.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
        
        case "atacama":
            let comunas4 = ["-","Copiap??", "Caldera", "Tierra Amarilla", "Cha??aral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
            comunas4.sort();
            comunas4.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
        
        case "coquimbo":
            let comunas5 = ["-","La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicu??a", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbal??", "Monte Patria", "Punitaqui", "R??o Hurtado"]
            comunas5.sort();
            comunas5.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
        
        case "valparaiso":
            let comunas6 = ["-","Valpara??so", "Casablanca", "Conc??n", "Juan Fern??ndez", "Puchuncav??", "Quintero", "Vi??a del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa Mar??a", "Quilpu??", "Limache", "Olmu??", "Villa Alemana"]
            comunas6.sort();
            comunas6.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
        
        case "o???Higgins":
            let comunas7 = ["-","Rancagua", "Codegua", "Coinco", "Coltauco", "Do??ihue", "Graneros", "Las Cabras", "Machal??", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requ??noa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Ch??pica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
            comunas7.sort();
            comunas7.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
        
        case "maule":
            let comunas8 = ["-","Talca", "Constituci??n", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "R??o Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curic??", "Huala????", "Licant??n", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuqu??n", "Linares", "Colb??n", "Longav??", "Parral", "ReVro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
            comunas8.sort();
            comunas8.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;

        case "biobio":
            let comunas9 = ["-","Concepci??n", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tom??", "Hualp??n", "Lebu", "Arauco", "Ca??ete", "Contulmo", "Curanilahue", "Los ??lamos", "Tir??a", "Los ??ngeles", "Antuco", "Cabrero", "Laja", "Mulch??n", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa B??rbara", "Tucapel", "Yumbel", "Alto Biob??o", "Chill??n", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chill??n Viejo", "El Carmen", "Ninhue", "??iqu??n", "Pemuco", "Pinto", "Portezuelo", "Quill??n", "Quirihue", "R??nquil", "San Carlos", "San Fabi??n", "San Ignacio", "San Nicol??s", "Treguaco", "Yungay"]
            comunas9.sort();
            comunas9.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;

        case "araucania":
            let comunas10 = ["-","Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufqu??n", "Puc??n", "Saavedra", "Teodoro Schmidt", "Tolt??n", "Vilc??n", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacaut??n", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Pur??n", "Renaico", "Traigu??n", "Victoria", ]
            comunas10.sort();
            comunas10.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;

        case "rios":
            let comunas11 = ["-","Valdivia", "Corral", "Lanco", "Los Lagos", "M??fil", "Mariquina", "Paillaco", "Panguipulli", "La Uni??n", "Futrono", "Lago Ranco", "R??o Bueno"]
            comunas11.sort();
            comunas11.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
        case "lagos":
            let comunas12 = ["-","Puerto Montt", "Calbuco", "Cocham??", "Fresia", "FruVllar", "Los Muermos", "Llanquihue", "Maull??n", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de V??lez", "Dalcahue", "Puqueld??n", "Queil??n", "Quell??n", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "R??o Negro", "San Juan de la Costa", "San Pablo", "Chait??n", "Futaleuf??", "Hualaihu??", "Palena"]
            comunas12.sort();
            comunas12.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
        case "aisen":
            let comunas13 = ["-","Coihaique", "Lago Verde", "Ais??n", "Cisnes", "Guaitecas", "Cochrane", "O???Higgins", "Tortel", "Chile Chico", "R??o Ib????ez"]
            comunas13.sort();
            comunas13.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
        case "magallanes":
            let comunas14 = ["-","Punta Arenas", "Laguna Blanca", "R??o Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Ant??rtica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
            comunas14.sort();
            comunas14.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
        case "metropolitana":
            let comunas15 = ["-","Cerrillos", "Cerro Navia", "Conchal??", "El Bosque", "Estaci??n Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maip??", "??u??oa", "Pedro Aguirre Cerda", "Pe??alol??n", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaqu??n", "San Miguel", "San Ram??n", "Vitacura", "Puente Alto", "Pirque", "San Jos?? de Maipo", "Colina", "Lampa", "TilVl", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhu??", "Curacav??", "Mar??a Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Pe??aflor"]
            comunas15.sort();
            comunas15.forEach(element => {
                let opcionNueva= document.createElement("option");
                let contenido = document.createTextNode(element)
                listaComunas.appendChild(opcionNueva);
                opcionNueva.appendChild(contenido);
            });
            break;
    }
}

