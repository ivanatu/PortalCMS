import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManualCategoriesService {

  // baseurl = "https://localhost:44386/api";
  baseurl = "https://cwc-cms-api.azurewebsites.net/api";
  constructor(private http: HttpClient,public router: Router) { }

  viewManualCategory() {
    console.log('data returned');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseurl+'/Manuals', {headers})
  }

  addManualCategory(categoryForm) {
    console.log(categoryForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseurl+'/Manuals', categoryForm, {headers})
  }

  editManualCategory(id, categoryForm) {
    console.log(categoryForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(this.baseurl+`/Manuals/${id}`, categoryForm, {headers})
  }

  deleteManualCategory(id) {
    console.log(id);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(this.baseurl+`/Manuals/${id}`, {headers})
  }
}
