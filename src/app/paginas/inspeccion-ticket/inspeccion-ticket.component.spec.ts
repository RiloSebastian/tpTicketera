import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspeccionTicketComponent } from './inspeccion-ticket.component';

describe('InspeccionTicketComponent', () => {
  let component: InspeccionTicketComponent;
  let fixture: ComponentFixture<InspeccionTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspeccionTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspeccionTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
