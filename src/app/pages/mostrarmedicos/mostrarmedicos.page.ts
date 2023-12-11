import { Component, ViewChild, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IonDatetime, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-mostrarmedicos',
  templateUrl: './mostrarmedicos.page.html',
  styleUrls: ['./mostrarmedicos.page.scss']
})
export class MostrarmedicosPage implements OnInit {

  @ViewChild('datePicker') datePicker!: IonDatetime;
  @ViewChild(IonModal) modal!: IonModal;
  isModalOpen = false;
  selectedMedico:string = "";
  selectedDate: string | null = null;

  constructor(public userService:UserService,
              private router:Router) {
    this.modal = {} as IonModal;
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  disabledDates = (dateString: string) => {
    const disabledDates = [
      '2023-12-21T00:00:00',
      '2023-12-22T00:00:00',
      '2023-12-23T00:00:00',
      '2024-01-11T00:00:00'
    ]; // Array of disabled dates

    const selectedDate = new Date(dateString);

    // Check if the selected date is in the array of disabled dates
    return !disabledDates.some(disabledDate => {
      const disabledDateTime = new Date(disabledDate);
      return (
        selectedDate.getUTCFullYear() === disabledDateTime.getUTCFullYear() &&
        selectedDate.getUTCMonth() === disabledDateTime.getUTCMonth() &&
        selectedDate.getUTCDate() === disabledDateTime.getUTCDate()
      );
    });
  };

  abrirCalendario(medico:any){
    this.setOpen(true)
    this.selectedMedico = medico.nombre + " " + medico.apellidoP
  }

  cancel() {
    this.setOpen(false)
  }

  confirm() {
    this.setOpen(false)
    console.log(this.selectedDate)
  }

  onDateChange(event:any) {
    this.selectedDate = event.detail.value;
  }

  ngOnInit() {
    this.userService.getMedicos();
  }

  verPaciente(paciente:any){
    console.log("VER MEDICO" + paciente.correo)
  }

  agregarMedico(){
    console.log("agregar MEDICO")
    this.router.navigate(['/registrarmedico']);
  }

  eliminarMedico(paciente:any){
    this.userService.eliminarUsuario(paciente.correo)
  }
}
