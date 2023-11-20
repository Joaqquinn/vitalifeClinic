import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  async canActivate(): Promise<boolean> {
    // Asegúrate de que el usuario esté cargado antes de verificar su rol
      return true;
    }
  }

