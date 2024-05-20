import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { patient } from '../Patient';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})
export class UpdatePatientComponent {

  //ID!:string;
  Nom!:string;
  Prenom!:string;
  cin!:string;
  constructor(  private activateRoute : ActivatedRoute,
    private router:Router
  ){}
  ngOnInit(): void {
    this.activateRoute.params.subscribe((parms)=>{
      this.Nom=parms['Nom'];
    })

  }
  saveUpdatePatient(){
    let patient :patient={
      Nom:this.Nom,
      Prenom:this.Prenom,
      cin:this.cin,
    }
  }
}
