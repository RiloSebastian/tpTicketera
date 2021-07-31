import { TestBed } from '@angular/core/testing';

import { ConServicioGuard } from './con-servicio.guard';

describe('ConServicioGuard', () => {
  let guard: ConServicioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConServicioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
