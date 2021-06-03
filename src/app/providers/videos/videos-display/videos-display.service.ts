import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VideosDisplayService {

  // baseurl = "https://localhost:44386/api";
  baseurl = "https://cwc-cms-api.azurewebsites.net/api";
  constructor(private http: HttpClient,public router: Router) { }

  viewVideos() {
    console.log('data returned');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(this.baseurl+'/Videos', {headers})
  }

  addVideos(videoForm) {
    console.log(videoForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseurl+'/Videos', videoForm, {headers})
  }

  editVideos(id, videoForm) {
    console.log(videoForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(this.baseurl+`/Videos/${id}`, videoForm, {headers})
  }

  deleteVideos(id, categoryID) {
    console.log(id);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.delete(this.baseurl+`/Videos?id=${id}&categoryID=${categoryID}`, {headers})
  }

  addVideosStream(videoForm){
    console.log(videoForm);
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseurl+`/Videos/UploadVideoFile`, videoForm);
    // console.log("this was");
  }

  // uploadUserImage(base64String: any) {
  //   // const bvn = this.userService.getUserDetails().userBVN;
  //   // upload code goes here
  //   let body = {
  //     Base64Image: base64String,
  //     // BVN: this.util.extEncrypt(bvn),
  //   };
  //   let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.post(this.baseurl+`/Videos/UploadVideoFile`, body, {headers});
    // console.log("this was");

    // const PATH = environment.BASE_URL + environment.CUST_SERV + `/UpdateImage`;
    // let body = {
    //   Base64Image: base64String,
    //   BVN: this.util.extEncrypt(bvn),
    // };
    // body = this.util.addAuthParams(body);
    // // console.log(body);
    // this.http
    //   .post<Response>(PATH, body)
    //   .pipe(
    //     retry(3),
    //     catchError((err) => this.util.handleError(err))
    //   )
    //   .subscribe(
    //     (res: any) => {
    //       // console.log(res); // Delete later
    //       if (res.responseCode === '00') {
    //         // console.log(res);
    //         // const newUserDetails = this.userService.getUserDetails();
    //         // newUserDetails.userImage = base64String;
    //         // this.userService.updateUser(newUserDetails);
    //         alert('Image updated successfully');
    //         this.userImageNotification(
    //           `User image uploaded successfully`,
    //           NotificationType.Success
    //         );
    //       } else {
    //         alert(res.responseDescription);
    //         this.userImageNotification(
    //           res.responseDescription,
    //           NotificationType.Error
    //         );
    //       }
    //     },
    //     (err: HttpErrorResponse) => {
    //       // console.log(err);
    //       this.userImageNotification(err, 'error');
    //     }
    //   );
  // }

}
