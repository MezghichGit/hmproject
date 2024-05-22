import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from '../Models/patient';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http:HttpClient) { }

  getPatients() {
    //const headers=new HttpHeaders({Authorization:'Bearer'+this.token});
   // return this.http.post<Provider>(environment.baseUrl+"/providers",provider,{headers})

        
    return this.http.get<Patient[]>(environment.baseUrl+"/Patients")
  }


  addPatient(patient: Patient) {
    //const headers=new HttpHeaders({Authorization:'Bearer'+this.token});
   // return this.http.post<Provider>(environment.baseUrl+"/providers",provider,{headers})

        console.log(patient);
    return this.http.post<Patient>(environment.baseUrl+"/Patients",patient)
  }
}
