import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/providers/data.service';
import { ManualCategoriesService } from 'src/app/providers/manuals/manual-categories/manual-categories.service';

@Component({
  selector: 'app-manuals-category-modal',
  templateUrl: './manuals-category-modal.component.html',
  styleUrls: ['./manuals-category-modal.component.scss'],
  providers: [DataService]
})
export class ManualsCategoryModalComponent implements OnInit {
  public dataManualSectionList$: Observable<[]>;
  categoryForm: FormGroup;
  
  constructor(public fb: FormBuilder,public manualcategoryservice: ManualCategoriesService,
    public dataService: DataService,
    public dialogRef: MatDialogRef<ManualsCategoryModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      if (!this.data.caregoryName) {
        this.createForm();
      } else {
        this.editForm();
      }
  }

  ngOnInit(): void {
    this.dataManualSectionList$ = this.dataService.ManualsSectionList;
    this.dataService.getManualsSectionData().subscribe();
  }

  createForm() {
    this.categoryForm = new FormGroup({
      categoryName: new FormControl(),
      sectionID: new FormControl()
    });
    this.categoryForm = this.fb.group({
      categoryName: ['', [Validators.required]],
      sectionID: ['', [Validators.required]]
    })
  }

  editForm() {
    this.categoryForm = new FormGroup({
      categoryName: new FormControl(),
      sectionID: new FormControl()
    });
    this.categoryForm = this.fb.group({
      categoryName: [this.data.categoryName, [Validators.required]],
      sectionID: [this.data.sectionID, [Validators.required]]
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addCategory(){
    if (!this.data.sectionName) {
      console.log(this.categoryForm.value);
      this.manualcategoryservice.addManualCategory(this.categoryForm.value)
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
      console.log(this.categoryForm.value);
      this.manualcategoryservice.editManualCategory(this.data.id, this.categoryForm.value)
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
