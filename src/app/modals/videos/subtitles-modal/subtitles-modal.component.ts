import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataService } from 'src/app/providers/data.service';
import { VideosSubtitlesService } from 'src/app/providers/videos/videos-subtitles/videos-subtitles.service';

@Component({
  selector: 'app-subtitles-modal',
  templateUrl: './subtitles-modal.component.html',
  styleUrls: ['./subtitles-modal.component.scss'],
  providers: [DataService]
})
export class SubtitlesModalComponent implements OnInit {
  subtitleForm: FormGroup; 
  public dataVideoList$: Observable<[]>;
  constructor(public fb: FormBuilder,public videoSubtitleService: VideosSubtitlesService,
    public dataService: DataService,
    public dialogRef: MatDialogRef<SubtitlesModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      if (!this.data.languageID) {
        this.createForm();
      } else {
        this.editForm();
      }
     }

  ngOnInit(): void {
    this.dataVideoList$ = this.dataService.VideoList;
    this.dataService.getVideoData().subscribe();
  }

  createForm() {
    this.subtitleForm = new FormGroup({
      videoNameTranslated: new FormControl(),
      languageID: new FormControl(),
      VideoID: new FormControl()
    });
    this.subtitleForm = this.fb.group({
      videoNameTranslated: ['', [Validators.required]],
      languageID: ['', [Validators.required]],
      VideoID: ['', [Validators.required]]
    })
  }

  editForm() {
    this.subtitleForm = new FormGroup({
      videoNameTranslated: new FormControl(),
      languageID: new FormControl(),
      VideoID: new FormControl()
    });
    this.subtitleForm = this.fb.group({
      videoNameTranslated: [this.data.videoNameTranslated, [Validators.required]],
      languageID: [this.data.languageID, [Validators.required]],
      VideoID: [this.data.streamingURL, [Validators.required]]
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // this method is triggered when a user selects a new image to upload
  fileChangeEvent(fileInput: any) {
    //this.imageError = null;
    
    if (fileInput.target.files && fileInput.target.files[0]) {
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 15200;
        const max_width = 25600;
        this.subtitleForm.patchValue({
          subtitleFileName: fileInput.target.files[0].name
        });

        const reader = new FileReader();
        //reader.readAsDataURL(fileInput.target.files[0]);
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            // var base64result = reader.result.split(',')[1];
            image.onload = rs => {
                const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];

                console.log(img_height, img_width);
                  const imgBase64Path = e.target.result;
                    // this.categoryForm.patchValue({
                    //   iconBase64: e.target.result.split(',')[1]
                    // });
                    // this.cardImageBase64 = imgBase64Path;
                    // this.isImageSaved = true;
                    this.subtitleForm.patchValue({
                      subtitleBase64: e.target.result.split(',')[1]
                    });
                    //console.log("firstone",e.target.result.split(',')[1]);
                    //console.log("secondone",this.cardImageBase64.valueOf );
                    // this.previewImagePath = imgBase64Path;
                
            };
        };
        reader.readAsDataURL(fileInput.target.files[0]);
    }
}

addSubtitle() {
  if (!this.data.languageID) {
    console.log(this.subtitleForm.value);
    this.videoSubtitleService.addVideoSubtitles(this.subtitleForm.value)
      .pipe(map(
        data => { console.log(data); return data },
        err => { console.log(err); return err }
      ))
      .subscribe(
        data => {
          return data;
        },
        err => { alert("Invalid data"); console.log(err) }
      );
  } else {
    console.log(this.subtitleForm.value);
    this.videoSubtitleService.editVideoSubtitles(this.data.id, this.subtitleForm.value)
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
