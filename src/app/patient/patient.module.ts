import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { MainpatientComponent } from './mainpatient/mainpatient.component';

import { ListePatientComponent } from './liste-patient/liste-patient.component';

import { UpdatePatientComponent } from './update-patient/update-patient.component';

//import { ListePatientComponent } from './liste-patient/liste-patient.component';


import { AddpatientComponent } from './addpatient/addpatient.component';



@NgModule({
  declarations: [
    MainpatientComponent,


    UpdatePatientComponent,

    ListePatientComponent,


    ListePatientComponent,


    AddpatientComponent

  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
