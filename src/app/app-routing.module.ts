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
    path: 'resultadoexamenes',
    loadChildren: () => import('./pages/resultadoexamenes/resultadoexamenes.module').then( m => m.ResultadoexamenesPageModule)
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
  },
  {
    path: 'indice',
    loadChildren: () => import('./pages/indice/indice.module').then( m => m.IndicePageModule)
  },  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'horamedica',
    loadChildren: () => import('./pages/horamedica/horamedica.module').then( m => m.HoramedicaPageModule)
  },
  {
    path: 'mostrarpacientes',
    loadChildren: () => import('./pages/mostrarpacientes/mostrarpacientes.module').then( m => m.MostrarpacientesPageModule)
  },
  {
    path: 'mostrarmedicos',
    loadChildren: () => import('./pages/mostrarmedicos/mostrarmedicos.module').then( m => m.MostrarmedicosPageModule)
  },
  {
    path: 'registrarmedico',
    loadChildren: () => import('./pages/registrarmedico/registrarmedico.module').then( m => m.RegistrarmedicoPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
