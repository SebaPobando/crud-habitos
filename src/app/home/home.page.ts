import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {

  constructor(private router: Router) {}

  // Ir a agregar hábito
  goToAgregar() {
    this.router.navigate(['../agregar-habito']);
  }

  // Ir a listar hábitos
  goToListar() {
    this.router.navigate(['../listar-habitos']);
  }
}
