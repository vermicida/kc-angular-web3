import { Injectable } from '@angular/core';

import { Contacto } from './contacto';

// El decorador 'Injectable' indica que la clase decorada
// debe comportarse como un servicio.
@Injectable()
export class ContactosService {

  private _nombres: Contacto[] = [
    new Contacto(1, 'Steve', 'Jobs'),
    new Contacto(2, 'Steve', 'Wozniak'),
    new Contacto(3, 'Bill', 'Gates'),
    new Contacto(4, 'Sundar', 'Pichai'),
    new Contacto(5, 'Elon', 'Musk'),
    new Contacto(6, 'Bob', 'Esponja')
  ];

  obtenerContactos(): Contacto[] {
    return this._nombres;
  }

  eliminarContacto(nombre: Contacto): void {
    this._nombres = this._nombres.filter(function(n) {
      return n.id !== nombre.id;
    });
  }

}
