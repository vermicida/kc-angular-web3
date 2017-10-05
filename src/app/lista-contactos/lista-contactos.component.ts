import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Contacto } from '../contacto';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {

  orden: string = 'asc';

  // Con el decorador 'Output' exponemos un evento para
  // que un componente padre pueda susribirse a él. Además,
  // este evento debe ser un 'EventEmitter' del tipo deseado.
  @Output() contactoSeleccionado = new EventEmitter<Contacto>();

  // Con el decorador 'Input' exponemos un atributo para que
  // un componente padre pueda enlazar datos al hijo.
  @Input() contactos: Contacto[];

  notificarSeleccionContacto(contacto: Contacto): void {
    this.contactoSeleccionado.emit(contacto);
  }

  cambiarOrden(): void {
    this.orden = this.orden === 'asc' ? 'desc' : 'asc';
  }

}
