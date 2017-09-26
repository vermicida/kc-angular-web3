import { Component, OnInit } from '@angular/core';

import { ContactosService } from './contactos.service';

// Con el decorador '@Component' otorgamos a la clase
// decorada comportamiento de componente.
@Component({
  // El metadato 'selector' indica el selector CSS encargado
  // de seleccionar el elemento HTML en el cual instanciar
  // el componente.
  selector: 'app-root',
  // En 'templateUrl' indicamos la ruta al template (documento HTML)
  // asociado al componente.
  templateUrl: './app.component.html',
  // En 'styleUrls' indicamos la/s ruta/s de las hojas de estilo
  // que aplican al componente.
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nombres: string[];

  // Para hacer la inyección de dependencias de un servicio
  // debemos hacerlo en el constructor de la clase. Anotamos
  // un parámetro con el tipo de servicio a inyectar y
  // añadimos el modificador de acceso correspondiente al
  // parámetro.
  constructor(private _contactosService: ContactosService) {
    console.log('Componente instanciado y servicio inyectado!');
  }

  // El hook 'OnInit' se ejecuta cuando el componente tiene
  // asociado su template correspondiente, por tanto es el
  // momento ideal para enlazar datos entre ellos.
  ngOnInit(): void {
    console.log('Estoy en el hook OnInit!');
    this.nombres = this._contactosService.obtenerContactos();
  }

  eliminarContacto(nombre: string): void {
    this._contactosService.eliminarContacto(nombre);
    this.nombres = this._contactosService.obtenerContactos();
  }
}
