import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'medico',
    loadChildren: () => import('./pages/medico/medico.module').then( m => m.MedicoPageModule)
  },
  {
    path: 'paciente',
    loadChildren: () => import('./pages/paciente/paciente.module').then( m => m.PacientePageModule)
  },
  {
    path: 'registropaciente',
    loadChildren: () => import('./pages/registropaciente/registropaciente.module').then( m => m.RegistropacientePageModule)
  },
  {
    path: 'vistapaciente',
    loadChildren: () => import('./pages/vistapaciente/vistapaciente.module').then( m => m.VistapacientePageModule)
  },
  {
    path: 'reservahora',
    loadChildren: () => import('./pages/reservahora/reservahora.module').then( m => m.ReservahoraPageModule)
  },
  {
    path: 'modificarhora',
    loadChildren: () => import('./pages/modificarhora/modificarhora.module').then( m => m.ModificarhoraPageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./pages/servicios/servicios.module').then( m => m.ServiciosPageModule)
  },

  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'resultadoexamenes',
    loadChildren: () => import('./pages/resultadoexamenes/resultadoexamenes.module').then( m => m.ResultadoexamenesPageModule)
  },
  {
    path: 'vistadoctor',
    loadChildren: () => import('./pages/vistadoctor/vistadoctor.module').then( m => m.VistadoctorPageModule)
  },
  {
    path: 'mensajedoctor',
    loadChildren: () => import('./pages/mensajedoctor/mensajedoctor.module').then( m => m.MensajedoctorPageModule)
  },
  {
    path: 'adminhora',
    loadChildren: () => import('./pages/adminhoradoctor/adminhora.module').then( m => m.AdminhoraPageModule)
  },
  {
    path: 'horasdispo',
    loadChildren: () => import('./pages/horasdispo/horasdispo.module').then( m => m.HorasdispoPageModule)
  },
  {
    path: 'horastomadas',
    loadChildren: () => import('./pages/horastomadas/horastomadas.module').then( m => m.HorastomadasPageModule)
  },
  {
    path: 'recuperarcontra',
    loadChildren: () => import('./pages/recuperarcontra/recuperarcontra.module').then( m => m.RecuperarcontraPageModule)
  },
  {
    path: 'vistaadmin',
    loadChildren: () => import('./pages/vistaadmin/vistaadmin.module').then( m => m.VistaadminPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./pages/editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
  {
    path: 'agregarmedico',
    loadChildren: () => import('./pages/agregarmedico/agregarmedico.module').then( m => m.AgregarmedicoPageModule)
  },
  {
    path: 'registrarmedico',
    loadChildren: () => import('./pages/agregarmedico/agregarmedico.module').then( m => m.AgregarmedicoPageModule)
  },
  {
    path: 'agregarmedico',
    loadChildren: () => import('./pages/agregarmedico/agregarmedico.module').then( m => m.AgregarmedicoPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./pages/camara/camara.module').then( m => m.CamaraPageModule)
  },  {
    path: 'indice',
    loadChildren: () => import('./pages/indice/indice.module').then( m => m.IndicePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
