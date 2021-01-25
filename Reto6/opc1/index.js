/* Con HTML, CSS y JS, crea un pequeño Input y un botón, donde al hacer click en el botón guarde el valor del input en un arreglo, no es necesario mostrar el texto guardado en el navegador.
Tips: usar .push(), .value , addEventListener()
 */


var formulario=document.getElementById("registro");
var inputTexto=document.getElementById("task");
var btnSubmit=document.getElementById("btn");
var arreglo=[];

formulario.addEventListener("submit",function(e){
    e.preventDefault();

    var objTask={
        task:inputTexto
    }

    var objATexto=JSON.stringify(objTask)
    console.log(objATexto)
})
