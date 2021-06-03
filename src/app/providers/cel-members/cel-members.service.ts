import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CelMembersService {
  
  // baseurl = "https://localhost:44386/api";
  baseurl = "https://cwc-cms-api.azurewebsites.net/api";
  constructor(private http: HttpClient,public router: Router) { }

  viewCelMembers() {
    console.log('data returned');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseurl+'/CELMembers', {headers})
  }

  addCelMembers(celForm) {
    console.log(celForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseurl+'/CELMembers', celForm, {headers})
  }

  editCelMembers(id, celForm) {
    console.log(celForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(this.baseurl+`/CELMembers/${id}`, celForm, {headers})
  }

  deleteCelMembers(id) {
    console.log(id);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(this.baseurl+`/CELMembers/${id}`, {headers})
  }
}
