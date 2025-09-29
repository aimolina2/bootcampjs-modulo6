let puntuacion: number = 0;
let mensaje: string = "";
const dameCartaBoton = document.getElementById("dame-carta-button");
const elementoPuntuacion = document.getElementById("puntuacion");
const elementoImagen = document.getElementById("carta-img");
const elementoMensaje = document.getElementById("mensaje");
const mePlantoBoton = document.getElementById("me-planto-button");
const nuevaPartidaBoton = document.getElementById("nueva-partida-button");
const futuroBoton = document.getElementById("futuro-button");

const muestraPuntuacion = () => {
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = puntuacion.toString();
  } else {
    console.error("muestraPuntuacion: No se ha encontrado el id puntuacion");
  }
};
document.addEventListener("DOMContentLoaded", muestraPuntuacion);

const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 10) + 1;

const generarNumeroCarta = (numeroAleatorio: number): number => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  } else {
    return numeroAleatorio;
  }
};

const obtenerUrlCarta = (carta: number) => {
  switch (carta) {
    case 1:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";

    case 2:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
    case 3:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";

    case 4:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";

    case 5:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";

    case 6:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";

    case 7:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";

    case 10:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";

    case 11:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";

    case 12:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";

    default:
      return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  }
};

const mostrarCarta = (urlCarta: string): void => {
  if (elementoImagen && elementoImagen instanceof HTMLImageElement) {
    elementoImagen.src = urlCarta;
  } else {
    console.error("mostrarCarta: No se ha encontrado la URL de la carta");
  }
};

const obtenerPuntosCarta = (carta: number) => {
  if (carta > 7) {
    return 0.5;
  }
  return carta;
};

const sumarPuntosCarta = (puntosCarta: number) => {
  return puntosCarta + puntuacion;
};

const actualizarPuntos = (puntosTotales: number) => {
  puntuacion = puntosTotales;
};

const comprobarPartida = () => {
  if (puntuacion === 7.5) {
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena! 🎉");
    activarModoNuevaPartida();
  } else if (puntuacion > 7.5) {
    mostrarMensaje("☠️☠️☠️ GAME OVER Te has pasado ☠️☠️☠️");
    activarModoNuevaPartida();
  }
};

const mostrarMensaje = (mensaje: string) => {
  if (elementoMensaje && elementoMensaje instanceof HTMLDivElement) {
    elementoMensaje.innerHTML = mensaje;
  }
};

const obtenerMensajeCuandoMePlanto = () => {
  if (puntuacion <= 4) {
    return "Has sido muy conservador";
  }
  if (puntuacion === 5) {
    return "Te ha entrado el canguelo, eh? 😏";
  }
  if (puntuacion === 6 || puntuacion === 7) {
    return "Casi casi...";
  }
  return "Ups, algo ha fallado";
};

const mePlanto = () => {
  const mensajePartida = obtenerMensajeCuandoMePlanto();
  mostrarMensaje(mensajePartida);
  desactivarDameCartaBoton(true);
  desactivarNuevaPartida(false);
  desactivarMePlantoBoton(true);
  activarFuturoBoton();
};

const desactivarDameCartaBoton = (estaDesactivado: boolean) => {
  if (dameCartaBoton && dameCartaBoton instanceof HTMLButtonElement) {
    dameCartaBoton.disabled = estaDesactivado;
  }
};

const desactivarNuevaPartida = (estaDesactivado: boolean) => {
  if (nuevaPartidaBoton && nuevaPartidaBoton instanceof HTMLButtonElement) {
    nuevaPartidaBoton.disabled = estaDesactivado;
  }
};

const desactivarMePlantoBoton = (estaDesactivado: boolean) => {
  if (mePlantoBoton && mePlantoBoton instanceof HTMLButtonElement) {
    mePlantoBoton.disabled = estaDesactivado;
  }
};

const activarModoNuevaPartida = () => {
  desactivarDameCartaBoton(true);
  desactivarMePlantoBoton(true);
  desactivarNuevaPartida(false);
};

const activarFuturoBoton = () => {
  if (futuroBoton && futuroBoton instanceof HTMLButtonElement) {
    futuroBoton.style.display = "inline-block";
  }
};

const ocultarFuturoBoton = () => {
  if (futuroBoton && futuroBoton instanceof HTMLButtonElement) {
    futuroBoton.style.display = "none";
    futuroBoton.disabled = false;
  }
};

const desactivarFuturoBoton = () => {
  if (futuroBoton && futuroBoton instanceof HTMLButtonElement) {
    futuroBoton.disabled = true;
  }
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
