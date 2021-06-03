import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/providers/data.service';
import { VideosCategoriesService } from 'src/app/providers/videos/videos-categories/videos-categories.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-videos-category-modal',
  templateUrl: './videos-category-modal.component.html',
  styleUrls: ['./videos-category-modal.component.scss']
})
export class VideosCategoryModalComponent implements OnInit {
  categoryForm: FormGroup;

  constructor(public fb: FormBuilder,public videoCategoryService: VideosCategoriesService,
    public dialogRef: MatDialogRef<VideosCategoryModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { 
      if (!this.data.categoryName) {
        this.createForm();
      } else {
        this.editForm();
      }
    }

  ngOnInit(): void {

  }

  createForm() {
    this.categoryForm = new FormGroup({
      categoryName: new FormControl()
    });
    this.categoryForm = this.fb.group({
      categoryName: ['', [Validators.required]]
    })
  }

  editForm() {
    this.categoryForm = new FormGroup({
      categoryName: new FormControl()
    });
    this.categoryForm = this.fb.group({
      categoryName: [this.data.categoryName, [Validators.required]]
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addVideoCategory(){
    if (!this.data.categoryName) {
      console.log(this.categoryForm.value);
      this.videoCategoryService.addVideoCategories(this.categoryForm.value)
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
      this.videoCategoryService.editVideoCategories(this.data.id, this.categoryForm.value)
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
