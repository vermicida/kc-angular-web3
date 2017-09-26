import { TestBed, inject } from '@angular/core/testing';

import { ContactosService } from './contactos.service';

describe('ContactosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactosService]
    });
  });

  it('should be created', inject([ContactosService], (service: ContactosService) => {
    expect(service).toBeTruthy();
  }));
});
