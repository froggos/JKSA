import { Component, Input, OnInit } from '@angular/core';
import { Jugador } from '../../interfaces/jugadores.interface';

@Component({
  selector: 'app-tarjeta-jugador',
  templateUrl: './tarjeta-jugador.component.html',
  styleUrls: ['./tarjeta-jugador.component.css']
})
export class TarjetaJugadorComponent implements OnInit {

  @Input() jugadores:Jugador[] = [];

  constructor() {}

  ngOnInit(): void {
  }

}
