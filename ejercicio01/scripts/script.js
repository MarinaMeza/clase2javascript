function Saludar(){
//    alert("Hola mundo");
//    console.log("Hola mundo");

//    document.write("hola mundo<br>");
//    document.write("hola mundo");

//    var nombre;
/*    var numero;
    var numero2;
    var suma;
*/
/*    isNaN
//    nombre=prompt("Ingrese nombre");//si no lo iniializo como aca  nombre muestra undefined
    numero=prompt("Ingrese un numero");
    numero=parseInt(numero);
    numero2=parseInt(prompt("Ingrese otro numero"));
    
    suma=numero+numero2;

    alert("Su nombre es "+suma);//si no ingreso nada muestra null*/
/*
    suma=confirm("tal cosa");

    if(true)
    {
        alert("Si tal cosa");
    }else
    {
        alert("no tal cosa");
    }
*/
    var nombre;
    var txtnombre;
    var txtsaludo;

//    nombre=document.getElementById("nombre").value;//si no se ingresó nada no muestra nada. el .value rtrae lo ingresado en la caja
    txtnombre=document.getElementById("nombre");//trae la referencia a la caja. su dir de memoria
    txtsaludo=document.getElementById("saludo");    
    nombre=txtnombre.value;
//    alert("Su nombre es "+nombre);
    txtsaludo.value="Hola "+nombre;//lo pone en la caja en vez de mostrarlo por alert
}