/* Crea una aplicación que te permita manejar tareas, las tareas completadas deben tacharse.
Las tareas se guardarán en un arreglo.
Un ejemplo que puede ayudar, aunque hay diferentes aproximaciones y maneras que puede hacerse esto:
https://www.youtube.com/watch?v=kRbAuj_CgnI
 */

 var inputTexto=document.getElementById("todo");
 var formulario=document.getElementById("registro");
 var btnSubmit=document.getElementById("btn");
 var divtodo=document.getElementById("list");
 var arreglo=[];
 var tareas="";
 var i=0;


 formulario.addEventListener("submit",function(e){
     e.preventDefault();

    arreglo.push(inputTexto.value);
    console.log(arreglo);
    agregar();
 })

 function agregar(){
    tareas=tareas+
    `<li>${arreglo[i]}</li>`

    divtodo.innerHTML=tareas
    i++;
}

/* ∫ */


