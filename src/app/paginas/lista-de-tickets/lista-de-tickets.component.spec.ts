import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDeTicketsComponent } from './lista-de-tickets.component';

describe('ListaDeTicketsComponent', () => {
  let component: ListaDeTicketsComponent;
  let fixture: ComponentFixture<ListaDeTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDeTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
