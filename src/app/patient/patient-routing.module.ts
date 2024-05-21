import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
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
=======
import { AddpatientComponent } from './addpatient/addpatient.component';
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { MainpatientComponent } from './mainpatient/mainpatient.component';

const routes: Routes = [

  {
    path: '',
    component: MainpatientComponent,
    children:[
      {
        path: 'listpatient',
       component: ListePatientComponent,
      },
      {
        path: 'addpatient',
       component: AddpatientComponent,
      },
      {
        path: 'updatepatient',
       component: UpdatePatientComponent,
      }
    ]
  }


>>>>>>> f1542797a9a66324abe7cbbae2f125af41602e8f
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
