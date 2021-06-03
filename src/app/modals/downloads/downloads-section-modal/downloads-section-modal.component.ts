import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { DownloadsSectionService } from 'src/app/providers/downloads/downloads-section/downloads-section.service';

@Component({
  selector: 'app-downloads-section-modal',
  templateUrl: './downloads-section-modal.component.html',
  styleUrls: ['./downloads-section-modal.component.scss']
})
export class DownloadsSectionModalComponent implements OnInit {

  sectionForm: FormGroup;
  constructor(public fb: FormBuilder,public downloadSectionService: DownloadsSectionService,
    public dialogRef: MatDialogRef<DownloadsSectionModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

      if (!this.data.sectionName) {
        this.createForm();
      } else {
        this.editForm();
      }
     }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createForm() {
    this.sectionForm = new FormGroup({
      sectionName: new FormControl()
    });
    this.sectionForm = this.fb.group({
      sectionName: ['', [Validators.required]]
    })
  }

  editForm() {
    this.sectionForm = new FormGroup({
      sectionName: new FormControl()
    });
    this.sectionForm = this.fb.group({
      sectionName: [this.data.sectionName, [Validators.required]]
    })
  }

  addSection() {
    if (!this.data.sectionName) {
      console.log(this.sectionForm.value);
      this.downloadSectionService.addDownloadSection(this.sectionForm.value)
          .pipe(map(
          data => { console.log(data); return data },
          err => { console.log(err); return err }
          ))
          .subscribe(
            data=>{
              return data;
         },
            err=>{alert("Invalid data");console.log(err)}
         );
    } else {
      console.log(this.sectionForm.value);
      this.downloadSectionService.editDownloadSection(this.data.id, this.sectionForm.value)
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

}
