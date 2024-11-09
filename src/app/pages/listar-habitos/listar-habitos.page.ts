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

  // Lista de hábitos predeterminados
  habitosPredeterminados: Habito[] = [
    {
      habito: "Estudiar",
      descripcion: "Revisar y repasar los temas de programación.",
      dias: ["Lunes", "Miércoles", "Viernes"],
      horaInicio: "18:00",
      horaFinal: "20:00",
      imagenUrl: "https://unsplash.com/photos/IjQdCrknYXI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8c3R1ZHl8ZXN8MHx8fHwxNzMwMzI1MTc2fDA&force=true&w=640"
    },
    {
      habito: "Comer saludable",
      descripcion: "Seguir una dieta balanceada y evitar comida rápida.",
      dias: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
      horaInicio: "13:00",
      horaFinal: "13:30",
      imagenUrl: "https://unsplash.com/photos/LzeNab6mRZY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8Q09NRVIlMjBTQUxVREFCTEV8ZXN8MHx8fHwxNzMwMzQwNzQ3fDA&force=true&w=640"
    },
    {
      habito: "Hacer ejercicio",
      descripcion: "Realizar una rutina de ejercicios en el gimnasio.",
      dias: ["Martes", "Jueves", "Sábado"],
      horaInicio: "08:00",
      horaFinal: "09:00",
      imagenUrl: "https://unsplash.com/photos/vqDAUejnwKw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fEVqZXJjaWNpb3xlc3wwfDB8fHwxNzMwMzQwNzgyfDA&force=true&w=640"
    },
    {
      habito: "Leer",
      descripcion: "Leer un capítulo de un libro de desarrollo personal.",
      dias: ["Domingo"],
      horaInicio: "17:00",
      horaFinal: "18:00",
      imagenUrl: "https://unsplash.com/photos/mmWqrsjZ4Lw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mzl8fExlZXJ8ZXN8MHwwfHx8MTczMDM0MDkwNnww&force=true&w=640"
    },
    {
      habito: "Meditar",
      descripcion: "Practicar meditación para reducir el estrés y mejorar la concentración.",
      dias: ["Lunes", "Miércoles", "Viernes"],
      horaInicio: "07:30",
      horaFinal: "08:00",
      imagenUrl: "https://unsplash.com/photos/vr0qTmmHf84/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzZ8fE1lZGl0YXJ8ZXN8MHwwfHx8MTczMDM0MDk0MXww&force=true&w=640"
    }
  ];

  // Lista que mantiene los hábitos
  habitos: Habito[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Cargar hábitos guardados desde localStorage
    this.cargarHabitos();
  }

  cargarHabitos() {
    // Cargar los hábitos desde localStorage
    const habitosGuardados = localStorage.getItem('habitos');
    let habitosDesdeStorage = habitosGuardados ? JSON.parse(habitosGuardados) : [];

    // Combina los hábitos predeterminados con los hábitos guardados, evitando duplicados
    this.habitos = [...this.habitosPredeterminados, ...habitosDesdeStorage];
    
    // Eliminar duplicados basados en el nombre del hábito
    this.habitos = this.eliminarDuplicados(this.habitos);
  }

  eliminarDuplicados(habitos: Habito[]): Habito[] {
    return habitos.filter((value, index, self) =>
      index === self.findIndex((t) => (
        t.habito === value.habito
      ))
    );
  }

  eliminarHabito(index: number) {
    // Eliminar el hábito de la lista
    this.habitos.splice(index, 1);

    // Actualizar el localStorage con la lista actualizada
    this.actualizarHabitosEnStorage();
  }

  actualizarHabitosEnStorage() {
    // Guardar los hábitos actualizados en localStorage
    localStorage.setItem('habitos', JSON.stringify(this.habitos));
  }

  goToHome() {
    // Navegar a la página de inicio
    this.router.navigate(['../home']);
  }
}
