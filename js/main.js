//Array de objetos menuEjecutivo
const menuEjecutivo = [
    {id:1, tipo: "entrada" ,    plato: "Nachos" ,                           precio: 150},
    {id:2, tipo: "entrada" ,    plato: "Bruscheta" ,                        precio: 200},
    {id:3, tipo: "entrada" ,    plato: "Rabas al ajillo" ,                  precio: 160},
    {id:1, tipo: "principal" ,  plato: "Sorrentinos de Jamón y Queso" ,     precio: 350},
    {id:2, tipo: "principal" ,  plato: "Milanesa Napolitana c/guarnición" , precio: 500},
    {id:3, tipo: "principal" ,  plato: "Ñoquis Rellenos" ,                  precio: 250},
    {id:1, tipo: "bebida" ,     plato: "Agua" ,                             precio: 90},
    {id:2, tipo: "bebida" ,     plato: "Refresco" ,                         precio: 120},
    {id:3, tipo: "bebida" ,     plato: "Jugo de naranja" ,                  precio: 100},
    {id:1, tipo: "postre" ,     plato: "Helado de Vainilla" ,               precio: 120},
    {id:2, tipo: "postre" ,     plato: "Flan con dulce de leche" ,          precio: 150},
    {id:3, tipo: "postre" ,     plato: "Torta" ,                            precio: 150},
];

//Array de objetos menuInfantil
const menuInfantil = [
    {id:1, tipo: "hamburguesa" ,    plato: "Pollo" ,            precio: 120},
    {id:2, tipo: "hamburguesa" ,    plato: "Carne" ,            precio: 150},
    {id:1, tipo: "papas" ,          plato: "Grande" ,           precio: 150},
    {id:2, tipo: "papas" ,          plato: "Mediano" ,          precio: 100},
    {id:3, tipo: "papas" ,          plato: "Chico" ,            precio: 50},
    {id:1, tipo: "bebida" ,         plato: "Agua" ,             precio: 90},
    {id:2, tipo: "bebida" ,         plato: "Refresco" ,         precio: 120},
    {id:3, tipo: "bebida" ,         plato: "Jugo de naranja" ,  precio: 100},
];

//Variables globales
let totalejec = 0;
let totalinf = 0;
let total = 0;
let precarrito = 0;
let plato = 0;
//let compraTotal = 0;
const carrito = [];

// Funciones
function suma(num1, num2){
    return num1 + num2;
}
function filtrarPorPlato(arr, tipo, plato){
    return arr.filter((el)=>{
      return (el.tipo == tipo && el.plato == plato) 
    })
}
/*function sumaPrecios(arr){
    return arr.reduce((acc,prod) => {       //Intenté usar el metodo reduce pero no funciono
        return acc = acc + prod.precio
    },0);
}*/    

//Inicio del programa

alert("Bienvenido a Restaurante NachRei");
let menu = prompt("Elige el menú que deseas 1 - Menú Ejecutivo 2 - Menú Infantil 3 - Salir");
if (menu != 1 && menu != 2 && menu != 3){
    alert("El valor ingresado no es válido");
} else {
    while (menu == 1 || menu == 2){
        switch (menu) {

            //Menú Ejecutivo

            case "1": 
                //Entrada
                let entrada = prompt("Elige una entrada para tu menú 1 - Nachos $150 2 - Bruscheta $200 3 - Rabas al ajillo $160 4 - Ninguno");
                if(entrada == 1){
                    plato = "Nachos";
                    entrada = 150;
                    precarrito = filtrarPorPlato(menuEjecutivo, "entrada", plato);
                    carrito.push(precarrito);
                } else if (entrada == 2){
                    plato = "Bruscheta";
                    entrada = 200;
                    precarrito = filtrarPorPlato(menuEjecutivo, "entrada", plato);
                    carrito.push(precarrito);
                } else if (entrada == 3){
                    plato = "Rabas al ajillo";
                    entrada = 160;
                    precarrito = filtrarPorPlato(menuEjecutivo, "entrada", plato);
                    carrito.push(precarrito);
                } else {
                    entrada = 0;
                }
                totalejec = suma (totalejec,entrada); 

                //Plato principal
                let platoPrincipal = prompt("Elige un plato principal para tu menú 1 - Sorrentinos de Jamón y Queso $350 2 - Milanesa Napolitana c/guarnición $500 3 - Ñoquis Rellenos $250 4 - Ninguno");
                if(platoPrincipal == 1){
                    plato = "Sorrentinos de Jamón y Queso";
                    platoPrincipal = 350;
                    precarrito = filtrarPorPlato(menuEjecutivo, "principal", plato);
                    carrito.push(precarrito);
                } else if (platoPrincipal == 2){
                    plato = "Milanesa Napolitana c/guarnición";
                    platoPrincipal = 500;
                    precarrito = filtrarPorPlato(menuEjecutivo, "principal", plato);
                    carrito.push(precarrito);
                } else if (platoPrincipal == 3){
                    plato = "Ñoquis Rellenos";
                    platoPrincipal = 250;
                    precarrito = filtrarPorPlato(menuEjecutivo, "principal", plato);
                    carrito.push(precarrito);
                } else {
                    platoPrincipal = 0;
                }
                totalejec = suma (totalejec,platoPrincipal);

                //Bebida
                let bebida = prompt("Elige que bebida deseas 1 - Agua $90 2 - Refresco de 600ml $120 3 - Jugo de Naranja $100 4 - Ninguna");
                if(bebida == 1){
                    plato= "Agua";
                    bebida = 90;
                    precarrito = filtrarPorPlato(menuEjecutivo, "bebida", plato);
                    carrito.push(precarrito);
                } else if (bebida == 2){
                    plato= "Refresco";
                    bebida = 120;
                    precarrito = filtrarPorPlato(menuEjecutivo, "bebida", plato);
                    carrito.push(precarrito);
                } else if (bebida == 3){
                    plato= "Jugo de naranja";
                    bebida = 100;
                    precarrito = filtrarPorPlato(menuEjecutivo, "bebida", plato);
                    carrito.push(precarrito);
                } else {
                    bebida = 0;
                }
                totalejec = suma (totalejec,bebida);

                //Postre
                let postre = prompt("Por útimo elige que postre quieres 1 - Helado de Vainilla $120 2 - Flan con dulce de leche $150 3 - Torta  $150 4 - Ninguno");
                if(postre == 1){
                    plato= "Helado de Vainilla";
                    postre = 120;
                    precarrito = filtrarPorPlato(menuEjecutivo, "postre", plato);
                    carrito.push(precarrito);
                } else if (postre == 2){
                    plato= "Flan con dulce de leche";
                    postre = 150;
                    precarrito = filtrarPorPlato(menuEjecutivo, "postre", plato);
                    carrito.push(precarrito);
                } else if (postre == 3){
                    plato= "Torta";
                    postre = 150;
                    precarrito = filtrarPorPlato(menuEjecutivo, "postre", plato);
                    carrito.push(precarrito);
                } else {
                    postre = 0;
                }
                totalejec = suma (totalejec,postre);
                break;

            //Menu Infantil

            case "2":
                //Hamburguesa
                let burguer = prompt("Elige el tipo de hamburguesa para tu menú infantil 1 - Hamburguesa de Pollo $120 2 - Hamburguesa de Carne - $150 3 - Ninguna");
                if(burguer == 1){
                    plato = "Pollo";
                    burguer = 120;
                    precarrito = filtrarPorPlato(menuInfantil, "hamburguesa", plato);
                    carrito.push(precarrito);
                } else if (burguer == 2){
                    plato = "Carne";
                    burguer = 150;
                    precarrito = filtrarPorPlato(menuInfantil, "hamburguesa", plato);
                    carrito.push(precarrito);
                } else {
                    burguer = 0;
                }
                totalinf = suma (totalinf,burguer);

                //Papas
                let papas = prompt ("Elige el tamaño de las papas 1- Grande $150 2 - Mediano $100 3 - Chico $50 4 - Ninguna");
                if(papas == 1){
                    plato = "Grande";
                    papas = 150;
                    precarrito = filtrarPorPlato(menuInfantil, "papas", plato);
                    carrito.push(precarrito);
                } else if (papas == 2){
                    plato = "Mediano";
                    papas = 100;
                    precarrito = filtrarPorPlato(menuInfantil, "papas", plato);
                    carrito.push(precarrito);
                } else if (papas == 3){
                    plato = "Chico";
                    papas = 50;
                    precarrito = filtrarPorPlato(menuInfantil, "papas", plato);
                    carrito.push(precarrito);
                } else {
                    papas = 0;
                }
                totalinf = suma (totalinf,papas);

                //Consumisión
                let consumision = prompt ("Elige la bebida 1- Agua $90 2 - Refresco de 600ml $120 3 - Jugo de naranja $100 4 - Ninguna");
                if(consumision == 1){
                    plato = "Agua";
                    consumision = 90;
                    precarrito = filtrarPorPlato(menuInfantil, "bebida", plato);
                    carrito.push(precarrito);
                } else if (consumision == 2){
                    plato = "Refresco";
                    consumision = 120;
                    precarrito = filtrarPorPlato(menuInfantil, "bebida", plato);
                    carrito.push(precarrito);
                } else if (consumision == 3){
                    plato = "Jugo de naranja";
                    consumision = 100;
                    precarrito = filtrarPorPlato(menuInfantil, "bebida", plato);
                    carrito.push(precarrito);
                } else {
                    consumision = 0;
                }
                totalinf = suma (totalinf,consumision);
                break;
            default:
                break;
        }
        //Total acumulado entre menús
        total = totalejec + totalinf;

//Continuar agregando menús        
        menu = prompt("¿Quieres agregar otro menú? 1 - Menú Ejecutivo 2 - Menú Ifantil 3 - Salir 4 - Ver carrito");

//Muestra del carrito por consola        
        if (menu == 4) {
            console.log(carrito);
            console.log("El monto total a abonar es" + " $" + total);
            /*compraTotal = sumaPrecios(carrito)
            console.log(compraTotal);                                           //Intenté usar el método reduce pero no funcionó
            console.log("El monto total a abonar es" + " $" + compraTotal);*/
            
        }
    }
}