/*
Actividad: Métodos de arreglos - Mutabilidad e Inmutabilidad
Nombre: Cristian Zapata Franco
*/




//PREGUNTA 1
/*Mutabilidad: Es la capacidad de un objeto para ser modificado después de su creación.
Tres métodos de arreglos mutables son:
1. push(): Agrega uno o más elementos al final de un arreglo.
2. pop(): Elimina el último elemento de un arreglo.
3. splice(): Cambia el contenido de un arreglo eliminando, reemplazando o agregando elementos. 

Inmutabilidad: Es la propiedad de un objeto que no puede ser modificado después de su creación.
Tres métodos de arreglos inmutables son:
1. map(): Crea un nuevo arreglo con los resultados de la llamada a una función para cada elemento del arreglo original.
2. filter(): Crea un nuevo arreglo con todos los elementos que cumplan una condición especificada.
3. slice(): Devuelve una copia superficial de una porción del arreglo dentro de un nuevo arreglo. */

//PREGUNTA 2

//Programación Imperativa explicacion:
/*La programación imperativa es un paradigma de programación que se centra en describir cómo se debe realizar una tarea mediante una serie de instrucciones que cambian el estado del programa. En este enfoque, el programador especifica paso a paso las operaciones que deben llevarse a cabo para lograr un resultado deseado. Se enfoca en el "cómo" hacer las cosas, utilizando estructuras de control como bucles y condicionales para manipular datos y estados. */

//Ejemplo de programación imperativa:
let numeros = [1, 2, 3, 4, 5];
let cuadrados = [];

//Programación Declarativa explicacion:
/*La programación declarativa es un paradigma de programación que se centra en describir qué se quiere lograr sin especificar cómo hacerlo. En este enfoque, el programador define el resultado deseado y las relaciones entre los datos, dejando que el sistema o lenguaje de programación determine la mejor manera de alcanzar ese resultado. Se enfoca en el "qué" hacer, utilizando expresiones y declaraciones para describir la lógica del programa sin detallar los pasos específicos. */


//PREGUNTA 3


/*Las funciones de flecha (arrow functions) son una forma concisa de escribir funciones en JavaScript. 
Por que son preferidas al usar métodos de arreglos:
1. Sintaxis Concisa: Las funciones de flecha tienen una sintaxis más corta y limpia, lo que las hace ideales para funciones cortas y anónimas que se utilizan como callbacks en métodos de arreglos.
2. No Binding de 'this': Las funciones de flecha no tienen su propio contexto 'this', lo que significa que heredan el valor de 'this' del entorno en el que fueron definidas. Esto es especialmente útil en métodos de arreglos, donde el contexto puede cambiar inesperadamente. */

//PREGUNTA 4
/*Los efectos secundarios ocurren cuando una función o método modifica una variable o estado fuera de su propio alcance, lo que puede llevar a comportamientos inesperados y dificultar la depuración del código. En el contexto de los métodos de arreglos, si un método modifica una variable externa, puede afectar otras partes del programa que dependen de esa variable, lo que puede causar errores difíciles de rastrear y mantener. Es recomendable evitar efectos secundarios para mantener la pureza de las funciones y facilitar el mantenimiento del código. */

//PREGUNTA 5
//Conceptos de Búsqueda: Defina el funcionamiento de find(), findIndex() e includes()
/*1. find(): Este método devuelve el primer elemento de un arreglo que cumple con una condición especificada en una función de prueba. Si ningún elemento cumple con la condición, devuelve undefined.
2. findIndex(): Este método devuelve el índice del primer elemento de un arreglo que cumple con una condición especificada en una función de prueba. Si ningún elemento cumple con la condición, devuelve -1.
3. includes(): Este método determina si un arreglo contiene un elemento específico, devolviendo true o false según corresponda. */  

//PREGUNTA 6

/*La diferencia técnica entre forEach() y map() radica en su propósito y comportamiento:
1. forEach(): Este método se utiliza para iterar sobre los elementos de un arreglo y ejecutar una función para cada elemento. No devuelve un nuevo arreglo; simplemente realiza una acción para cada elemento del arreglo original.
2. map(): Este método también itera sobre los elementos de un arreglo, pero su propósito es transformar cada elemento y devolver un nuevo arreglo con los resultados de la función aplicada a cada elemento del arreglo original. */    


/*
Ejercicio 1: Gestión de Pilas (Mutable)
Partiendo de let herramientas = ["Martillo", "Destornillador"];:
1. Agregue "Taladro" al final y "Sierra" al inicio. Luego elimine el último elemento.
2. Commit: "Ejercicio 1 completado".*/
let herramientas = ["Martillo", "Destornillador"];
herramientas.push("Taladro");
herramientas.unshift("Sierra");
herramientas.pop();
console.log(herramientas);

/*Ejercicio 2: Modificación de Índice (Mutable)
Partiendo de let colores = ["Rojo", "Verde", "Azul", "Amarillo"];:
1. Use splice para insertar "Naranja" en la posición 1 y reemplazar "Azul" por "Morado".
2. Commit: "Ejercicio 2 completado".*/
let colores = ["Rojo", "Verde", "Azul", "Amarillo"];
colores.splice(1, 0, "Naranja");
colores.splice(3, 1, "Morado");
console.log(colores);

/* Ejercicio 3: Transformación Declarativa (Inmutable)
Partiendo de const temperaturas = [15, 20, 25, 30];:
1. Cree un arreglo fahrenheit usando map con la fórmula (C * 9/5) + 32.
2. Commit: "Ejercicio 3 completado". */
const temperaturas = [15, 20, 25, 30];
const fahrenheit = temperaturas.map(c => (c * 9/5) + 32);
console.log(fahrenheit);  

/*Ejercicio 4: Filtrado Selectivo (Inmutable)
Partiendo de const inventario = [5, 12, 8, 130, 44];:
1. Cree un arreglo grandesValores con los números mayores a 10 usando filter.
2. Commit: "Ejercicio 4 completado".*/
const inventario = [5, 12, 8, 130, 44];
const grandesValores = inventario.filter(num => num > 10);
console.log(grandesValores);

/*Ejercicio 5: Acumulación de Datos (Inmutable)
Partiendo de const ventas = [100, 250, 150, 400];:
1. Obtenga el total de ventas usando el método reduce.
2. Commit: "Ejercicio 5 completado".*/
const ventas = [100, 250, 150, 400];
const totalVentas = ventas.reduce((acum, curr) => acum + curr, 0);
console.log(totalVentas);   

/*Ejercicio 6: Ordenamiento Alfabético (Mutable)
Partiendo de let nombres = ["Zulma", "Andrés", "Bernardo", "Carlos"];:
1. Ordene el arreglo alfabéticamente usando sort.
2. Commit: "Ejercicio 6 completado" .*/
let nombres = ["Zulma", "Andrés", "Bernardo", "Carlos"];
nombres.sort();
console.log(nombres);

/*Ejercicio 7: Inversión de Datos (Mutable)
Partiendo de let orden = [1, 2, 3, 4, 5];:
1. Invierta la posición de los elementos usando reverse.
2. Commit: "Ejercicio 7 completado" .*/
let orden = [1, 2, 3, 4, 5];
orden.reverse();
console.log(orden); 

