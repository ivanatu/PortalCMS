import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VideosSubtitlesService {

  // baseurl = "https://localhost:44386/api";
  baseurl = "https://cwc-cms-api.azurewebsites.net/api";
  constructor(private http: HttpClient,public router: Router) { }

  viewVideoSubtitles() {
    console.log('data returned');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseurl+'/VideoSubtitles', {headers})
  }

  addVideoSubtitles(subtitleForm) {
    console.log(subtitleForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseurl+'/VideoSubtitles', subtitleForm, {headers})
  }

  editVideoSubtitles(id, subtitleForm) {
    console.log(subtitleForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(this.baseurl+`/VideoSubtitles/${id}`, subtitleForm, {headers})
  }

  deleteVideoSubtitles(id) {
    console.log(id);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(this.baseurl+`/VideoSubtitles/${id}`, {headers})
  }
}
