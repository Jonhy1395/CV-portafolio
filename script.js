let menuVisible = false;

//funcion ocultar menu
function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //ocultar el menu al seleccionar una opcion
    document.getElementById("nav").classList="";
    menuVisible = false; 
}