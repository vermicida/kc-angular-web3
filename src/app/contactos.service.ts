import { Injectable } from '@angular/core';

import { Contacto } from './contacto';

// El decorador 'Injectable' indica que la clase decorada
// debe comportarse como un servicio.
@Injectable()
export class ContactosService {

  private _nombres: Contacto[] = [
    new Contacto(
      1,
      'Steve',
      'Jobs',
      '555 666 777',
      'steve.jobs@apple.com'
    ),
    new Contacto(
      2,
      'Steve',
      'Wozniak',
      '765 890 345',
      'steve.wozniak@apple.com'
    ),
    new Contacto(
      3,
      'Bill',
      'Gates'
    ),
    new Contacto(
      4,
      'Sundar',
      'Pichai',
      null,
      'sundar.pichai@google.com'
    ),
    new Contacto(
      5,
      'Elon',
      'Musk',
      '345 213 456'
    ),
    new Contacto(
      6,
      'Bob',
      'Esponja',
      '123 123 123',
      'bob.esponja@dibus.es'
    )
  ];

  obtenerContactos(): Contacto[] {
    return this._nombres;
  }

  agregarContacto(contacto: Contacto): void {
    this._nombres.push(contacto);
  }

  eliminarContacto(nombre: Contacto): void {
    this._nombres = this._nombres.filter(function(n) {
      return n.id !== nombre.id;
    });
  }

}
