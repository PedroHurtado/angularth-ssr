import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'pagina1',
    loadComponent:()=>import('./pagina1/pagina1.component').then(c=>c.Pagina1Component)
  },

  {
    path:'about',
    loadComponent:()=>import('./about/about.component').then(c=>c.AboutComponent)
  }
];
