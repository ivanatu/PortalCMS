import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AdditionalAppCategoriesService {

  // baseurl = "https://localhost:44386/api";
  baseurl = "https://cwc-cms-api.azurewebsites.net/api";
  
  constructor(private http: HttpClient,public router: Router) { }

  viewAdditionalApps() {
    console.log('data returned');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseurl+'/AdditionalApps', {headers})
  }

  addAdditionalApps(categoryForm) {
    console.log(categoryForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseurl+'/AdditionalApps', categoryForm, {headers})
  }

  editAdditionalApps(id, categoryForm) {
    console.log(categoryForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(this.baseurl+`/AdditionalApps/${id}`, categoryForm, {headers})
  }

  deleteAdditionalApps(id, sectionID) {
    console.log(id);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(this.baseurl+`/AdditionalApps?id=${id}&sectionID=${sectionID}`, {headers})
  }
}
