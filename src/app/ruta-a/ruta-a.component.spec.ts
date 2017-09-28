import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaAComponent } from './ruta-a.component';

describe('RutaAComponent', () => {
  let component: RutaAComponent;
  let fixture: ComponentFixture<RutaAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaAComponent ]
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
