import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RdvRoutingModule } from './rdv-routing.module';
import { MainrdvComponent } from './mainrdv/mainrdv.component';
import { ListRdvComponent } from './list-rdv/list-rdv.component';



@NgModule({
  declarations: [
    MainrdvComponent,
    ListRdvComponent
  ],
  imports: [
    CommonModule,
    RdvRoutingModule
  ]
})
export class RdvModule { }
