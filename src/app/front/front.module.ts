import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasificacionComponent } from './pages/clasificacion/clasificacion.component';
import { MainComponent } from './pages/main/main.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';
import { TarjetaJugadorComponent } from './components/tarjeta-jugador/tarjeta-jugador.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    ClasificacionComponent,
    JugadoresComponent,
    MainComponent,
    TarjetaJugadorComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainComponent,
    JugadoresComponent,
    ClasificacionComponent,
    TarjetaJugadorComponent
  ]
})
export class FrontModule { }
