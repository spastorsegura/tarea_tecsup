
var formulario=document.getElementById("registro");
var inputTexto=document.getElementById("task");
var arreglo=[];

formulario.addEventListener("submit",function(e){
    e.preventDefault();

    var objTask={
        task:inputTexto
    }

    var objATexto=JSON.stringify(objTask)
    console.log(objATexto)
})
