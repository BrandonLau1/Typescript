//tipado
var rectangulo = { altura: 10, anchura: 15 };
var area = rectangulo.altura * rectangulo.anchura;
console.log(area);
//function
function saludar(nombre) {
    return "Hola , " + nombre;
}
console.log(saludar("Geovanny"));
//let
var esVerdadero = true;
console.log(esVerdadero);
//numbers
var decimal = 18;
var hexa = 0x000040;
var octa = 16;
var bin = 7;
console.log("Numero decimal: " + decimal);
console.log("Numero hexadecimal: " + hexa);
console.log("Numero octal: " + octa);
console.log("Numero binario: " + bin);
//strings
var nombre = "Brandon";
var apellido = "Lau";
var impresion = "\nNombre: " + nombre + "\nApellido: " + apellido + "\n";
console.log(impresion);
//arreglos
var listaDeNumeros = [1, 2, 3];
console.log(listaDeNumeros);
var listaDeNumeros2 = [1, 2, 3];
console.log(listaDeNumeros2);
//tuples
var futbolista;
futbolista = ['Raul Jimenez', 28];
console.log("El nombre es " + futbolista[0]);
console.log("Su edad es " + futbolista[1]);
//enums
var MarcasDeAutos;
(function (MarcasDeAutos) {
    MarcasDeAutos[MarcasDeAutos["Toyota"] = 100] = "Toyota";
    MarcasDeAutos[MarcasDeAutos["Chevrolet"] = 101] = "Chevrolet";
    MarcasDeAutos[MarcasDeAutos["Ford"] = 102] = "Ford";
})(MarcasDeAutos || (MarcasDeAutos = {}));
var tacoma = MarcasDeAutos.Toyota;
console.log(tacoma);
console.log(MarcasDeAutos[0]);
//Any
var variablesSinTipo = 'Hola Profe';
variablesSinTipo = 100;
console.log(variablesSinTipo);
//unknown
var valorDesconocido = 4;
valorDesconocido = true;
console.log(valorDesconocido);
//void
function saludar2() {
    console.log("Hola Mundo... cruel");
}
saludar2();
//null y undefined
var variableSinDefinir = undefined;
var variableNula = null;
//never
//esta funcion no tiene un punto final ya que dispara una excepcion
function error(mensaje) {
    throw new Error(mensaje);
}
//esta funcuon no tiene un punto final ya que dispara un error
function fallo() {
    return error("Reportar fallo");
}
//esta funcion no finaliza ya que posee un loop infinito
function loopInfinito() {
    while (true) { }
}
crear({ prop: 0 });
crear(null);
crear(undefined);
crear([]);
//unions
function imprimirID(id) {
    if (typeof id === "string") {
        console.log("El id es " + id.toUpperCase());
    }
    else {
        console.log("El id es " + id.toFixed(2));
    }
}
imprimirID(100.234234423);
imprimirID('este_es_mi_id');
//type asertions
var algunValor = "esto es un string";
var longitudDelString = algunValor.length;
var longitudDelString2 = algunValor.length;
//functions
function saludar3(nombre) {
    console.log("Hola " + nombre);
}
saludar3("Orlando");
function elevarAlCuadrado(base) {
    return base * base;
}
var numeroBase = 10;
var numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);
//funciones anonimas
var nombres = ["Juan", "Pedro", "Luis"];
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});
function imprimirCoordenada(punto) {
    console.log("La coordenada x es : " + punto.x);
    console.log("La coordenada x es : " + punto.y);
}
imprimirCoordenada({ x: 10, y: 25 });
function imprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: "Esta es mi etiqueta" };
imprimirEtiqueta(miEtiqueta);
function crearCuadrado(cuadrado) {
    var area = cuadrado.ancho * cuadrado.ancho;
    return { area: area };
}
crearCuadrado({ ancho: 10 });
var punto1 = { x: 10, y: 20 };
punto1.x = 20;
