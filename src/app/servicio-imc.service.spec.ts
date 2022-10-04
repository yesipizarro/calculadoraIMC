import { TestBed } from '@angular/core/testing';

import { ServicioIMCService } from './servicio-imc.service';

describe('ServicioIMCService', () => {
  let service: ServicioIMCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioIMCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
