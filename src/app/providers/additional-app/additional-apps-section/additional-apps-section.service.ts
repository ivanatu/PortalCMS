import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdditionalAppsSectionService {

  // baseurl = "https://localhost:44386/api";
  baseurl = "https://cwc-cms-api.azurewebsites.net/api";
  constructor(private http: HttpClient,public router: Router) { }

  viewAdditionalAppsSections() {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseurl+'/AdditionalAppsSections', {headers})
  }

  addAdditionalAppsSections(sectionForm) {
    console.log(sectionForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseurl+'/AdditionalAppsSections', sectionForm, {headers})
  }

  editAdditionalAppsSections(id, sectionForm) {
    console.log(sectionForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(this.baseurl+`/AdditionalAppsSections/${id}`, sectionForm, {headers})
  }

  deleteAdditionalAppsSections(id) {
    console.log(id);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(this.baseurl+`/AdditionalAppsSections/${id}`, {headers})
  }
}
