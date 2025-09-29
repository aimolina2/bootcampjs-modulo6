import { partida } from "./model";

export const dameCartaBoton = document.getElementById("dame-carta-button");
export const elementoPuntuacion = document.getElementById("puntuacion");
export const elementoImagen = document.getElementById("carta-img");
export const elementoMensaje = document.getElementById("mensaje");
export const mePlantoBoton = document.getElementById("me-planto-button");
export const nuevaPartidaBoton = document.getElementById(
  "nueva-partida-button"
);
export const futuroBoton = document.getElementById("futuro-button");

export const muestraPuntuacion = () => {
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

export const mostrarMensaje = (mensaje: string) => {
  if (elementoMensaje && elementoMensaje instanceof HTMLDivElement) {
    elementoMensaje.innerHTML = mensaje;
  }
};

export const desactivarDameCartaBoton = (estaDesactivado: boolean) => {
  if (dameCartaBoton && dameCartaBoton instanceof HTMLButtonElement) {
    dameCartaBoton.disabled = estaDesactivado;
  }
};

export const desactivarNuevaPartida = (estaDesactivado: boolean) => {
  if (nuevaPartidaBoton && nuevaPartidaBoton instanceof HTMLButtonElement) {
    nuevaPartidaBoton.disabled = estaDesactivado;
  }
};

export const desactivarMePlantoBoton = (estaDesactivado: boolean) => {
  if (mePlantoBoton && mePlantoBoton instanceof HTMLButtonElement) {
    mePlantoBoton.disabled = estaDesactivado;
  }
};

export const activarFuturoBoton = () => {
  if (futuroBoton && futuroBoton instanceof HTMLButtonElement) {
    futuroBoton.style.display = "inline-block";
  }
};

export const ocultarFuturoBoton = () => {
  if (futuroBoton && futuroBoton instanceof HTMLButtonElement) {
    futuroBoton.style.display = "none";
    futuroBoton.disabled = false;
  }
};

export const desactivarFuturoBoton = () => {
  if (futuroBoton && futuroBoton instanceof HTMLButtonElement) {
    futuroBoton.disabled = true;
  }
};
