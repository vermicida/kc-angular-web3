import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent {

  // Con el decorador 'Output' exponemos un evento para
  // que un componente padre pueda susribirse a él. Además,
  // este evento debe ser un 'EventEmitter' del tipo deseado.
  @Output() botonEliminarPulsado = new EventEmitter<string>();

  // Con el decorador 'Input' exponemos un atributo para que
  // un componente padre pueda enlazar datos al hijo.
  @Input() contactos: string[];

  notificarEliminacionContacto(contacto: string): void {
    // Notificamos datos al componente padre gracias a
    // la función 'emit' de nuestro 'EventEmitter'.
    this.botonEliminarPulsado.emit(contacto);
  }

}
