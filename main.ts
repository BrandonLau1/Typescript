//tipado
const rectangulo = { altura: 10, anchura: 15};
const area = rectangulo.altura * rectangulo.anchura;
console.log (area);

//function
function saludar(nombre){
    return "Hola , " + nombre;

}

console.log(saludar("Geovanny"));

//let
let esVerdadero = true;
console.log(esVerdadero);

//numbers
let decimal: number = 18;
let hexa: number = 0x000040;
let octa: number = 0o20;
let bin: number = 0b0111;

console.log("Numero decimal: " + decimal);
console.log("Numero hexadecimal: " + hexa);
console.log("Numero octal: " + octa);
console.log("Numero binario: " + bin);

//strings
let nombre: string = "Brandon";
let apellido: string = "Lau";
let impresion: string = `
Nombre: ${nombre}
Apellido: ${apellido}
`;

console.log(impresion);

//arreglos
let listaDeNumeros : number[] = [1,2,3];
console.log(listaDeNumeros);

let listaDeNumeros2 : Array<number> = [1,2,3];
console.log(listaDeNumeros2);

//tuples
let futbolista: [string, number];
futbolista = ['Raul Jimenez', 28];
console.log(`El nombre es ${futbolista[0]}`);
console.log(`Su edad es ${futbolista[1]}`);

//enums
enum MarcasDeAutos {
    Toyota = 100,
    Chevrolet,
    Ford
}

let tacoma: MarcasDeAutos = MarcasDeAutos.Toyota;

console.log(tacoma);
console.log(MarcasDeAutos[0]);

//Any
let variablesSinTipo: any = 'Hola Profe';
variablesSinTipo = 100;

console.log(variablesSinTipo);

//unknown
let valorDesconocido: unknown = 4;
valorDesconocido = true;

console.log(valorDesconocido);

//void
function saludar2(): void{
    console.log("Hola Mundo... cruel");
}

saludar2();

//null y undefined
let variableSinDefinir: undefined = undefined;
let variableNula: null = null;

//never
//esta funcion no tiene un punto final ya que dispara una excepcion
function error(mensaje: string): never{
    throw new Error(mensaje);
}
//esta funcuon no tiene un punto final ya que dispara un error
function fallo(): never{
    return error("Reportar fallo");
}

//esta funcion no finaliza ya que posee un loop infinito
function loopInfinito(): never{
    while(true){}
}

//tipos objects
declare function crear(o:object):void; 

crear({prop: 0})
crear(null);
crear(undefined);
crear([]);

//unions
function imprimirID(id:number | string) {
    if (typeof id === "string"){
        console.log(`El id es ${(id as string).toUpperCase()}`);
    }else{
        console.log(`El id es ${(id as number).toFixed(2)}`);
    }
}

imprimirID(100.234234423);
imprimirID('este_es_mi_id');

//type asertions
let algunValor: unknown = "esto es un string";
let longitudDelString:number = (algunValor as string).length;
let longitudDelString2:number = (<string>algunValor).length;

//functions
function saludar3(nombre:string) {
    console.log(`Hola ${nombre}`);
}

saludar3("Orlando");

function elevarAlCuadrado(base:number): number {
    return base * base;
}

let numeroBase = 10;
let numeroAlCuadrado = elevarAlCuadrado(numeroBase);
console.log(numeroAlCuadrado);

//funciones anonimas
const nombres = ["Juan", "Pedro", "Luis"];

nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});

nombres.forEach((s) => {
    console.log(s.toUpperCase());
});

//aliases
type Punto = {
    x: number;
    y: number;
}

function imprimirCoordenada(punto: Punto){
    console.log(`La coordenada x es : ${punto.x}`);
    console.log(`La coordenada x es : ${punto.y}`);
}

imprimirCoordenada({ x:10, y:25 });

//tipos interfaces
interface Etiqueta {
    label:string;
}

function imprimirEtiqueta(etiqueta: Etiqueta){
    console.log(etiqueta.label);
}

let miEtiqueta = {numero:10, label: "Esta es mi etiqueta"};
imprimirEtiqueta(miEtiqueta);

    //propiedades opcionales
interface Cuadrado {
    color?:string;
    ancho: number;
}

function crearCuadrado( cuadrado: Cuadrado): {area: number}{
    const area = cuadrado.ancho * cuadrado.ancho;
    return { area: area}
}

crearCuadrado({ ancho: 10});

    //propiedades de solo lectura
interface Punto2{
    readonly x:number;
    readonly y:number;
}

let punto1: Punto = {x:10, y: 20};
punto1.x =20;
