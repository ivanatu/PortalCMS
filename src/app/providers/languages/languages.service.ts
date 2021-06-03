import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {
  // baseurl = "https://localhost:44386/api";
  baseurl = "https://cwc-cms-api.azurewebsites.net/api";

  constructor(private http: HttpClient,public router: Router) { }

  viewLanguages() {
    console.log('data returned');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseurl+'/Language', {headers})
  }

  addLanguages(languageForm) {
    console.log(languageForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseurl+'/Language', languageForm, {headers})
  }

  editLanguages(id, languageForm) {
    console.log(languageForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(this.baseurl+`/Language/${id}`, languageForm, {headers})
  }

  deleteLanguages(id) {
    console.log(id);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(this.baseurl+`/Language/${id}`, {headers})
  }
}
