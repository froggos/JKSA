import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../interfaces/jugadores.interface';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.component.html',
  styleUrls: ['./clasificacion.component.css']
})
export class ClasificacionComponent implements OnInit {

  jugadores: Jugador[] = [
    {
      portraitUrl: "../../../assets/portraits/reborn_new.jpg",
      nombre     : "Erwin",
      rango      : 1,
      sable      : "Single"
    },
    {
      portraitUrl: "../../../assets/portraits/cultist_brown.jpg",
      nombre     : "Sapo",
      rango      : 2,
      sable      : "Staff"
    },
    {
      portraitUrl: "../../../assets/portraits/vieja.jpg",
      nombre     : "Snake",
      rango      : 3,
      sable      : "Single"
    },
    {
      portraitUrl: "../../../assets/portraits/reelo.jpg",
      nombre     : "Thunder",
      rango      : 4,
      sable      : "Single"
    },
    {
      portraitUrl: "../../../assets/portraits/lando.jpg",
      nombre     : "Rain",
      rango      : 5,
      sable      : "Duals"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
