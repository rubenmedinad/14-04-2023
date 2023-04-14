import { Component } from '@angular/core';
import { Bicicleta } from '../_module/bicicleta';
@Component({
  selector: 'app-bicicleta-formulario',
  templateUrl: './bicicleta-formulario.component.html',
  styleUrls: ['./bicicleta-formulario.component.css'],
})
export class BicicletaFormularioComponent {
  texto: string = '';

  color: string = '';

  marca: string = '';

  velocidad: number = 0;

  aceleracion: number = 0;

  deceleracion: number = 0;

  pinones: number = 0;

  platos: number = 0;

  electrica: boolean = false;

  bicicleta: Bicicleta = new Bicicleta(
    this.color,

    this.marca,

    this.velocidad,

    this.aceleracion,

    this.deceleracion,

    this.pinones,

    this.platos,

    this.electrica
  );

  imprimir() {
    this.color = this.bicicleta.color;

    this.marca = this.bicicleta.marca;

    this.velocidad = this.bicicleta.velocidad;

    this.aceleracion= this.bicicleta.aceleracion;

    this.deceleracion= this.bicicleta.deceleracion;

    this.pinones = this.bicicleta.pinones;

    this.platos = this.bicicleta.platos;

    this.electrica = this.bicicleta.electrica;

    this.texto= ("La bicicleta de marca " + this.color + " y de marca "
     + this.marca + " tiene " + this.pinones + " piñones y " + this.platos + " platos con una velocidad de " + (this.velocidad + this.aceleracion - this.deceleracion) + " y "
     + this.electrica + " es eléctrica")
  }
}
