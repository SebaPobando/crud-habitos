import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar-habito',
  templateUrl: './agregar-habito.page.html',
  styleUrls: ['./agregar-habito.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton, IonSelect, IonSelectOption]
})
export class AgregarHabitoPage implements OnInit {
  habito: string = '';
  descripcion: string = '';
  dias: string[] = [];
  horaInicio: string = '';
  horaFinal: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  agregarHabito() {
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
  
    // Navegar a la página de listar hábitos
    this.router.navigate(['/listar-habitos']);
  }

  goToHome() {
    this.router.navigate(['../home']);
  }
}