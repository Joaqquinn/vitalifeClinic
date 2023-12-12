import { Component, ViewChild, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IonDatetime, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Toast } from '@capacitor/toast';

@Component({
  selector: 'app-mostrarmedicos',
  templateUrl: './mostrarmedicos.page.html',
  styleUrls: ['./mostrarmedicos.page.scss']
})
export class MostrarmedicosPage implements OnInit {

  @ViewChild('datePicker') datePicker!: IonDatetime;
  @ViewChild(IonModal) modal!: IonModal;
  isModalOpen = false;
  selectedMedico:any;
  selectedDate: string | null = null;
  disablesDates: any[] = [];

  constructor(public userService:UserService,
              private router:Router) {
    this.modal = {} as IonModal;
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  disabledDates = (dateString: string) => {
    const disabledDates: string[] = this.userService.feachasAgendadas;

    const selectedDate = new Date(dateString);

    // Check if the selected date is in the array of disabled dates
    return !disabledDates.some((disabledDate: string) => {
      const disabledDateTime = new Date(disabledDate);
      return (
        selectedDate.getUTCFullYear() === disabledDateTime.getUTCFullYear() &&
        selectedDate.getUTCMonth() === disabledDateTime.getUTCMonth() &&
        selectedDate.getUTCDate() === disabledDateTime.getUTCDate()
      );
    });
  };

  abrirCalendario(medico:any){
    this.selectedMedico = medico
    this.userService.getFechas(medico).then(()=>{
      this.setOpen(true)
      console.log(this.userService.feachasAgendadas)
    })
    console.log(this.selectedMedico)
  }

  cancel() {
    this.setOpen(false)
    this.userService.feachasAgendadas = []
  }

  confirm() {
    console.log(this.selectedMedico)
    this.setOpen(false)
    console.log(this.selectedDate)
    if(this.selectedDate !== null){
      this.userService.agendarHora(this.selectedMedico, this.selectedDate)
      console.log("Cita agendada")
    }else{
      console.log("no se selecciono fecha")
    }
    Toast.show({
      text: 'Hora agendada',
      duration: 'long'
    })
    this.selectedDate = null
    this.selectedMedico = null
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
    this.router.navigate(['/registrarmedico']);
  }

  eliminarMedico(paciente:any){
    this.userService.eliminarUsuario(paciente.correo)
  }
}
