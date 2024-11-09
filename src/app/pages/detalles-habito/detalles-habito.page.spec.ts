import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesHabitoPage } from './detalles-habito.page';

describe('DetallesHabitoPage', () => {
  let component: DetallesHabitoPage;
  let fixture: ComponentFixture<DetallesHabitoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesHabitoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
