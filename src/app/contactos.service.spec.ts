import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { ContactosService } from './contactos.service';

describe('ContactosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ContactosService]
    });
  });

  it('should be created', inject([ContactosService], (service: ContactosService) => {
    expect(service).toBeTruthy();
  }));
});
