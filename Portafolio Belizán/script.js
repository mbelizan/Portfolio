function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado"

    var x = document.getElementById("nav");
    x.className = "";
}

function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }
    else{
        x.className = "";
    }
}

window.onscroll = function() {
    efectoHabilidades()
};

function efectoHabilidades() {
    var skills = document.getElementById('skills');
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >=300){
        document.getElementById('python').classList.add("barra-progreso1");
        document.getElementById('html').classList.add("barra-progreso2");
        document.getElementById('js').classList.add("barra-progreso3");
        document.getElementById('php').classList.add("barra-progreso4");
        document.getElementById('mysql').classList.add("barra-progreso5");
    }
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}