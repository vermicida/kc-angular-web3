import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Contacto } from './contacto';
import { environment } from '../environments/environment';

// El decorador 'Injectable' indica que la clase decorada
// debe comportarse como un servicio.
@Injectable()
export class ContactosService {

  constructor(private _httpClient: HttpClient) { }

  obtenerContactos(): Observable<Contacto[]> {
    return this._httpClient.get<Contacto[]>(
      `${environment.rutaApi}/contactos`
    );
  }

  agregarContacto(contacto: Contacto): Observable<Contacto> {
    return this._httpClient.post<Contacto>(
      `${environment.rutaApi}/contactos`,
      contacto
    );
  }

  eliminarContacto(contacto: Contacto): Observable<Contacto> {
    return this._httpClient.delete<Contacto>(
      `${environment.rutaApi}/contactos/${contacto.id}`
    );
  }

}
