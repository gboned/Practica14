/***************************/
/*                         */
/*     MODIFICAR IMAGEN    */
/*                         */
/***************************/

// Creo variable global vacía.
var imagenAgrandada;

// Creo función que cambie la medida de la imagen.
function cambiarMedidasImagen() {

    // Creo variable que guarde la imagen.
    var imagen = document.getElementById("imagen");
    
    // Añado listener que se ejecuta al hacer click en la imagen.
    imagen.addEventListener("click", function() {
        // Si la variable imagenAgrandada es true o existe, cambia a false y hace pequeña la imagen.
        if (imagenAgrandada) {
            imagenAgrandada = false;
            this.width = 400;
        } else {
            // Si es false, el tamaño aumenta al hacer click.
            this.width = 700;
            imagenAgrandada = true;
        }
    })

}
