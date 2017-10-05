import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
