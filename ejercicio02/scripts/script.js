function Sumar()
{
    var numero1;
    var numero2;
    var resultado;
    var txtresultado;

    numero1=parseInt(document.getElementById("numero1").value);
    numero2=parseInt(document.getElementById("numero2").value);
    txtresultado=document.getElementById("resultado");
    resultado=numero1+numero2;
    txtresultado.value=resultado;
}