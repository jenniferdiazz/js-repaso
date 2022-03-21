/*Importar archivos heroes */
import {heroes} from './data/heroes';
//import heroes, {owners} from './data/heroes';

/*funciones*/


const apellido = 'herrera';
function getSaludo(nombre){
    return 'Hola ' + apellido;

}

console.log(`Este es un texto: ${getSaludo(apellido)}`);


/*clonacion de objeto*/
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45, 
    direccion: {
        ciudad: 'New York',
        zip: 2233222
    }
}
console.table( persona );

const persona2 = { ...persona}

/*ARREGLOS */
const arreglo = [1,2,3,4];

/*clonando arreglo*/
let arreglo2 = [ ... arreglo, 5];

/* El método map() crea un nuevo array con los resultados de la llamada a la función
 indicada aplicados a cada uno de sus elementos.*/
const arreglo3 = arreglo2.map( function(numero){
    return numero * 2;
})
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);

/*Funciones */
const saludar = function(nombre) {
    return `Hola ${ nombre}`;
}

/*Funciones flecha*/
const saludar2 = (nombre) => {
    return `Hola ${ nombre}`;
}

/*Funciones simplificada*/
const saludar3 = (nombre) => `Hola ${ nombre}`;

/*Funciones simplificada sin parametro*/
const saludar4 = () => `Hola Mundo`;

/*Funciones simplificada de un objeto sin parametro*/
const getUser = () => ({
    uid: 'ABC123',
    username: 'elpepito'
});

console.log( getUser() )


const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC123',
    username: nombre
});

console.log( getUsuarioActivo('fernando') )

/*Desestructuracion, asignacion desestructurante */
const personaDes = {
    nombre : 'Tony',
    edad : 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

const { edad, clave, nombre } = personaDes;
console.log(`${nombre} ${clave} ${edad}`);

const retornaPersona = ({ nombre, edad, rango, clave})=>{
    //console.log(`Soy retornaPersona : ${nombre} ${rango} ${edad} `)
     return{
         nombreClave : clave,
         anios:edad,
         latlng:{
             lat : 14.443,
             lng : -12.323
         }
     }
}
const avenger = retornaPersona( personaDes );
console.log(avenger);

/*Desestructuracion de retornaPersona*/
const { nombreClave, anios, latlng:{lat, lng}} = retornaPersona( personaDes );
console.log(lat, lng);

/*Desestructuracion de arreglos*/
const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [ , , p3 ] = personajes;
console.log( p3 ); //Trunks

const retornaArreglo = () =>{
    return ['ABC', 123];
};
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const States = ( valor ) => {
    //retona valor y una funcion
    return [valor, ()=>{ console.log('Hola mmundo') } ];
}
const arr = States( 'Goku' );
console.log(arr);
arr[1]() //hola mmundo

const [nombreState, setnombre] = States('Jennifer');
console.log("imprimiendo states")
console.log(nombreState);
setnombre(); //hola mmundo


/*Usando import heroes 
El método find() devuelve el valor del primer elemento del array que cumple
 la función de prueba proporcionada.
*/

const getHeroeByid = (id) => {
    return heroes.find( heroe => heroe.id == id );
}
console.log(getHeroeByid(2));

/* El método filter() crea un nuevo array con todos 
los elementos que cumplan la condición implementada por la función dada. */
const getHeroeByOwner = ( owner ) => {
    return heroes.filter( heroe => heroe.owner == owner );
}

console.log(getHeroeByOwner('DC'));


/**Promesas 
 * El objeto Promise (Promesa) es usado para computaciones asíncronas. 
 * Una promesa representa un valor que puede estar disponible ahora, 
 * en el futuro, o nunca.
*/
const promesa = new Promise( (resolve, reject) =>{
    setTimeout( ()=> {
        const heroe = getHeroeByid(2);
        //console.log(heroe)
        resolve(heroe);
        //reject ('no se pudo encontrar el heroe')
    },3000)
}); 
promesa.then( (heroe)=>{
    console.log('PROMESAA! Then de la promesa', heroe)
})
.catch( err => console.warn( err ));

/*Promesa de manera mas estandar... */
const getHeroeByidAsync = (id) =>{
    return new Promise( (resolve, reject) =>{
        setTimeout( ()=> {
            const p1 = getHeroeByid( id );
            
            if( p1 ){
                resolve(p1);
            }else{
           
            reject ('no se pudo encontrar el heroe');
            }
        },3000)
    }); 
}
getHeroeByidAsync(1)
.then( console.log )
.catch(  console.warn );
