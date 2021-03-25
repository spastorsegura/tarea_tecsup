/* Desarrolle el siguiente algoritmo:
“El náufrago satisfecho” ofrece hamburguesas sencillas, dobles y triples,las cuales tienen un costo de $20.00, $25.00 y $28.00 respectivamente. La empresa acepta tarjetas de crédito con un cargo de 5 % sobre la compra.
Suponiendo que los clientes adquieren sólo un tipo de hamburguesa, realice un algoritmo para determinar cuánto debe pagar una persona por N hamburguesas.
 */
var TI= +prompt("marque las siguientes opciones 1-Hamb. sencilla, 2- Hamb. doble, 3-Hamb.triple");
var N= +prompt("Ingrese la cantidad");
var TP= +prompt("¿Va a pagar con tarjeta de crédito? 1-Si, 2-No");

 switch (TI){
    case 1:
        if(TP===2){
            console.log("La cantidad a pagar (Sin TC) es de: "+ (20*N));
        }
        else{
            console.log("La cantidad a pagar (TC) es de: "+ ((20*N)+(20*N)*0.05));
        }
        break;
    case 2:
        if(TP===2){
            console.log("La cantidad a pagar (Sin TC) es de: "+ (25*N));
        }
        else{
            console.log("La cantidad a pagar (TC) es de: "+ ((25*N)+(25*N)*0.05));
        }
        break;
    case 3:
        if(TP===2){
            console.log("La cantidad a pagar (Sin TC) es de: "+ (28*N));
        }
        else{
            console.log("La cantidad a pagar (TC) es de: "+ ((28*N)+(28*N)*0.05));
        }
        break;
    default:
    console.log("Error");
    break;
 }