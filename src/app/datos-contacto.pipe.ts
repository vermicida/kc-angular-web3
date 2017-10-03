import { Pipe, PipeTransform } from '@angular/core';

import { Contacto } from './contacto';

// Con el decorador '@Pipe' otorgamos a la clase decorada comportamiento de Pipe. La
// clase debe implementar la interfaz 'PipeTransform', que a su vez obliga la implementación
// de la función 'transform'. Además, es necesario indicar en el metadato 'name' un nombre,
// el cual utilizaremos en templates para aplicar el Pipe.
@Pipe({
  name: 'datosContacto'
})
export class DatosContactoPipe implements PipeTransform {

  // En esta función hacemos la transformación del dato correspondiente. Éste siempre
  // viene dadao como primer parámetro de la función. Podríamos definir otros parámetros
  // para personalizar la lógica de la transformación.
  transform(value: Contacto): string {

    let datos: string;

    // Si tenemos tanto email como movil.
    if (value.email && value.movil) {
      datos = `${value.email} | ${value.movil}`;
    }
    // Si solo tenemos email.
    else if (value.email) {
      datos = value.email;
    }
    // Si solo tenemos movil.
    else if (value.movil) {
      datos = value.movil;
    }
    // Si no tenemos ni uno ni otro.
    else {
      datos = '';
    }

    return datos;
  }

}
