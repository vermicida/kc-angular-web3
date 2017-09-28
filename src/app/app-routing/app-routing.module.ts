import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { RutaAComponent } from '../ruta-a/ruta-a.component';
import { RutaBComponent } from '../ruta-b/ruta-b.component';

// Creamos la colección de rutas que va a soportar nuestra app. Las rutas
// son pares 'path' / 'component': en el primero indicamos la ruta a navegar,
// y en el segundo el componente que responde de dicha ruta.
const rutas: Routes = [
  {
    path: 'lista-contactos',
    component: RutaAComponent
  },
  {
    path: 'nuevo-contacto',
    component: RutaBComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/lista-contactos'
  }
];

// Debemos importar en el módulo de routing uno nuevo creado a partir
// de 'RouterModule'. Este nuevo módulo contendrá el Router y las
// directivas necesarias para gestionar las rutas definidas más arriba.
// Además, hacemos export de 'RouterModule' para evitar tener que
// importarlo explícitamente en el módulo 'AppModule'.
@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
