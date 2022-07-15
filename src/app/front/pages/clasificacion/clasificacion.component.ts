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
      portraitUrl: "../../../assets/portraits/jan.jpg",
      nombre     : "Erwin",
      rango      : 1,
      sable      : "Single",
      banderaUrl : "../../../assets/banderitas/cl.png"
    },
    {
      portraitUrl: "../../../assets/portraits/gran.jpg",
      nombre     : "Sapo",
      rango      : 2,
      sable      : "Staff",
      banderaUrl : "../../../assets/banderitas/cl.png"
    },
    {
      portraitUrl: "../../../assets/portraits/vieja.jpg",
      nombre     : "Snake",
      rango      : 3,
      sable      : "Single",
      banderaUrl : "../../../assets/banderitas/ar.png"
    },
    {
      portraitUrl: "../../../assets/portraits/reelo.jpg",
      nombre     : "Thunder",
      rango      : 4,
      sable      : "Single",
      banderaUrl : "../../../assets/banderitas/ar.png"
    },
    {
      portraitUrl: "../../../assets/portraits/lando.jpg",
      nombre     : "Rain",
      rango      : 5,
      sable      : "Duals",
      banderaUrl : "../../../assets/banderitas/ar.png"
    },
    {
      portraitUrl: "../../../assets/portraits/alora.jpg",
      nombre     : "José",
      rango      : 6,
      sable      : "Single",
      banderaUrl : "../../../assets/banderitas/ar.png"
    },
    {
      portraitUrl: "../../../assets/portraits/shadowtrooper.jpg",
      nombre     : "Chapa",
      rango      : 7,
      sable      : "Single",
      banderaUrl : "../../../assets/banderitas/ar.png"
    },
    {
      portraitUrl: "../../../assets/portraits/rodian.jpg",
      nombre     : "Jaden",
      rango      : 8,
      sable      : "Single",
      banderaUrl : "../../../assets/banderitas/ar.png"
    },
    {
      portraitUrl: "../../../assets/portraits/reborn_new.jpg",
      nombre     : "Wotan",
      rango      : 9,
      sable      : "Single",
      banderaUrl : "../../../assets/banderitas/ve.png"
    },
    {
      portraitUrl: "../../../assets/portraits/cultist_brown.jpg",
      nombre     : "Keyzen",
      rango      : 10,
      sable      : "Single",
      banderaUrl : "../../../assets/banderitas/cl.png"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
