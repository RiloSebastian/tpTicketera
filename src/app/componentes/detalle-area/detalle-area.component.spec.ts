import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAreaComponent } from './detalle-area.component';

describe('DetalleAreaComponent', () => {
  let component: DetalleAreaComponent;
  let fixture: ComponentFixture<DetalleAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
