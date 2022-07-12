import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasificacionComponent } from './pages/clasificacion/clasificacion.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { TarjetaJugadorComponent } from './components/tarjeta-jugador/tarjeta-jugador.component';



@NgModule({
  declarations: [
    ClasificacionComponent,
    JugadoresComponent,
    LoginComponent,
    MainComponent,
    TarjetaJugadorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent,
    JugadoresComponent,
    ClasificacionComponent,
    LoginComponent,
    TarjetaJugadorComponent
  ]
})
export class FrontModule { }
