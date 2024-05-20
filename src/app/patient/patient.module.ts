import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { MainpatientComponent } from './mainpatient/mainpatient.component';

import { UpdatePatientComponent } from './update-patient/update-patient.component';

import { ListePatientComponent } from './liste-patient/liste-patient.component';



@NgModule({
  declarations: [
    MainpatientComponent,
    UpdatePatientComponent,

    ListePatientComponent

  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
