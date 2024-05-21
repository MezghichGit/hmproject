import { Component, OnInit } from '@angular/core';
import { RdvService } from '../../services/rdv.service';
import { Rdv } from '../../rdv';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-rdv',
  templateUrl: './list-rdv.component.html',
  styleUrl: './list-rdv.component.css'
})
export class ListRdvComponent implements OnInit {

rdvs: Rdv[] = [];
constructor(private rdvService:RdvService,private toastr: ToastrService,private router:Router){}

ngOnInit(): void {
this.refresh();
 
}

// Aficher la liste des rendez-vous

refresh() {
  this.rdvService.getRdvs().subscribe(
    (data: Rdv[]) => {
      this.rdvs = data;
     
    },
    error => console.log(error)
  );
}
// Supprimer un rendez-vous

deleteRDV(rdv:Rdv)
  {
    this.rdvService.deleteRdv(rdv).subscribe(
      data=>{
      
       this.toastr.success('Suppression du rendez-vous avec succés');
       
        this.refresh();
      }
    );
  }

  // mettre à jour rendez-vous


  updateRDV(rdv:Rdv)
  {
    
    this.router.navigate(["dashbaordRdv/update",rdv.ipp]);
  }


}
