import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rdv } from '../../rdv';
import { RdvService } from '../../services/rdv.service';

@Component({
  selector: 'app-add-rdv',
  templateUrl: './add-rdv.component.html',
  styleUrl: './add-rdv.component.css'
})
export class AddRDVComponent {
  constructor(private router: Router,private rdvService:RdvService,private toastr: ToastrService) { }



  // Ajout un nouveau rendez-vous

  addRDV(RDVForm: any) {
    
    let RDV :Rdv = {
      ipp: RDVForm.ipp,
      nom: RDVForm.nom,
      prenom: RDVForm.prenom,
      service: RDVForm.service,
      dateRdv:  RDVForm.dateRdv,
      
    };
  
    

    this.rdvService.addRdv(RDV).subscribe(
      
      data => {
        
        this.toastr.success('Ajout du rendez-vous avec succés');
        this.router.navigate(["dashbaordRdv/list"]);

      },
     
      error => {
        this.toastr.error('Erreur lors de l\'ajout du rendez-vous!!!');
        console.log(error)}
      
    );
  


  }

 
}
