/* 
Desarrolle el siguiente algoritmo:
Un productor de leche lleva el registro de lo que produce en litros, pero cuando entrega le pagan en galones.

Realice un algoritmo, y represéntelo en JS, que ayude al productor a saber cuánto recibirá por la entrega de su producción de un día (1 galón = 3.785 litros). 
L -- cantidad de litros que produce
PG -- Precio del galón
TG -- Cantidad de galones que prodice
GA -- Ganancia por la entrega de leche
*/

var L= +prompt("Ingrese la cantidad de litros (L) que produjo");
var PG= +prompt("Precio del galón");
var TG=0;
var GA=0;

function enGalones(){
    TG= L*3.785;
    console.log("La cantidad en galones es de: "+TG);
}

function ganancia(){
    GA=TG*PG;
    console.log("La ganancia es de: "+GA);
}

enGalones();
ganancia();