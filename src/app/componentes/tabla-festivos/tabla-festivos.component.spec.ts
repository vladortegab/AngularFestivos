import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFestivosComponent } from './tabla-festivos.component';

describe('TablaFestivosComponent', () => {
  let component: TablaFestivosComponent;
  let fixture: ComponentFixture<TablaFestivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaFestivosComponent]
    });
    fixture = TestBed.createComponent(TablaFestivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
