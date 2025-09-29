import { partida } from "./model";
import {
  generarNumeroAleatorio,
  generarNumeroCarta,
  obtenerUrlCarta,
  obtenerPuntosCarta,
  sumarPuntosCarta,
  actualizarPuntos,
  obtenerMensajeCuandoMePlanto,
} from "./motor";

import {
  dameCartaBoton,
  elementoImagen,
  mePlantoBoton,
  nuevaPartidaBoton,
  futuroBoton,
  muestraPuntuacion,
  mostrarCarta,
  mostrarMensaje,
  desactivarDameCartaBoton,
  desactivarNuevaPartida,
  desactivarMePlantoBoton,
  activarFuturoBoton,
  ocultarFuturoBoton,
  desactivarFuturoBoton,
} from "./ui";

document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const comprobarPartida = () => {
  if (partida.puntuacion === 7.5) {
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena! 🎉");
    activarModoNuevaPartida();
  } else if (partida.puntuacion > 7.5) {
    mostrarMensaje("☠️☠️☠️ GAME OVER Te has pasado ☠️☠️☠️");
    activarModoNuevaPartida();
  }
};

const mePlanto = () => {
  const mensajePartida = obtenerMensajeCuandoMePlanto();
  mostrarMensaje(mensajePartida);
  desactivarDameCartaBoton(true);
  desactivarNuevaPartida(false);
  desactivarMePlantoBoton(true);
  activarFuturoBoton();
};

const activarModoNuevaPartida = () => {
  desactivarDameCartaBoton(true);
  desactivarMePlantoBoton(true);
  desactivarNuevaPartida(false);
};

const dameCarta = () => {
  const numeroGenerado = generarNumeroAleatorio();
  const numeroCarta = generarNumeroCarta(numeroGenerado);
  const urlCarta = obtenerUrlCarta(numeroCarta);
  mostrarCarta(urlCarta);
  const puntosCarta = obtenerPuntosCarta(numeroCarta);
  const sumarPuntos = sumarPuntosCarta(puntosCarta);
  actualizarPuntos(sumarPuntos);
  muestraPuntuacion();
  comprobarPartida();
};

const mostrarFuturo = () => {
  if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
    const numeroGenerado = generarNumeroAleatorio();
    const numeroCarta = generarNumeroCarta(numeroGenerado);
    const urlCarta = obtenerUrlCarta(numeroCarta);
    mostrarCarta(urlCarta);
    mostrarMensaje("Esta hubiese sido tu carta");
  }
  desactivarFuturoBoton();
};

const reiniciarPartida = () => {
  mostrarMensaje("");
  actualizarPuntos(0);
  muestraPuntuacion();
  mostrarCarta(
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
  );
  desactivarDameCartaBoton(false);
  desactivarMePlantoBoton(false);
  desactivarNuevaPartida(true);
  ocultarFuturoBoton();
};

if (dameCartaBoton && dameCartaBoton instanceof HTMLButtonElement) {
  dameCartaBoton.addEventListener("click", dameCarta);
}
if (mePlantoBoton && mePlantoBoton instanceof HTMLButtonElement) {
  mePlantoBoton.addEventListener("click", mePlanto);
}

if (nuevaPartidaBoton && nuevaPartidaBoton instanceof HTMLButtonElement) {
  nuevaPartidaBoton.addEventListener("click", reiniciarPartida);
}

if (futuroBoton && futuroBoton instanceof HTMLButtonElement) {
  futuroBoton.addEventListener("click", mostrarFuturo);
}
