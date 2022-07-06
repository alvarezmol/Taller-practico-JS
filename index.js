/* Cuadrado
Perímetro = Lado +Lado +Lado + Lado , es lo mismo decir que: Lado * 4
área = Lado * Lado, es lo mismo decir que: Lado Elevado al cuadrado 2
Triángulo
Perímetro = Lado + Lado + Lado;
área = (Base * Altura)/2
Círculo
diámetro = (radio * 2)
perímetro = diámetro * PI
área = ( radio ^ 2 ) * PI */

//Area cuadrado
let ladoCuadrado;
function perimetrocuadrado(ladoCuadrado){
    return ladoCuadrado*4;
}

function areacuadrado(ladoCuadrado){
    return ladoCuadrado*2;
}

function calcularperimetrocuadrado(){
    const input = document.getElementById("InputCuadrado1");
    const value = input.value;
    const perimetro = perimetrocuadrado (value);
    document.getElementById("perimetroCuadrado").innerHTML = ("El perimetro de tu cuadrado es: " + perimetro.toFixed(2));
 }

 function calcularareacuadrado(){
    const input = document.getElementById("InputCuadrado1");
    const value = input.value;
    const area = areacuadrado (value);
    document.getElementById("areaCuadrado").innerHTML = ("El area de tu cuadrado es: " + area.toFixed(2));
 }

 //Area triangulo
 let lado1t;
 let lado2t;
 let base;
 let altura;

 function perimetrotriangulo(lado1t, lado2t, base){
    return (parseInt(lado1t) + parseInt(lado2t) + parseInt(base));
}

function areatriangulo(base, altura){
    return (base*altura)/2;
}

function calcularperimetrotriangulo(){
    const inputl1 = document.getElementById("Inputlado1");
    const inputl2 = document.getElementById("Inputlado2");
    const inputb = document.getElementById("Inputbase");
    const lado1 = inputl1.value;
    const lado2 = inputl2.value;
    const base = inputb.value;
    const perimetrot = perimetrotriangulo (lado1, lado2, base);
    document.getElementById("perimetroTriangulo").innerHTML = ("El perimetro de tu triangulo es: " + perimetrot.toFixed(2));
 }

 function calcularareatriangulo(){
    const inputa = document.getElementById("Inputaltura");
    const inputb = document.getElementById("Inputbase");
    const altura = inputa.value;
    const base = inputb.value;
    const areat = areatriangulo (base, altura);
    document.getElementById("areaTriangulo").innerHTML = ("El area de tu triangulo es: " + areat.toFixed(2));
 }


 //Area circulo
 let radio;
 const PI = Math.PI;

 function perimetrocirculo(PI, radio){
    return ((2*PI)*radio);
}

function areacirculo(PI, radio){
    return (PI*(radio*radio));
}

function calcularperimetrocirculo(){
    const inputr = document.getElementById("Inputradio");

    const radio = inputr.value;
    
    const perimetroc = perimetrocirculo (PI, radio);
    document.getElementById("perimetroCirculo").innerHTML = ("El perimetro de tu circulo es: " + perimetroc.toFixed(2));
 }

 function calcularareacirculo(){
    const inputr = document.getElementById("Inputradio");

    const radio = inputr.value;

    const areac = areacirculo (PI, radio);
    document.getElementById("areaCirculo").innerHTML = ("El area de tu circulo es: " + areac.toFixed(2));
 }

  //Area triangulo isosceles
  let lado1ti;
  let lado2ti;
  let baseti;
  
 
  function alturatriangulo(lado1ti, baseti){
     return (Math.sqrt((lado1ti*lado1ti) - ((baseti * baseti)/4)));
  }

 function calcularalturatriangulo(){

     const inputil1 = document.getElementById("Inputlado1t");
     const inputil2 = document.getElementById("Inputlado2t");
     const inputbi = document.getElementById("Inputbaseti");
     const lado1 = inputil1.value;
     const lado2 = inputil2.value;
     const base = inputbi.value;
     if (lado1 === lado2){
        const altura = alturatriangulo (lado1, base);
        document.getElementById("alturaTriangulo").innerHTML = ("La altura de tu triangulo es: " + altura.toFixed(2));
     } else {
        alert("Esto no es un triangulo isosceles, porfavor intente de nuevo")
     }
   
  }
 
//Precio con dcto

let precio;
  let dcto;
  let cupon;

  function preciocondctocupon(precio, dcto, cupon){
    return (precio-(precio*((parseInt(dcto)+parseInt(cupon))/100)));
 }

 function preciosindctocupon(precio, dcto){
    return (precio-(precio*dcto)/100);
 }

 const cupondisponible = [
       {cupon: "sebas", dcto: 10},
       {cupon: "lida", dcto: 50},
 ];


 function calcularpreciocondescuento(){
    const inputprecio = document.getElementById("Inputprecio");
    const inputdescuento = document.getElementById("Inputdescuento");
    const inputcupon = document.getElementById("Inputcupon");
    const precio = inputprecio.value;
    const descuento = inputdescuento.value;
    const cupon = inputcupon.value;
    const fv = cupondisponible.some(function(x){
        return x.cupon === cupon;
        });
    if( fv === true ){
    const dctodelcupon = cupondisponible.find(function(y){
        return y.cupon === cupon;
        });
    const ahorasidcto = dctodelcupon.dcto; 

    
       const precioneto = preciocondctocupon (precio, descuento, ahorasidcto);
       document.getElementById("preciocondesuento").innerHTML = ("El precio con descuento es: " + precioneto.toFixed(2));
       document.getElementById("cuponvalido").innerHTML = ("El cupon fue efectuado exitosamente");
    } else {
       const precioneto1 = preciosindctocupon (precio, descuento);
       document.getElementById("preciocondesuento").innerHTML = ("El precio con descuento es: " + precioneto1.toFixed(2));
       document.getElementById("cuponvalido").innerHTML = ("Lo siento, el cupon no es valido");
    } 
   

 }


//Promedio



const sumatoria = list1.reduce(
   function(x=0, y){
      return x + y;
   });


 const numelem = list1.length;

 function promedio(sumatoria, numelem){
    return (sumatoria/numelem);
 }

 promedio(sumatoria, numelem);

 function calcularpromedio(){
    const inputarray = document.getElementById("Inputarray");
    
    const array = inputarray.value;
    
    const array1 = array.split(',');
    
    const sumatoria1 = array1.reduce(
        function(x=0, y){
           return parseInt(x) + parseInt(y);
        });
    const numelem1 = array1.length;

    const promedio1 = promedio (sumatoria1, numelem1);
    document.getElementById("promedio").innerHTML = ("El promedio de este rango es: " + promedio1.toFixed(2));

 }

 //Mediana

 function calcularmedia(){
    const inputarray = document.getElementById("Inputarray");
    const array = inputarray.value;
    const array1 = array.split(',');
    const num1 = array1.length;
    function espar(num1){
        if(num1%2 === 0){
            const num12 = (array1.length/2);
            const num13 = (array1.length/2)-1;
            const media = (parseInt(array1[num12]) + parseInt(array1[num13]))/2;
            return media;
        } else {
            const num = Math.round(array1.length/2)-1;
            const media = array1[num];
            return media;
        }
    }
    const esparahorasi = espar(num1);
  
    document.getElementById("media").innerHTML = ("La media de este rango es: " + esparahorasi);

 }

 //Moda

 function calcularmoda(){
   const inputarray = document.getElementById("Inputarray");
   const array = inputarray.value;
   const array1 = array.split(',');

   array1.sort(function(a,b){return a -b});
   const lista2 = [];
   var n = 1
   for(var i=0; i<array1.length; i++){
     if (array1[i-1] === array1[i]){
   
   
     var n = parseInt(n);
    var n = n+1;
     let lista3 = lista2.push(n);
     
     } else {
     var n = 1;
     let lista3 = lista2.push(n);
     
     }
     }
 
     var m = Math.max.apply(null, lista2);
     const x = lista2.indexOf(m);
     const moda = array1[x];
     document.getElementById("moda").innerHTML = ("La moda de este rango es: " + moda);


}

 //Promedio ponderado

 function calculapromedioponderado(){
   const califi1 = document.getElementById("Inputcalif1");
   const calif1 = califi1.value;
   const califi2 = document.getElementById("Inputcalif2");
   const calif2 = califi2.value;
   const califi3 = document.getElementById("Inputcalif3");
   const calif3 = califi3.value;
   const califi4 = document.getElementById("Inputcalif4");
   const calif4 = califi4.value;

const nota1 = document.getElementById("Inputnota1");
   const nota11 = nota1.value;
   const nota2 = document.getElementById("Inputnota2");
   const nota22 = nota2.value;
   const nota3 = document.getElementById("Inputnota3");
   const nota33 = nota3.value;
   const nota4 = document.getElementById("Inputnota4");
   const nota44 = nota4.value;  

   const notas1 = (calif1 + "," + calif2 + "," + calif3 + "," + calif4)
   const notas = notas1.split(",");
   const creditos1 = (nota11 + "," + nota22 + "," + nota33 + "," + nota44)
   const creditos = creditos1.split(",");
   var denomiador = []
   for(var i=0; i<creditos.length; i++){
   var array4 = denomiador.push((creditos[i]*notas[i]));
   }


   const sumade = denomiador.reduce(
      function(x=0,y){
          return x+y;
      });
    
   const numerador = creditos.reduce(
         function(x=0,y){
             return parseInt(x)+ parseInt(y);
         });
       
   const promponde = sumade / numerador;

      document.getElementById("prompond").innerHTML = ("El promedio ponderado es: " + promponde);
 }

