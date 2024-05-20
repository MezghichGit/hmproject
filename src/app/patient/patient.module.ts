import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { MainpatientComponent } from './mainpatient/mainpatient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';


@NgModule({
  declarations: [
    MainpatientComponent,
    UpdatePatientComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
