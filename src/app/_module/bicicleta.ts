
export class Bicicleta {
  _color: string;
  _marca: string;
  _velocidad: number;
  _aceleracion: number;
  _deceleracion: number;
  _pinones: number;
  _platos: number;
  _electrica: boolean= true;

  constructor(marca: string, color: string,velocidad:number,aceleracion :number,deceleracion:number, pinones:number, platos :number,electrica : boolean){
    this._marca=marca;
    this._color=color;
    this._pinones=pinones;
    this._velocidad=velocidad;
    this._aceleracion=aceleracion;
    this._deceleracion=deceleracion;
    this._platos=platos;
    this._electrica=electrica;
  }
  // Accessors
  get color() {
    return this._color;
  }
  set color(color) {
    this._color =color;
  }
  get marca() {
    return this._marca;
  }
  set marca(marca) {
    this._marca = marca;
  }
  get velocidad() {
    return this._velocidad;
  }
  set velocidad(velocidad) {
    this._velocidad = velocidad;
  }
  get aceleracion() {
    return this._aceleracion;
  }
  set aceleracion(aceleracion) {
    this._aceleracion = aceleracion;
  }
  get deceleracion() {
    return this._deceleracion;
  }
  set deceleracion(deceleracion) {
    this._deceleracion = deceleracion;
  }
  get pinones() {
    return this._pinones;
  }
  set pinones(pinones) {
    this._pinones= pinones;
  }
  get platos() {
    return this._platos;
  }
  set platos(platos) {
    this._platos = platos;
  }
  get electrica() {
    return this._electrica;
  }
  set electrica(electrica) {
    this._electrica= electrica;
  }

  worker(): string {
    return this.marca;
  }
  accelerate(velocidad: number,aceleracion: number): string {

    return `${this.worker()} is accelerating to (${velocidad}+${aceleracion}) MPH.`
  }
  frenar(velocidad: number,deceleracion: number): string {
      return `${this.worker()} is accelerating to (${velocidad}+${deceleracion}) MPH.`
  }

}



