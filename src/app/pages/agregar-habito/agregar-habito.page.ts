import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButton } from '@ionic/angular/standalone';
import {Router} from '@angular/router';

@Component({
  selector: 'app-agregar-habito',
  templateUrl: './agregar-habito.page.html',
  styleUrls: ['./agregar-habito.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput, IonButton]
})
export class AgregarHabitoPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  //Función para cambiar de página
  goToListar() {
    this.router.navigate(['/listar-habitos'])
  }
}
