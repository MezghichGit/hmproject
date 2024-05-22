import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { MainpatientComponent } from './mainpatient/mainpatient.component';

import { ListePatientComponent } from './liste-patient/liste-patient.component';

import { UpdatePatientComponent } from './update-patient/update-patient.component';

//import { ListePatientComponent } from './liste-patient/liste-patient.component';


import { AddpatientComponent } from './addpatient/addpatient.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



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
    PatientRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class PatientModule { }
