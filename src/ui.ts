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

export const dameCartaBoton = document.getElementById("dame-carta-button");
export const elementoPuntuacion = document.getElementById("puntuacion");
export const elementoImagen = document.getElementById("carta-img");
export const elementoMensaje = document.getElementById("mensaje");
export const mePlantoBoton = document.getElementById("me-planto-button");
export const nuevaPartidaBoton = document.getElementById(
  "nueva-partida-button"
);
export const futuroBoton = document.getElementById("futuro-button");

export const muestraPuntuacion = (): void => {
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = partida.puntuacion.toString();
  } else {
    console.error("muestraPuntuacion: No se ha encontrado el id puntuacion");
  }
};

export const mostrarCarta = (urlCarta: string): void => {
  if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
    elementoImagen.src = urlCarta;
  } else {
    console.error("mostrarCarta: No se ha encontrado la URL de la carta");
  }
};

export const mostrarMensaje = (mensaje: string): void => {
  if (elementoMensaje && elementoMensaje instanceof HTMLDivElement) {
    elementoMensaje.innerHTML = mensaje;
  }
};

export const desactivarDameCartaBoton = (estaDesactivado: boolean): void => {
  if (dameCartaBoton && dameCartaBoton instanceof HTMLButtonElement) {
    dameCartaBoton.disabled = estaDesactivado;
  }
};

export const desactivarNuevaPartida = (estaDesactivado: boolean): void => {
  if (nuevaPartidaBoton && nuevaPartidaBoton instanceof HTMLButtonElement) {
    nuevaPartidaBoton.disabled = estaDesactivado;
  }
};

export const desactivarMePlantoBoton = (estaDesactivado: boolean): void => {
  if (mePlantoBoton && mePlantoBoton instanceof HTMLButtonElement) {
    mePlantoBoton.disabled = estaDesactivado;
  }
};

export const activarFuturoBoton = (): void => {
  if (futuroBoton && futuroBoton instanceof HTMLButtonElement) {
    futuroBoton.style.display = "inline-block";
  }
};

export const ocultarFuturoBoton = (): void => {
  if (futuroBoton && futuroBoton instanceof HTMLButtonElement) {
    futuroBoton.style.display = "none";
    futuroBoton.disabled = false;
  }
};

export const desactivarFuturoBoton = (): void => {
  if (futuroBoton && futuroBoton instanceof HTMLButtonElement) {
    futuroBoton.disabled = true;
  }
};

export const comprobarPartida = (): void => {
  if (partida.puntuacion === 7.5) {
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena! 🎉");
    activarModoNuevaPartida();
  } else if (partida.puntuacion > 7.5) {
    mostrarMensaje("☠️☠️☠️ GAME OVER Te has pasado ☠️☠️☠️");
    activarModoNuevaPartida();
  }
};

export const activarModoNuevaPartida = (): void => {
  desactivarDameCartaBoton(true);
  desactivarMePlantoBoton(true);
  desactivarNuevaPartida(false);
};

export const mePlanto = (): void => {
  const mensajePartida = obtenerMensajeCuandoMePlanto();
  mostrarMensaje(mensajePartida);
  desactivarDameCartaBoton(true);
  desactivarNuevaPartida(false);
  desactivarMePlantoBoton(true);
  activarFuturoBoton();
};

export const dameCarta = (): void => {
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

export const mostrarFuturo = (): void => {
  if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
    const numeroGenerado = generarNumeroAleatorio();
    const numeroCarta = generarNumeroCarta(numeroGenerado);
    const urlCarta = obtenerUrlCarta(numeroCarta);
    mostrarCarta(urlCarta);
    mostrarMensaje("Esta hubiese sido tu carta");
  }
  desactivarFuturoBoton();
};

export const reiniciarPartida = (): void => {
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

export const inicializaPartida = (): void => {
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
};
