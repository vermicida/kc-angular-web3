import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent {

  formulario: FormGroup;

  // Inyectamos como dependencia 'FormBuilder'. Con esta clase
  // podemos crear nuevos 'FormGroup', indicando todas las propiedades
  // que queremos recoger del formulario HTML.
  constructor(private _formBuilder: FormBuilder) {
    this.crearFormulario();
  }

  private crearFormulario(): void {
    // Para crear un nuevo 'FormGroup' debemos indicar en un objeto JSON
    // las propiedades que recogeremos del formulario HTML.
    this.formulario = this._formBuilder.group({
      nombre: '',
      apellidos: ''
    });
  }

  guardarContacto(): void {
    // Tenemos disponible los valores que el usuario indica en un
    // formulario a través de la propiedad 'value' del 'FormGroup'.
    console.log(this.formulario.value);
  }

}
