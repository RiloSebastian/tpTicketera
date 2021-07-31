import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTicketsComponent } from './tabla-tickets.component';

describe('TablaTicketsComponent', () => {
  let component: TablaTicketsComponent;
  let fixture: ComponentFixture<TablaTicketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaTicketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
