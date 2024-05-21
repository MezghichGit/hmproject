import { Component, OnInit } from '@angular/core';
import { RdvService } from '../../services/rdv.service';
import { Rdv } from '../../rdv';

@Component({
  selector: 'app-list-rdv',
  templateUrl: './list-rdv.component.html',
  styleUrl: './list-rdv.component.css'
})
export class ListRdvComponent implements OnInit {

rdvs: Rdv[] = [];
constructor(private rdvService:RdvService){}

ngOnInit(): void {
this.refresh();
 
}
refresh() {
  this.rdvService.getRdvs().subscribe(
    (data: Rdv[]) => {
      this.rdvs = data;
      console.log(data)
    },
    error => console.log(error)
  );
}

}
