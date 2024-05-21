import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdvRoutingModule } from './rdv-routing.module';
import { MainrdvComponent } from './mainrdv/mainrdv.component';
import { ListRdvComponent } from './list-rdv/list-rdv.component';

import { AddRDVComponent } from './add-rdv/add-rdv.component';
import { FormsModule } from '@angular/forms';

import { UpdateRDVComponent } from './update-rdv/update-rdv.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    MainrdvComponent,UpdateRDVComponent,ListRdvComponent,

    AddRDVComponent
  ],
  imports: [
    CommonModule,
    RdvRoutingModule,FormsModule,HttpClientModule,


    CommonModule,
    FormsModule,
    RdvRoutingModule,
    
    

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class RdvModule { }
