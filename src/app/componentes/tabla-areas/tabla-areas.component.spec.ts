import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAreasComponent } from './tabla-areas.component';

describe('TablaAreasComponent', () => {
  let component: TablaAreasComponent;
  let fixture: ComponentFixture<TablaAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
