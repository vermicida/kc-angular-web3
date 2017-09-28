import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaBComponent } from './ruta-b.component';

describe('RutaBComponent', () => {
  let component: RutaBComponent;
  let fixture: ComponentFixture<RutaBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
