# Laboratorio módulo 6 - Imports. Juego siete y medio

Para desarrollar este proyecto partimos de los archivos del proyecto presentado en el anterior laboratorio donde desarrollamos el "Juego siete y medio".

Pasos:

- Clonate el proyecto.
- Instala las dependencias con `npm install`.
- Ejecuta el sandbox con `npm run dev`.
- Abre el navegador en `http://localhost:5173/` (si ese puerto no te funciona, mira en la consola donde has hecho el build, puede que este ocupado y se haya abierto en otro puerto).

## 1. Modelo

Incluimos en este fichero las constantes de base que vamos a utilizar para inicializar la partida. Datos y estructuras indispensables para poner en marcha el modelo.

Al llevarnos `puntuacion`y `mensaje`a model.ts nos salta un error que solucionamos creando un `interface: Partida` donde definimos ambos parámetros. A continuación inicializamos los valores definiendo la `const partida: Partida`.

En main.ts importamos `partida` y en aquellos lugares donde se llama a `puntuacion`y que ahora se marcan como error sustituimos por `partida.puntuacion`.

## 2. Motor

## 3. UI
