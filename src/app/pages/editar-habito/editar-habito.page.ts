import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/angular/standalone';

@Component({
  selector: 'app-editar-habito',
  templateUrl: './editar-habito.page.html',
  styleUrls: ['./editar-habito.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton, IonSelect, IonSelectOption]
})
export class EditarHabitoPage implements OnInit {
  habito: string = '';
  descripcion: string = '';
  dias: string[] = [];
  horaInicio: string = '';
  horaFinal: string = '';
  mensajeError: string = '';
  mensajeExito: boolean = false;
  index: number = -1;

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    const index = localStorage.getItem('editarIndex');
    console.log('Índice recuperado:', index);

    if (index === null) {
      this.mensajeError = 'No se pudo cargar el índice del hábito.';
      console.error(this.mensajeError);
      return;
    }

    this.index = parseInt(index, 10);

    if (isNaN(this.index) || this.index < 0) {
      this.mensajeError = 'Índice inválido.';
      console.error(this.mensajeError);
      return;
    }

    const habitosGuardados = JSON.parse(localStorage.getItem('habitos') || '[]');
    console.log('Hábitos guardados:', habitosGuardados);

    if (this.index >= habitosGuardados.length) {
      this.mensajeError = 'Hábito no encontrado en la lista.';
      console.error(this.mensajeError);
      return;
    }

    const habito = habitosGuardados[this.index];
    console.log('Hábito a editar:', habito);

    this.habito = habito.habito;
    this.descripcion = habito.descripcion;
    this.dias = habito.dias;
    this.horaInicio = habito.horaInicio;
    this.horaFinal = habito.horaFinal;
  }

  editarHabito() {
    this.mensajeError = '';

    if (!this.habito) this.mensajeError += 'El campo "Hábito" es obligatorio.\n';
    if (!this.descripcion) this.mensajeError += 'El campo "Descripción" es obligatorio.\n';
    if (this.dias.length === 0) this.mensajeError += 'Debe seleccionar al menos un día.\n';
    if (!this.horaInicio) this.mensajeError += 'El campo "Hora de inicio" es obligatorio.\n';
    if (!this.horaFinal) this.mensajeError += 'El campo "Hora de finalización" es obligatorio.\n';

    if (this.mensajeError) {
      console.error('Errores de validación:', this.mensajeError);
      return;
    }

    const horaInicioDate = new Date(`1970-01-01T${this.horaInicio}:00`);
    const horaFinalDate = new Date(`1970-01-01T${this.horaFinal}:00`);

    if (horaFinalDate <= horaInicioDate) {
      this.mensajeError = 'La hora de finalización no puede ser menor o igual a la hora de inicio.';
      console.error(this.mensajeError);
      return;
    }

    const habitosGuardados = JSON.parse(localStorage.getItem('habitos') || '[]');

    if (this.index < 0 || this.index >= habitosGuardados.length) {
      this.mensajeError = 'No se pudo actualizar el hábito. Índice fuera de rango.';
      console.error(this.mensajeError);
      return;
    }

    // Actualización de los hábitos
    habitosGuardados[this.index] = {
      habito: this.habito,
      descripcion: this.descripcion,
      dias: this.dias,
      horaInicio: this.horaInicio,
      horaFinal: this.horaFinal,
    };

    // Guardar los cambios en localStorage
    localStorage.setItem('habitos', JSON.stringify(habitosGuardados));
    console.log('Hábito actualizado correctamente:', habitosGuardados[this.index]);

    this.mensajeExito = true;
    this.changeDetectorRef.detectChanges();

    setTimeout(() => {
      this.mensajeExito = false;
      this.goToList();
    }, 3000);
  }

  goToList() {
    this.router.navigate(['/listar-habitos']);
  }
}
