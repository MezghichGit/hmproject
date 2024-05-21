import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rdv } from '../rdv';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  private url="http://localhost:5015/api"

  constructor( private http:HttpClient) { }



  getRdvs()
  {
    //const headers = new HttpHeaders({ Authorization: 'Bearer '+this.token});
    //return this.http.get<Provider[]>(environment.baseUrl+"/providers",{headers});

    return this.http.get<Rdv[]>(this.url+"/RDVs");
  }

  addRdv(rdv:Rdv)
  {
    //const headers = new HttpHeaders({ Authorization: 'Bearer '+this.token});
   // return this.http.post<Provider>(environment.baseUrl+"/providers", provider,{headers});
   return this.http.post<Rdv>(this.url+"/RDVs",rdv);
  }

  deleteRdv(rdv:Rdv)
  {
    //const headers = new HttpHeaders({ Authorization: 'Bearer '+this.token});
    //return this.http.delete(environment.baseUrl+"/providers/"+provider.id,{headers});
    return this.http.delete(this.url+"/RDVs/"+rdv.ipp);
  }

  updateRdv(rdv:Rdv)
  {
    return this.http.put<Rdv>(this.url+"/RDVs/"+rdv.ipp,rdv);
  }

  getRdvById(ipp:number)
  {
    return this.http.get<Rdv>(this.url+"/RDVs/"+ipp);
  }
  
}
