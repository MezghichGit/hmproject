import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ListePatientComponent } from './liste-patient/liste-patient.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
 
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

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
