import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
import { AdditionalAppCategoriesService } from 'src/app/providers/additional-app/additional-apps-categories/additional-app-categories.service';
import { DataService } from 'src/app/providers/data.service';

@Component({
  selector: 'app-apps-category-modal',
  templateUrl: './apps-category-modal.component.html',
  styleUrls: ['./apps-category-modal.component.scss'],
  providers: [DataService]
})
export class AppsCategoryModalComponent implements OnInit {
  categoryForm: FormGroup;
  public dataAppsSectionList$: Observable<[]>;
  imageError: string;
    isImageSaved: boolean;
    cardImageBase64: string;

  constructor(public fb: FormBuilder,
    public addCategoryService: AdditionalAppCategoriesService,
    public dataService: DataService,
    public dialogRef: MatDialogRef<AppsCategoryModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      if (!this.data.categoryName) {
        this.createForm();
      } else {
        this.editForm();
      }
     }

  ngOnInit(): void {
    this.dataAppsSectionList$ = this.dataService.AppsSectionList;
    this.dataService.getAppsSectionData().subscribe();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createForm() {
    this.categoryForm = new FormGroup({
      categoryName: new FormControl(),
      sectionID: new FormControl(),
      mainDescription: new FormControl(),
      secondaryDescription: new FormControl(),
      // iconFileName: new FormControl(),
      
    });
    this.categoryForm = this.fb.group({
      categoryName: ['', [Validators.required]],
      sectionID: ['', [Validators.required]],
      mainDescription: ['', [Validators.required]],
      secondaryDescription: ['', [Validators.required]],
      iconFileName: [null],
      iconBase64: ''
    })
  }

  editForm() {
    this.categoryForm = new FormGroup({
      categoryName: new FormControl(),
      sectionID: new FormControl(),
      mainDescription: new FormControl(),
      secondaryDescription: new FormControl(),
      //iconFileName: new FormControl()
    });
    this.categoryForm = this.fb.group({
      categoryName: [this.data.categoryName, [Validators.required]],
      sectionID: [this.data.sectionID, [Validators.required]],
      mainDescription: [this.data.mainDescription, [Validators.required]],
      secondaryDescription: [this.data.secondaryDescription, [Validators.required]],
      iconFileName: [null],
      iconBase64: this.data.secondaryDescription
    })
  }

  // this method is triggered when a user selects a new image to upload
  fileChangeEvent(fileInput: any) {
    this.imageError = null;
    
    if (fileInput.target.files && fileInput.target.files[0]) {
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 15200;
        const max_width = 25600;
        this.categoryForm.patchValue({
          iconFileName: fileInput.target.files[0].name
        });
        if (fileInput.target.files[0].size > max_size) {
            this.imageError =
                'Maximum size allowed is ' + max_size / 1000 + 'Mb';

            return false;
        }

        if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
            this.imageError = 'Only Images are allowed ( JPG | PNG )';
            return false;
        }
        const reader = new FileReader();
        reader.readAsDataURL(fileInput.target.files[0]);
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            // var base64result = reader.result.split(',')[1];
            image.onload = rs => {
                const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];

                console.log(img_height, img_width);


                if (img_height > max_height && img_width > max_width) {
                    this.imageError =
                        'Maximum dimentions allowed ' +
                        max_height +
                        '*' +
                        max_width +
                        'px';
                    return false;
                } else {
                    const imgBase64Path = e.target.result;
                    this.cardImageBase64 = imgBase64Path;
                    this.isImageSaved = true;
                    this.categoryForm.patchValue({
                      iconBase64: e.target.result.split(',')[1]
                    });
                    console.log("firstone",e.target.result.split(',')[1]);
                    console.log("secondone",this.cardImageBase64.valueOf );
                    // this.previewImagePath = imgBase64Path;

                }
            };
        };
     
     
        reader.readAsDataURL(fileInput.target.files[0]);
    }
}

  // convertImageToBase64(file: File) {
  //   // creating a new image object
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = (r: any) => {
  //     // console.log(r);
  //     // console.log(reader.result);
  //     const imageBase64 = reader.result;
  //     this.updateImageFormControl(imageBase64);
  //     this.customerService.uploadUserImage(imageBase64);
  //     // console.log(imageBase64);
  //   };
  //   reader.onerror = function (error) {
  //     console.error('Error: ', error);
  //   };
  // }

  addCategory(){
    if (!this.data.categoryName) {
      console.log(this.categoryForm.value);
      this.addCategoryService.addAdditionalApps(this.categoryForm.value)
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
      this.addCategoryService.editAdditionalApps(this.data.id, this.categoryForm.value)
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
