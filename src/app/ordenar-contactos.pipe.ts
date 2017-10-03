import { Pipe, PipeTransform } from '@angular/core';

import { Contacto } from './contacto';

@Pipe({
  name: 'ordenarContactos'
})
export class OrdenarContactosPipe implements PipeTransform {

  private _obtenerNombreCompleto(contacto: Contacto): string {
    return `${contacto.nombre} ${contacto.apellidos}`.toLowerCase();
  }

  transform(value: Contacto[], orden: string): Contacto[] {

    let contactosOrdenados: Contacto[];

    // Comprobamos que la colección de contactos está inicializada.
    if (value) {

      if (orden === 'asc') {

        // Orden ascendente por nombre y apellidos de contacto.
        contactosOrdenados = value.sort((contactoA: Contacto, contactoB: Contacto): number => {

          const nombreCompletoContactoA: string = this._obtenerNombreCompleto(contactoA);
          const nombreCompletoContactoB: string = this._obtenerNombreCompleto(contactoB);

          // Si 'A' va antes que 'B'.
          return nombreCompletoContactoA > nombreCompletoContactoB
            ? 1
            // Si 'A' va después que 'B'.
            : nombreCompletoContactoA < nombreCompletoContactoB
              ? -1
              // Si el orden entre 'A' y 'B' no importa (iguales).
              : 0;
        });
      }
      else {

        // Orden descendente por nombre y apellidos de contacto.
        contactosOrdenados = value.sort((contactoA: Contacto, contactoB: Contacto): number => {

          const nombreCompletoContactoA: string = this._obtenerNombreCompleto(contactoA);
          const nombreCompletoContactoB: string = this._obtenerNombreCompleto(contactoB);

          // Si 'B' va antes que 'A'.
          return nombreCompletoContactoA < nombreCompletoContactoB
            ? 1
            // Si 'B' va después que 'A'.
            : nombreCompletoContactoA > nombreCompletoContactoB
              ? -1
              // Si el orden entre 'A' y 'B' no importa (iguales).
              : 0;
        });
      }
    }

    // En caso de que la colección de contactos sea nula.
    else {
      contactosOrdenados = [];
    }

    return contactosOrdenados;
  }

}
