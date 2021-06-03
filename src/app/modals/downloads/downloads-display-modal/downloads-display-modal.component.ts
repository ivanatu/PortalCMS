import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-downloads-display-modal',
  templateUrl: './downloads-display-modal.component.html',
  styleUrls: ['./downloads-display-modal.component.scss']
})
export class DownloadsDisplayModalComponent implements OnInit {
pdfForm: FormGroup;
  constructor(public fb: FormBuilder,
    public dialogRef: MatDialogRef<DownloadsDisplayModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      this.createForm();
     }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  addDownload(){

  }
  createForm() {
    this.pdfForm = new FormGroup({
      downloadImage: new FormControl(),
      link: new FormControl(),
      fileUpload: new FormControl(),
      zipUpload: new FormControl(),
    });
    this.pdfForm = this.fb.group({
      downloadImage: ['', [Validators.required]],
      link: ['', [Validators.required]],
      fileUpload: ['', [Validators.required]],
      zipUpload: ['', [Validators.required]],
    })
  }

}
