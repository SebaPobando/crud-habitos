import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'listar-habitos',
    loadComponent: () => import('./pages/listar-habitos/listar-habitos.page').then( m => m.ListarHabitosPage)
  },
  {
    path: 'agregar-habito',
    loadComponent: () => import('./pages/agregar-habito/agregar-habito.page').then( m => m.AgregarHabitoPage)
  },
  {
    path: 'editar-habito',
    loadComponent: () => import('./pages/editar-habito/editar-habito.page').then( m => m.EditarHabitoPage)
  },
  {
    path: 'detalles-habito',
    loadComponent: () => import('./pages/detalles-habito/detalles-habito.page').then( m => m.DetallesHabitoPage)
  },
];
