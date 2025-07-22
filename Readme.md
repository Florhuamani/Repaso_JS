# Taller de Repaso de JavaScript
>[!WARNING] Observación:
Quokka se debe ejecutar en cada archivo.

>[!TIP] 
Quokka detecta que en nuestro proyecto tenemos node.js y lo ejecuta para poder ver la consola en vivo.
## 1. Tipos de datos
Es la manera como capturamos información, en JavaScrip se clasifica en 2 grandes grupos:
>[!TIP]
JavaScript tiene funciones predeterminadas, por ejemplo, para mostrar un mensaje por consola `console.log()`.
Para poder verificar que tipo de dato estamos manejando en JavaScript también tenemos una función por defecto, llamada typeof `typeof()`.
### Primitivos:
Son datos que siempre han existido.
1. Númericos:
   - Enteros Positivos
   - Enteros Negativos
   - Decimal Positivo
   - Decimal Negativo 
   - NaN (Not a Number)
2. Texto
   - Caracteres
   - Caracteres especiales
   - String
3. Booleanos
   - True  - 1
   - False - 0
### Estructurados:
1. Array (Listas)
   - Array de tipo numérico
   - Array de tipo string
   - Array de tipo mixto
- ¿Cómo está estructurado? 
  ![alt text](assets/image.png)
1. Objetos (Diccionario): 

   Son similares a las listas con la única diferencia que en vez de tener valor e índice, sus elementos trabajan con `clave:valor`
- ¿Cómo está estructurado? 
  ![alt text](assets/image2.png)
## 2. Variables (enlaces, binding)
Es la técnica que se usa para poder apuntar a una dirección en memoria y al valor o dato relacionado ó que se encuentre almacenado en ese momento.
Tenemos 2 pasos para crear una variable.
- Primero declarar la variable/constante.
- Segundo inicializar la variable/constante.

**Observación**
Para crear la variable, primero tenemos que crear el enlace luego darle el nombre de la variable/constante:
Para las palabras reservadas `keyword`- `let`, `var`.
Para las constantes tenemos la palbra reservada `keyword`-`const`
**Recomendaciones**
- `let`: Usar cuándo el valor tendrá que variar.
- `var`: Evitar usar
- `const` Usar cuándo el valor será el mismo siempre.
  `let` y`var` ambos nos permite crear variables su única diferecia es el alcance, ámbito o `scope`.
## 3. Operadores
## 4. Funciones
## 5. Métodos para trabajar con datos estructurados:
Los datos estructurados suelen almacenarse en archivos, por ello es fundamental organizar y acceder correctamente a ellos para realizar operaciones.
### Acceder: 
Obtener la información almacenada dentro de un archivo para leer o consultar datos, puede hacerse mediante lectura secuencial o acceso directo según la estructura del archivo.
### Modificar:
Cambiar los datos existentes dentro de un archivo, habitualmente localizando primero el registro y luego actualizando alguno de sus campos.
### Crear:
Generar un archivo nuevo dónde se almacenarán datos estructurados. Esto implica definir el formato o estructura de los registros dentro del archivo.
### Insertar: 
Añadir nuevos registros al archivo, en ocasiones respetando un orden o secuencia, según el tipo de archivo.
### Eliminar:
Quitar uno o varios registros del archivo. Esto puede implicar la búsqueda previa del registro que se quiere eliminar.
### Ordenar:
Reorganizar los registros dentro del archivo basándose en un campo clave para facilitar búsquedas y análisis posteriores.


### Scope en `let` y `var`:
El *scope* o ámbito en programación es el contexto o región del código donde una variable, función o dato es accesible y puede ser utilizado. Define que partes del programa *ven* o pueden acceder a esa entidad.
Hay varios tipos principales de scope:
  
- *Global*: La variable está definida fuera de funciones o bloques y pueden usarse en cualquier parte del código.
- *Local*: La variable existe solo dentro de una función o bloque dónde fue declarada, inaccesible fuera.
- *De bloque*: Alcance limitado al bloque (`{}`) más próximo, introducido con `let` y `const` en JS.

`var` y `let`:
- *var* tiene scope de función: La variable existe a lo largo de toda la función que lo contiene.
- *let* tiene scope de bloque: La variable solo existe dentro del bloque `{}` donde fue declarada, lo que ayuda a evitar errores por redefiniciones o accesos inoportunos.