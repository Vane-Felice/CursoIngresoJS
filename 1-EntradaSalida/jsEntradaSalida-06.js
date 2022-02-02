/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
 var numero1;
 var numero2;
 var suma;

 numero1 = txtIdNumeroUno.value;

 numero2 = txtIdNumeroDos.value;

 suma = parseInt(numero1) + parseInt(numero2);

 alert (suma);
 
}

