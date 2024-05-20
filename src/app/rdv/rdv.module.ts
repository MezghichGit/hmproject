import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdvRoutingModule } from './rdv-routing.module';
import { MainrdvComponent } from './mainrdv/mainrdv.component';



@NgModule({
  declarations: [
    MainrdvComponent
  ],
  imports: [
    CommonModule,
    RdvRoutingModule
  ]
})
export class RdvModule { }
