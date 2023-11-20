import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  private apiKey = 'AIzaSyDfbr4xXnZFhgum58KMTpvdnfDdrxNjGsc'; // Reemplaza con tu clave de API real

  constructor(private http: HttpClient) {}


  getPlace(lat: number, lng: number) {
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=1&key=${this.apiKey}`;
    return this.http.get(url);
  }
}
