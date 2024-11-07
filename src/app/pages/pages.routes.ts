
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
    path: 'nosotros',
    loadComponent: () => import('./nosotros/nosotros.component').then(m => m.NosotrosComponent)
  },
  {
    path: 'productos/:name',
    loadComponent: () => import('./producto-individual/producto-individual.component').then(m => m.ProductoIndividualComponent)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./contacto/contacto.component').then(m => m.ContactoComponent)
  },
];
