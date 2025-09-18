generarSaludo=function(){
    let nombre;
    let apellido;
    let resultado;
    
    nombre=recuperarTexto("Nombre");
    apellido=recuperarTexto("Apellido");
    resultado=mostrarTexto("lblResultado","Hola "+nombre+" "+apellido+" bienvenido al Reto Grupal");
      
   
    
    
}
    

recuperarTexto=function(idComponente){
    let componente;
    let valorIngresado;
    componente=document.getElementById(idComponente);
    valorIngresado=componente.value;
    return valorIngresado;
}
mostrarTextoEnCaja=function(idComponente,mensaje){
    let componente=document.getElementById(idComponente);
    componente.value=mensaje;
}
mostrarTexto=function(idComponente,mensaje){
    let componente=document.getElementById(idComponente);
    componente.innerText=mensaje;       

}

    

