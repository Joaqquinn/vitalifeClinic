import { Injectable } from '@angular/core';
declare var gapi: any;


@Injectable({
  providedIn: 'root'
})
export class GoogleCalendarServiceService {

  private clientId = '76737177694-86ko7l3jftf8p8ehf1smtq19t1ln4n26.apps.googleusercontent.com';
  private apiKey = 'AIzaSyDfbr4xXnZFhgum58KMTpvdnfDdrxNjGsc';
  private discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  private scope = "https://www.googleapis.com/auth/calendar";

  constructor(
    
  ) { 
    this.initClient(); // Llamas a la función para inicializar el cliente cuando el servicio es creado

  }

  initClient(): void {
    // Esta función inicializa el cliente de gapi.
    gapi.load('client:auth2', () => {
      return gapi.client.init({
        apiKey: this.apiKey,
        clientId: this.clientId,
        discoveryDocs: this.discoveryDocs,
        scope: this.scope
      }).then(() => {
        // Aquí puedes verificar si el usuario ya está autenticado
        if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
          // Manejar el estado de inicio de sesión si es necesario
        }
      }).catch((error: any) => {
        console.error("Error al inicializar Google API client", error);
      });
    });
  }


  signIn(): Promise<void> {
    // Esta función maneja el inicio de sesión del usuario.
    return gapi.auth2.getAuthInstance().signIn();
  }

  signOut(): Promise<void> {
    // Esta función maneja el cierre de sesión del usuario.
    return gapi.auth2.getAuthInstance().signOut();
  }
  addEvent(event: any): Promise<any> {
    // Esta función crea un evento en el calendario del usuario.
    return gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': event
    });
  }

  




}
