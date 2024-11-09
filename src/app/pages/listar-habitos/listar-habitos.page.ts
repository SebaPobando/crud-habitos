import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonToggle, IonItem, IonLabel } from '@ionic/angular/standalone';

export interface Habito {
  habito:String,
  descripcion:String,
  dias:String[],
  horaInicio:String,
  horaFinal:String,
  imagenUrl:String
}

@Component({
  selector: 'app-listar-habitos',
  templateUrl: './listar-habitos.page.html',
  styleUrls: ['./listar-habitos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonToggle, IonItem, IonLabel]
})
export class ListarHabitosPage implements OnInit {

  habitos: Habito[] = [
    {
      habito: "Estudiar",
      descripcion: "Revisar y repasar los temas de programación.",
      dias: ["Lunes", " Miércoles", " Viernes"],
      horaInicio: "18:00",
      horaFinal: "20:00",
      imagenUrl: "https://unsplash.com/photos/IjQdCrknYXI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8c3R1ZHl8ZXN8MHx8fHwxNzMwMzI1MTc2fDA&force=true&w=640"
    },
    {
      habito: "Comer saludable",
      descripcion: "Seguir una dieta balanceada y evitar comida rápida.",
      dias: ["Lunes", " Martes", " Miércoles", " Jueves", " Viernes"],
      horaInicio: "13:00",
      horaFinal: "13:30",
      imagenUrl: "https://unsplash.com/photos/LzeNab6mRZY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8Q09NRVIlMjBTQUxVREFCTEV8ZXN8MHx8fHwxNzMwMzQwNzQ3fDA&force=true&w=640"
    },
    {
      habito: "Hacer ejercicio",
      descripcion: "Realizar una rutina de ejercicios en el gimnasio.",
      dias: ["Martes", " Jueves", " Sábado"],
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
      dias: ["Lunes", " Miércoles", " Viernes"],
      horaInicio: "07:30",
      horaFinal: "08:00",
      imagenUrl: "https://unsplash.com/photos/vr0qTmmHf84/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzZ8fE1lZGl0YXJ8ZXN8MHwwfHx8MTczMDM0MDk0MXww&force=true&w=640"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  eliminarHabito(index:number) {
    this.habitos.splice(index,1)
  }

}
