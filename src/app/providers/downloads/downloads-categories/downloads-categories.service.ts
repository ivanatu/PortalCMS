import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DownloadsCategoriesService {
  // baseurl = "https://localhost:44386/api";
  baseurl = "https://cwc-cms-api.azurewebsites.net/api";
  constructor(private http: HttpClient,public router: Router) { }

  viewDownloads() {
    console.log('data returned');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseurl+'/Downloads', {headers})
  }

  addDownloads(categoryForm) {
    console.log(categoryForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseurl+'/Downloads', categoryForm, {headers})
  }

  editDownloads(id, categoryForm) {
    console.log(categoryForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(this.baseurl+`/Downloads/${id}`, categoryForm, {headers})
  }

  deleteDownloads(id, sectionID) {
    console.log(id);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(this.baseurl+`/Downloads?id=${id}&sectionID=${sectionID}`, {headers})
  }

}
