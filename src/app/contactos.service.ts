import { Injectable } from '@angular/core';

// El decorador 'Injectable' indica que la clase decorada
// debe comportarse como un servicio.
@Injectable()
export class ContactosService {

  private _nombres: string[] = [
    "Steve Jobs",
    "Steve Wozniak",
    "Bill Gates",
    "Sundar Pichai",
    "Elon Musk",
    "Bob Esponja"
  ];

  obtenerContactos(): string[] {
    return this._nombres;
  }

  eliminarContacto(nombre: string): void {
    this._nombres = this._nombres.filter(function(n) {
      return n !== nombre;
    });
  }

}
