import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './front/pages/main/main.component';
import { ClasificacionComponent } from './front/pages/clasificacion/clasificacion.component';
import { JugadoresComponent } from './front/pages/jugadores/jugadores.component';
import { LoginComponent } from './front/pages/login/login.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: MainComponent,
  },
  {
    path: 'ranking',
    component: ClasificacionComponent,
  },
  {
    path: 'jugadores',
    component: JugadoresComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
