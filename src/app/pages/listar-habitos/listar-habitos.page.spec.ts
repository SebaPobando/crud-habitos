import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarHabitosPage } from './listar-habitos.page';

describe('ListarHabitosPage', () => {
  let component: ListarHabitosPage;
  let fixture: ComponentFixture<ListarHabitosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHabitosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
