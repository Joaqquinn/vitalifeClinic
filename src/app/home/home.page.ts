import { Component, OnInit,OnDestroy } from '@angular/core';
import { UbicacionService } from '../services/ubicacion.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ubicacionActual: string = 'Obteniendo ubicación...';
  watchId: number | null = null;
  currentLocation: string = '';

  constructor(private ubicacionService:UbicacionService) {}

  
  







}
