function Saludar(){
//    alert("Hola mundo");
//    console.log("Hola mundo");

//    document.write("hola mundo<br>");
//    document.write("hola mundo");

//    var nombre;
    var numero;
    var numero2;
    var suma;

//    nombre=prompt("Ingrese nombre");//si no lo iniializo como aca  nombre muestra undefined
    numero=prompt("Ingrese un numero");
    numero=parseInt(numero);
    numero2=prompt("Ingrese otro numero");
    numero2=parseInt(numero2);

    suma=numero+numero2;

    alert("Su nombre es "+suma);//si no ingreso nada muestra null
}