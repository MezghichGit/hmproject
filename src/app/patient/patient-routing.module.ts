import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

const routes: Routes = [

{

  path:"ListePatient", component:ListePatientComponent
},
{

  path:"AddPatient", component:AddpatientComponent
},

{

  path:"UpdatePatient", component:UpdatePatientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
