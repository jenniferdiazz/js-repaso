/*FETCH API 
The Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.
La fetch API nos permite acceder a recursos de un servidor de manera asíncrona (peticiones Ajax).
 Este tipo de peticiones nos permiten realizar solicitudes HTTP sin necesidad de recargar toda la página.
Para utilizar fetch API no es necesario usar ninguna librería. Funcionan haciendo uso del código nativo del navegador.
La API fetch utiliza promesas, es decir, devuelve un objeto con dos métodos, uno then() y otro catch() 
a los que pasaremos una función que será invocada cuando se obtenga la respuesta o se produzca un error.
*/

const apiKey = 'Za95yVFl7MYMasl7eN4XRDpn8psiIfj4';
//retorna una promesa
const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then( resp => resp.json() )
.then( data => {
    //console.log(data.data.images.original.url)
    const { url } = data.data.images.original;
    const img = document.createElement('img');
    img.src = url;
    
    document.body.append( img );

})
.catch( console.warn)

/* ASYNC - AWAIT 
La declaración de función async define una función asíncrona, 
la cual devuelve un objeto AsyncFunction
Cuando se llama a una función async, esta devuelve un elemento Promise. 
Cuando la función async devuelve un valor, Promise se resolverá con el valor devuelto. 
Si la función async genera una excepción o algún valor, Promise se rechazará con el valor generado.

Una función async puede contener una expresión await, la cual pausa la ejecución de la función asíncrona y espera la resolución de la Promise pasada 
y, a continuación, reanuda la ejecución de la función async y devuelve el valor resuelto.
*/
const getImagenPromesa = () => new Promise( resolve => resolve('http://prueba.com'));
getImagenPromesa().then( console.log);
//otra forma de hacerlo...
const getImagen = async() => {
    return 'http://prueba.com';
}
getImagen().then( console.log );

const getImagenApi = async() => {
    try{
    const apiKey = 'Za95yVFl7MYMasl7eN4XRDpn8psiIfj4';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    console.log('ASYNC AWAIT');
    
    const data = await resp.json();
    console.log( data );
    const { url } = data.data.images.original;
    console.log( url );
    }catch(error){
        //manejo de error
        console.error(error);
    }

}
getImagenApi();

/**OPERADOR TERNARIO */
const activo = false;
const mensaje = activo ? 'Activo' : 'Inactivo';
console.log(mensaje);
//sin else...
const mensaje2 = activo && 'Activo'; 
console.log(mensaje2);