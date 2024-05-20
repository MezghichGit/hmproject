import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [

   {
    path: 'dashbaordRdv',
    loadChildren: () => import('./rdv/rdv.module').then(m => m.RdvModule)
  },


  {
    path:"home", component:NavbarComponent
  },
  {
    path:"", component:NavbarComponent
  }
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
