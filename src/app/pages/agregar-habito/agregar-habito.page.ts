import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonSelect, IonSelectOption, IonLabel, IonDatetime, IonAlert, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-agregar-habito',
  templateUrl: './agregar-habito.page.html',
  styleUrls: ['./agregar-habito.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton, IonSelect, IonSelectOption, IonLabel, IonDatetime, IonAlert, IonItem]
})
export class AgregarHabitoPage implements OnInit {
  habito: string = '';
  descripcion: string = '';
  dias: string[] = [];
  horaInicio: string = '';
  horaFinal: string = '';
  mensajeError: string = ''; 
  mensajeExito: boolean = false; 

  constructor(private router: Router) {}

  ngOnInit() {}

  agregarHabito() {
    // Limpiar el mensaje de error 
    this.mensajeError = '';

    // Validaciones
    if (!this.habito) {
      this.mensajeError += 'El campo "Hábito" es obligatorio.\n';
    }
    if (!this.descripcion) {
      this.mensajeError += 'El campo "Descripción" es obligatorio.\n';
    }
    if (this.dias.length === 0) {
      this.mensajeError += 'Debe seleccionar al menos un día.\n';
    }
    if (!this.horaInicio) {
      this.mensajeError += 'El campo "Hora de inicio" es obligatorio.\n';
    }
    if (!this.horaFinal) {
      this.mensajeError += 'El campo "Hora de finalización" es obligatorio.\n';
    }

    // Si hay errores, no continuar
    if (this.mensajeError) {
      return;
    }

    // Validar que la hora de finalización no sea menor a la hora de inicio
    const horaInicioDate = new Date(`1970-01-01T${this.horaInicio}:00`);
    const horaFinalDate = new Date(`1970-01-01T${this.horaFinal}:00`);

    if (horaFinalDate <= horaInicioDate) {
      this.mensajeError += 'La hora de finalización no puede ser menor o igual a la hora de inicio.\n';
      return;
    }

    // Limpiar el mensaje de error si todo es válido
    this.mensajeError = '';

    // Crear el nuevo hábito
    const nuevoHabito = {
      habito: this.habito,
      descripcion: this.descripcion,
      dias: this.dias,
      horaInicio: this.horaInicio,
      horaFinal: this.horaFinal,
      imagenUrl: 'https://unsplash.com/photos/7JyQGcWxBSI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjJ8fGhhYml0b3xlc3wwfDB8fHwxNzMxMTc3Njg2fDI&force=true&w=640', // Imagen predeterminada
    };

    // Cargar los hábitos existentes desde localStorage
    const habitosGuardados = JSON.parse(localStorage.getItem('habitos') || '[]');

    // Agregar el nuevo hábito a la lista
    habitosGuardados.push(nuevoHabito);

    // Guardar los hábitos actualizados en localStorage
    localStorage.setItem('habitos', JSON.stringify(habitosGuardados));

    // Mostrar el mensaje de éxito
    this.mensajeExito = true;

    // Limpiar los inputs
    this.habito = '';
    this.descripcion = '';
    this.dias = [];
    this.horaInicio = '';
    this.horaFinal = '';

    // Tiempo para ocultar mensaje de error
    setTimeout(() => {
      this.mensajeExito = false;
    }, 5000);
  }

  goToHome() {
    this.router.navigate(['../home']);
  }
}
