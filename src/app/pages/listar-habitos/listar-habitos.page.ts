import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton } from '@ionic/angular/standalone';

export interface Habito {
  habito: string;
  descripcion: string;
  dias: string[];
  horaInicio: string;
  horaFinal: string;
  imagenUrl: string;
}

@Component({
  selector: 'app-listar-habitos',
  templateUrl: './listar-habitos.page.html',
  styleUrls: ['./listar-habitos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton]
})
export class ListarHabitosPage implements OnInit {

  habitosPredeterminados: Habito[] = [ { habito: "Estudiar", descripcion: "Revisar y repasar los temas de programación.", dias: ["Lunes", "Miércoles", "Viernes"], horaInicio: "18:00", horaFinal: "20:00", imagenUrl: "https://unsplash.com/photos/IjQdCrknYXI/download?force=true&w=640" }, { habito: "Comer saludable", descripcion: "Seguir una dieta balanceada y evitar comida rápida.", dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"], horaInicio: "13:00", horaFinal: "13:30", imagenUrl: "https://unsplash.com/photos/LzeNab6mRZY/download?force=true&w=640" }, { habito: "Hacer ejercicio", descripcion: "Realizar una rutina de ejercicios en el gimnasio.", dias: ["Martes", "Jueves", "Sábado"], horaInicio: "08:00", horaFinal: "09:00", imagenUrl: "https://unsplash.com/photos/vqDAUejnwKw/download?force=true&w=640" }, { habito: "Leer", descripcion: "Leer un capítulo de un libro de desarrollo personal.", dias: ["Domingo"], horaInicio: "17:00", horaFinal: "18:00", imagenUrl: "https://unsplash.com/photos/mmWqrsjZ4Lw/download?force=true&w=640" }, { habito: "Meditar", descripcion: "Practicar meditación para reducir el estrés y mejorar la concentración.", dias: ["Lunes", "Miércoles", "Viernes"], horaInicio: "07:30", horaFinal: "08:00", imagenUrl: "https://unsplash.com/photos/vr0qTmmHf84/download?force=true&w=640" } ];

  habitos: Habito[] = [];
  habitosEliminados: string[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.cargarHabitos();
  }

  ionViewWillEnter() {
    // Cargar los hábitos cada vez que se vuelve a esta página
    this.cargarHabitos();
  }

  cargarHabitos() {
    const habitosGuardados = localStorage.getItem('habitos');
    const habitosDesdeStorage = habitosGuardados ? JSON.parse(habitosGuardados) : [];

    const habitosEliminadosGuardados = localStorage.getItem('habitosEliminados');
    this.habitosEliminados = habitosEliminadosGuardados ? JSON.parse(habitosEliminadosGuardados) : [];

    this.habitos = [...habitosDesdeStorage];

    this.habitosPredeterminados.forEach(habitoPredeterminado => {
      if (!this.habitosEliminados.includes(habitoPredeterminado.habito)) {
        if (!this.habitos.some(habito => habito.habito === habitoPredeterminado.habito)) {
          this.habitos.push(habitoPredeterminado);
        }
      }
    });
  }

  eliminarHabito(index: number) {
    const habitoAEliminar = this.habitos[index].habito;
    this.habitos.splice(index, 1);

    if (this.habitosPredeterminados.some(habito => habito.habito === habitoAEliminar)) {
      if (!this.habitosEliminados.includes(habitoAEliminar)) {
        this.habitosEliminados.push(habitoAEliminar);
        localStorage.setItem('habitosEliminados', JSON.stringify(this.habitosEliminados));
      }
    }

    this.actualizarHabitosEnStorage();
  }

  actualizarHabitosEnStorage() {
    localStorage.setItem('habitos', JSON.stringify(this.habitos));
  }

  goToHome() {
    this.router.navigate(['../home']);
  }
}
