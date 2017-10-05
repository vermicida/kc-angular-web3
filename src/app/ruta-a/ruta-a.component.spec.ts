import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
// En 'rxjs/add/observable/x' están las funciones estáticas de Observable.
// En 'rxjs/add/operator/x' están los operadores Observable.
import 'rxjs/add/observable/from';

import { RutaAComponent } from './ruta-a.component';
import { ListaContactosComponent } from '../lista-contactos/lista-contactos.component';
import { DetallesContactoComponent } from '../detalles-contacto/detalles-contacto.component';
import { OrdenarContactosPipe } from '../ordenar-contactos.pipe';
import { DatosContactoPipe } from '../datos-contacto.pipe';
import { ContactosService } from '../contactos.service';

describe('RutaAComponent', () => {

  let component: RutaAComponent;
  let fixture: ComponentFixture<RutaAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        RutaAComponent,
        ListaContactosComponent,
        DetallesContactoComponent,
        OrdenarContactosPipe,
        DatosContactoPipe
      ],
      providers: [
        ContactosService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Cuando necesitemos hacer inyección de dependencias, nos apoyamos en la función 'inject'. En ella indicamos
  // como primer parámetro la colección de servicios a inyectar. Como segundo parámetro, indicamos una función
  // anónima con tantos parámetros como servicios a inyectar indicamos: en estos parámetros nos informarán las
  // instancias inyectadas.
  it('debería obtener los contactos del servidor', inject([ContactosService], (contactosService: ContactosService) => {

    const datosMockeados = [{
      id: 1,
      nombre: 'Bob',
      apellidos: 'Esponja'
    }];

    // Con 'spyOn' observamos una función de un objeto dado. Seguidamente indicamos
    // qué acción realizar cuando esta función observada sea ejecutada.
    spyOn(contactosService, 'obtenerContactos').and.callFake(() => {
      return Observable.from([datosMockeados]);
    });

    component.ngOnInit();

    component.contactos$.subscribe((datos) => {
      // Como debemos comprobar que los datos que retorna el servicio son los
      // obtenidos en el componente, nos da igual la 'forma' que tengan: tan solo
      // nos interesa que sean justo los mismos.
      expect(datos).toBe(datosMockeados);
    });

  }));
});
