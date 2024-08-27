import { ProductoIndividualComponent } from './producto-individual/producto-individual.component';
import { Routes } from '@angular/router';

export const routespages: Routes = [
  {
    path: '',
    loadComponent: () => import('./inicio/inicio.component').then(m => m.InicioComponent)
  },
  {
    path: 'productos',
    loadComponent: () => import('./productos/productos.component').then(m => m.ProductosComponent)
  },
  {
    path: 'productos/:id',
    loadComponent: () => import('./producto-individual/producto-individual.component').then(m => m.ProductoIndividualComponent)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./contacto/contacto.component').then(m => m.ContactoComponent)
  },
];
