import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { MainpatientComponent } from './mainpatient/mainpatient.component';
import { AddpatientComponent } from './addpatient/addpatient.component';


@NgModule({
  declarations: [
    MainpatientComponent,
    AddpatientComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
