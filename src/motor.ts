import { partida } from "./model";

export const generarNumeroAleatorio = (): number =>
  Math.floor(Math.random() * 10) + 1;

export const generarNumeroCarta = (numeroAleatorio: number): number => {
  if (numeroAleatorio > 7) {
    return numeroAleatorio + 2;
  } else {
    return numeroAleatorio;
  }
};

export const obtenerUrlCarta = (carta: number): string => {
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

export const obtenerPuntosCarta = (carta: number): number => {
  if (carta > 7) {
    return 0.5;
  }
  return carta;
};

export const sumarPuntosCarta = (puntosCarta: number): number => {
  return puntosCarta + partida.puntuacion;
};

export const actualizarPuntos = (puntosTotales: number): void => {
  partida.puntuacion = puntosTotales;
};

export const obtenerMensajeCuandoMePlanto = (): string => {
  if (partida.puntuacion <= 4) {
    return "Has sido muy conservador";
  }
  if (partida.puntuacion === 5) {
    return "Te ha entrado el canguelo, eh? 😏";
  }
  if (partida.puntuacion >= 6 || partida.puntuacion <= 7) {
    return "Casi casi...";
  }
  return "Ups, algo ha fallado";
};
