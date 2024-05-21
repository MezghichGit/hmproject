import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Rdv } from '../../rdv';
import { RdvService } from '../../services/rdv.service';

@Component({
  selector: 'app-update-rdv',
  templateUrl: './update-rdv.component.html',
  styleUrl: './update-rdv.component.css'
})
export class UpdateRDVComponent implements OnInit {
  ipp!:number;
  nom!:string;
  prenom!:string;
  service!:string;
  dateRdv!:string;
  constructor(  private activateRoute : ActivatedRoute,private rdvService:RdvService,private toastr: ToastrService,private router:Router){}
  ngOnInit(): void {

    //Remplir la formulaire de la mise à jour du rendez-vous
    this.activateRoute.params.subscribe((parms)=>{
      this.ipp=parms['id'];
      this.rdvService.getRdvById(this.ipp).subscribe(
        data => {
          this.nom = data.nom;
          this.prenom = data.prenom;
          this.service = data.service;
          this.dateRdv = data.dateRdv;

        }
      );
    })
    
  
  }
  
  // Mettre à jour du rendez-vous

    saveUpdateRdv(){
      let rdv:Rdv = {
        ipp:this.ipp,
        nom:this.nom,
        prenom:this.prenom,
        service:this.service,
        dateRdv:this.dateRdv,
      }
      this.rdvService.updateRdv(rdv).subscribe(
        data => {
          this.toastr.success('Mise à jour du rendez-vous avec succés');
          this.router.navigate(["dashbaordRdv/list"]);
        },error=>{
          this.toastr.warning('la Mise à jour du rendez-vous n\est pas réalisée');

        }
        );
        
      
    }
    
  }


