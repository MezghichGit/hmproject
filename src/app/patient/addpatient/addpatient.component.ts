import { Component } from '@angular/core';
import { Patient } from '../../Models/patient';
 
import { Router } from '@angular/router';
import { PatientService } from '../../Services/patient.service';

@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrl: './addpatient.component.css'
})
export class AddpatientComponent {

constructor(private patientservice:PatientService,private router:Router){}
  addPatient(patientForm:any)
  {

     let patient:Patient={
      nom:patientForm.nom,
      prenom:patientForm.prenom,
      cin:patientForm.cin,
      phone:patientForm.phone
      
     };
     console.log(patient);
   this.patientservice.addPatient(patient).subscribe(data=>{
    this.router.navigate(["dashbaordPatient/listpatient"])
   })
  }

}
