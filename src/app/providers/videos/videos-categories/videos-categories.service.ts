import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VideosCategoriesService {

  // baseurl = "https://localhost:44386/api";
  baseurl = "https://cwc-cms-api.azurewebsites.net/api";
  constructor(private http: HttpClient,public router: Router) { }

  viewVideoCategories() {
    console.log('data returned');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseurl+'/VideoCategories', {headers})
  }

  addVideoCategories(categoryForm) {
    console.log(categoryForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseurl+'/VideoCategories', categoryForm, {headers})
  }

  editVideoCategories(id, categoryForm) {
    console.log(categoryForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(this.baseurl+`/VideoCategories/${id}`, categoryForm, {headers})
  }

  deleteVideoCategories(id) {
    console.log(id);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(this.baseurl+`/VideoCategories/${id}`, {headers})
  }
}
