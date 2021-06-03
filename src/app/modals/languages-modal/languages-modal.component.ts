import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LanguagesService } from 'src/app/providers/languages/languages.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-languages-modal',
  templateUrl: './languages-modal.component.html',
  styleUrls: ['./languages-modal.component.scss']
})
export class LanguagesModalComponent implements OnInit {
  languageForm: FormGroup;
  constructor(public fb: FormBuilder,public languageService: LanguagesService,
    public dialogRef: MatDialogRef<LanguagesModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) 
    {
      if (!this.data.fullName) {
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
    this.languageForm = new FormGroup({
      fullName: new FormControl(),
      shortName: new FormControl(),
      languageCode: new FormControl()
    });
    this.languageForm = this.fb.group({
      fullName: ['', [Validators.required]],
      shortName: ['', [Validators.required]],
      languageCode: ['', [Validators.required]]
    })
  }

  editForm() {
    this.languageForm = new FormGroup({
      fullName: new FormControl(),
      shortName: new FormControl(),
      languageCode: new FormControl()
    });
    this.languageForm = this.fb.group({
      fullName: [this.data.fullName, [Validators.required]],
      shortName: [this.data.shortName, [Validators.required]],
      languageCode: [this.data.languageCode, [Validators.required]]
    })
  }

  addLanguage(){
    if (!this.data.fullName) {
      console.log(this.languageForm.value);
      this.languageService.addLanguages(this.languageForm.value)
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
      console.log(this.languageForm.value);
      this.languageService.editLanguages(this.data.id, this.languageForm.value)
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
