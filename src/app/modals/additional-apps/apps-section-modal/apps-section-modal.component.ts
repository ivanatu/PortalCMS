import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { AdditionalAppsSectionService } from 'src/app/providers/additional-app/additional-apps-section/additional-apps-section.service';


@Component({
  selector: 'app-apps-section-modal',
  templateUrl: './apps-section-modal.component.html',
  styleUrls: ['./apps-section-modal.component.scss']
})
export class AppsSectionModalComponent implements OnInit {

  sectionForm: FormGroup;
  constructor(public fb: FormBuilder,public addSectionService: AdditionalAppsSectionService,
    public dialogRef: MatDialogRef<AppsSectionModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

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
      sectionName: new FormControl(),
      description: new FormControl()
    });
    this.sectionForm = this.fb.group({
      sectionName: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  editForm() {
    this.sectionForm = new FormGroup({
      sectionName: new FormControl(),
      description: new FormControl()
    });
    this.sectionForm = this.fb.group({
      sectionName: [this.data.sectionName, [Validators.required]],
      description: [this.data.description, [Validators.required]]
    })
  }

  addSection() {
    if (!this.data.sectionName) {
      console.log(this.sectionForm.value);
      this.addSectionService.addAdditionalAppsSections(this.sectionForm.value)
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
      this.addSectionService.editAdditionalAppsSections(this.data.id, this.sectionForm.value)
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
