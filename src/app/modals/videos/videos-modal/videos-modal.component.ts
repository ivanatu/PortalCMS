import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/providers/data.service';
import { VideosDisplayService } from 'src/app/providers/videos/videos-display/videos-display.service';

@Component({
  selector: 'app-videos-modal',
  templateUrl: './videos-modal.component.html',
  styleUrls: ['./videos-modal.component.scss'],
  providers: [DataService]
})
export class VideosModalComponent implements OnInit {
  videoForm: FormGroup;
  public dataVideoCategoryList$: Observable<[]>;
  myFiles: string[] = [];
  localdata: any;
  
  constructor(public fb: FormBuilder,public dataService: DataService, public videoService: VideosDisplayService,
    private http: HttpClient,
    public dialogRef: MatDialogRef<VideosModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      if (!this.data.videoName) {
        this.createForm();
      } else {
        this.editForm();
      }
    }

  ngOnInit(): void {
    this.dataVideoCategoryList$ = this.dataService.VideoCategoryList;
    this.dataService.getVideoCategoryData().subscribe();
  }

  createForm() {
    this.videoForm = new FormGroup({
      videoName: new FormControl(),
      categoryID: new FormControl(),
      duration: new FormControl(),
      streamingURL: new FormControl(),
    });
    this.videoForm = this.fb.group({
      videoName: ['', [Validators.required]],
      categoryID: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      streamingURL: ['', [Validators.required]],
    })
  }

  editForm() {
    this.videoForm = new FormGroup({
      videoName: new FormControl(),
      categoryID: new FormControl(),
      duration: new FormControl(),
      streamingURL: new FormControl()
    });
    this.videoForm = this.fb.group({
      videoName: [this.data.videoCategory, [Validators.required]],
      categoryID: [this.data.videoCategory, [Validators.required]],
      duration: [this.data.duration, [Validators.required]],
      streamingURL: ['', [Validators.required]]
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  // addVideo(){

  // }

  getFileDetails(e) {      
    //console.log (e.target.files);      
    for (var i = 0; i < e.target.files.length; i++) {      
      this.myFiles.push(e.target.files[i]);      
    }      
  } 

  addVideo() {  
    if (!this.data.categoryName) {
      console.log(this.videoForm.value);
      this.videoService.addVideos(this.videoForm.value)
          .pipe(map(
          data => { this.localdata = data;
            console.log("id",this.localdata.id + "categoryid",this.localdata.categoryID); 
            this.uploadFiles(this.localdata.categoryID, this.localdata.id);
            return data },
          err => { console.log(err); return err }
          ))
          .subscribe(
           
            data=>{
             
              return data;
         },
            err=>{alert("Invalid data");console.log(err)}
         );

    } else {
      console.log(this.videoForm.value);
      this.videoService.editVideos(this.data.id, this.videoForm.value)
        .pipe(map(
          data => { return data },
          err => { console.log(err); return err }
        ))
        .subscribe(
          data => {
            return data;
          },
          err => { alert("Invalid data"); console.log(err) }
        );
    }
  }  

  // this method is triggered when a user selects a new image to upload
// onFileChanges(event) {
//   // console.log(event);
//   const file: File = event.target.files[0];
//   const validateType = (file.type === 'image/png') || (file.type === 'image/jpeg');
//   const validateSize = file.size <= 200000;
//     this.convertImageToBase64(file);
// }

// convertImageToBase64(file: File) {
//   // creating a new image object
//   const reader = new FileReader();
//   reader.readAsDataURL(file);
//   reader.onload = (r: any) => {
//     // console.log(r);
//     // console.log(reader.result);
//     const imageBase64 = reader.result;
//     this.videoService.uploadUserImage(imageBase64);
//     // console.log(imageBase64);
//   };
//   reader.onerror = function (error) {
//     console.error('Error: ', error);
//   };
// }
      
uploadFiles(id, ids) {   
  console.log('this is called');   
  const frmData = new FormData();      
  for (var i = 0; i < this.myFiles.length; i++) {      
    frmData.append("fileUpload", this.myFiles[i]);      
  } 
  const overrides = {
    ID: ids,
    CategoryID: id
  };

  const blobOverrides = JSON.stringify(overrides);
  //   type: 'application/json',
  // });

  //Object jsonDto = "{'iD':`id`, 'CategoryID':ids}";
  // jsonDto: Object = {ID: id, CategoryID: ids};
  console.log("executed",blobOverrides );
  frmData.append('vidDto', blobOverrides);
  let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  this.http.post('https://cwc-cms-api.azurewebsites.net/api/Videos/UploadVideoFile', frmData).subscribe(      
    data => {      
      // SHOW A MESSAGE RECEIVED FROM THE WEB API.      
      // this.sMsg = data as string;      
      console.log("returned message", data );      
    }      
  );      
}  

}
