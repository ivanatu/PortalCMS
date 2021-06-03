import { Optional } from '@angular/core';
import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-apps-display-modal',
  templateUrl: './apps-display-modal.component.html',
  styleUrls: ['./apps-display-modal.component.scss']
})
export class AppsDisplayModalComponent implements OnInit {
  displayForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<AppsDisplayModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addCategory(){

  }

  // this method is triggered when a user selects a new image to upload
  fileChangeEvent(fileInput: any) {
    
    if (fileInput.target.files && fileInput.target.files[0]) {
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 15200;
        const max_width = 25600;
      
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

                    const imgBase64Path = e.target.result;
                    //this.cardImageBase64 = imgBase64Path;
                    //this.isImageSaved = true;
                    // this.categoryForm.patchValue({
                    //   iconBase64: e.target.result.split(',')[1]
                    // });
                   // console.log("firstone",e.target.result.split(',')[1]);
                    //console.log("secondone",this.cardImageBase64.valueOf );
                    // this.previewImagePath = imgBase64Path;
            };
        };
     
     
        reader.readAsDataURL(fileInput.target.files[0]);
    }
}

}
