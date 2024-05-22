import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../Services/patient.service';
import { Patient } from '../../Models/patient';
    @Component({
  selector: 'app-liste-patient',
  templateUrl: './liste-patient.component.html',
  styleUrl: './liste-patient.component.css'
})
export class ListePatientComponent implements OnInit {
  patients:Patient[]=[];

constructor(private patientservice:PatientService){}
      ngOnInit(): void {
       this.getAllPatients() ;
      
      }

      getAllPatients(){
        this.patientservice.getPatients().subscribe(
          (data: Patient[])=>
          {
           
            this.patients=data;
            
          },error => console.log(error)
          
          );
      }
      


}
