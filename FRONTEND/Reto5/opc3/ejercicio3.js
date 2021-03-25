/* 
Desarrolle el siguiente algoritmo:
El consultorio del Dr. Lorenzo T. Mata Lozano tiene como política cobrar la consulta con base en el número de cita, de la siguiente forma:
• Las tres primeras citas a $200.00 c/u.
• Las siguientes dos citas a $150.00 c/u.
• Las tres siguientes citas a $100.00 c/u.
• Las restantes a $50.00 c/u, mientras dure el tratamiento.
Se requiere un algoritmo para determinar:
a) Cuánto pagará el paciente por la cita.
b) El monto de lo que ha pagado el paciente por el tratamiento.
Para la solución de este problema se requiere saber qué número de cita se efectuará, con el cual se podrá determinar el costo que tendrá la consulta y cuánto se ha gastado en el tratamiento. Con este análisis se puede determinar que las variables que se van a utilizar son las que se muestran en la tabla
 */

 var NC= +prompt("Ingrese el número de consulta");
 var CC;
 var TOT= +prompt("Ingrese costo de tratamiento");

 if(NC>=0 && NC<=3){
    CC=200;
 }
 else if(NC>3 && NC<=5){
    CC=150;
 }
 else if(NC>5 && NC<=8){
    CC=100;
 }
 else{
     CC=50;
 }

console.log("El número de citas es de "+NC);
console.log("El costo de tratamiento es de $"+TOT);

console.log("El precio de la cita es de $"+CC);
console.log("El pago total es de $"+(CC+TOT));