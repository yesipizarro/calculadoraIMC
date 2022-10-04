import { Injectable } from '@angular/core';

export interface DatosIMC {
  estatura: number,
  peso: number
}

export enum IMC {
  INFERIOR,
  NORMAL,
  SUPERIOR,
  OBESIDAD,
  NEUTRO
}

@Injectable({
  providedIn: 'root'
})
export class ServicioIMCService {

  resultado: number;

  constructor() { }

  calcularIMC(valorestatura, valorpeso) {
    let estatura = (valorestatura) * (valorestatura)
    this.resultado = valorpeso / estatura
  }
}
