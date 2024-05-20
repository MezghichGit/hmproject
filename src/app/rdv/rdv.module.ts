import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdvRoutingModule } from './rdv-routing.module';
import { MainrdvComponent } from './mainrdv/mainrdv.component';
import { AddRDVComponent } from './add-rdv/add-rdv.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainrdvComponent,
    AddRDVComponent,
  ],
  imports: [
    CommonModule,
    RdvRoutingModule,FormsModule
  ]
})
export class RdvModule { }
