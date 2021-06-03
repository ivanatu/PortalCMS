import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manuals-display-modal',
  templateUrl: './manuals-display-modal.component.html',
  styleUrls: ['./manuals-display-modal.component.scss']
})
export class ManualsDisplayModalComponent implements OnInit {
  pdfForm: FormGroup;
  myFiles: string[] = [];
  private routeSub: Subscription;
  
  constructor(public fb: FormBuilder,
    private http: HttpClient, private route: ActivatedRoute,
    public dialogRef: MatDialogRef<ManualsDisplayModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      console.log("params 1",params) //log the entire params object
      console.log("params 2",params['id']) //log the value of id
    });
  }

  addPdf(){

  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getFileDetails(e) {      
    //console.log (e.target.files);      
    for (var i = 0; i < e.target.files.length; i++) {      
      this.myFiles.push(e.target.files[i]);      
    }      
  }      
  uploadFiles() {      
    const frmData = new FormData();      
    for (var i = 0; i < this.myFiles.length; i++) {      
      frmData.append("fileUpload", this.myFiles[i]);      
    }      
    this.http.post('https://cwc-cms-api.azurewebsites.net/api/Manuals/UploadResourceFile', frmData).subscribe(      
      data => {      
        // SHOW A MESSAGE RECEIVED FROM THE WEB API.      
        console.log("returned message", data );       
      }      
    );      
  }   

}
