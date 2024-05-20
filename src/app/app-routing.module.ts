import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [

   {
    path: 'dashbaordPatient',
    loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
  },


  {
    path:"home", component:NavbarComponent
  },
  {
    path:"", component:NavbarComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
