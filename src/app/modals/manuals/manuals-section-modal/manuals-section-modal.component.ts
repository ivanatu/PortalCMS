import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { ManualSectionService } from 'src/app/providers/manuals/manual-section/manual-section.service';

@Component({
  selector: 'app-manuals-section-modal',
  templateUrl: './manuals-section-modal.component.html',
  styleUrls: ['./manuals-section-modal.component.scss']
})
export class ManualsSectionModalComponent implements OnInit {

  sectionForm: FormGroup;
  constructor(public fb: FormBuilder,public manualSectionService: ManualSectionService,
    public dialogRef: MatDialogRef<ManualsSectionModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {

      if (!this.data.id) {
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
      this.manualSectionService.addManualSection(this.sectionForm.value)
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
      this.manualSectionService.editManualSection(this.data.id, this.sectionForm.value)
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
