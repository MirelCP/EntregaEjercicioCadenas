let nombre = "Mirel"; // - Una cadena de texto con tu Nombre
let apellido = "Pisica"; // - Otra cadena de texto con tu Apellido
let estudiante = `${nombre} ${apellido}`; // - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
estudiante.concat(nombre + " " + apellido); // - Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudianteMayus = estudiante.toUpperCase(); // - Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMinus = estudiante.toLowerCase();  // - Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let longitud = estudiante.length; // - Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let primeraLetra = nombre.charAt(0);// - Una variable que contenga la primera letra del Nombre
let ultimaLetra = apellido.charAt(apellido.length-1); //- Otra variable que contenga la última letra del Apellido
let eliminaEspacios = estudiante.trim(); //- Una cadena de texto que elimine los espacios de la variable "estudiante"
let incluyeVariable = estudiante.includes(nombre); // - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
