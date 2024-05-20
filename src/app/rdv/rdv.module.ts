import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdvRoutingModule } from './rdv-routing.module';
import { MainrdvComponent } from './mainrdv/mainrdv.component';
import { UpdateRDVComponent } from './update-rdv/update-rdv.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    MainrdvComponent,
    UpdateRDVComponent] ,
  imports: [
    CommonModule,
    FormsModule,
    RdvRoutingModule
  ]
})
export class RdvModule { }
