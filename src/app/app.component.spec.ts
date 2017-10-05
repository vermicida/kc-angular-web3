import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Los bloques 'describe' agrupamos test que guarden algún tipo de relación.
describe('AppComponent: testing del componente', () => {

  let fixture;
  let componente;

  // Los bloques 'beforeEach' se ejecutan previamente a los bloques 'it'
  beforeEach(async(() => {

    // 'TestBed' es el encargado de gestionar todo el entorno de testing. Para configurar el módulo de la aplicación en modo testing, usaremos la función 'configureTestingModule', pasando como parámetro el objeto de metadatos correspondiente.
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();

    // Para instanciar componentes debemos usar la función 'createComponent' de 'TestBed'. Nos retornará un 'ComponentFixture<T>', siendo 'T' el tipo de componente solicitado.
    fixture = TestBed.createComponent(AppComponent);
    componente = fixture.componentInstance;
  }));

  // Los bloques 'it' definen los tests a realizar sobre la pieza concreta de este documento de especificación.
  it('debería instanciarse', async(() => {

    // Con 'expect' indicamos el resultado que esperamos del test.
    expect(componente).toBeTruthy();
  }));
});


describe('AppComponent: testing del template', () => {

  let fixture;
  let template;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    template = fixture.debugElement;
  }));

  it('debería tener un título con el texto Agenda', () => {
    let h1 = template.query(By.css('h1'));
    let h1nativo = h1.nativeElement;
    expect(h1nativo.textContent).toBe('Agenda');
  });

  it('debería tener una zona dinámica donde pintar las secciones', () => {
    let routerOutlet = template.query(By.directive(RouterOutlet))
    expect(routerOutlet).toBeTruthy();
  });

});
