import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicioIMCService, DatosIMC, IMC } from '../servicio-imc.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {

  imcs = IMC;

  constructor(private formularioServiceIMC: ServicioIMCService) { }

  formularioIMC: FormGroup = new FormGroup({
    estatura: new FormControl(undefined, [Validators.required, Validators.min(1)]),
    peso: new FormControl(undefined, [Validators.required, Validators.min(1)])
  })

  calcular() {
    let valorestatura = this.formularioIMC.value.estatura;
    let valorpeso = this.formularioIMC.value.peso;
    this.formularioServiceIMC.calcularIMC(valorestatura, valorpeso);

  }

  get mostrarResultado() {
    let paraMostrar = this.formularioServiceIMC.resultado;
    if (!paraMostrar) return IMC.NEUTRO;
    if (paraMostrar < 18) {
      return IMC.INFERIOR;
    } else if (paraMostrar >= 18.5 && paraMostrar <= 24.9) {
      return IMC.NORMAL;
    } else if (paraMostrar >= 25.0 && paraMostrar <= 29.9) {
      return IMC.SUPERIOR;
    } else {
      return IMC.OBESIDAD;
    }
  }


}
