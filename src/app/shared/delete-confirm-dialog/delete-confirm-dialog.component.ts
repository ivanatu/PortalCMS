import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CelMembersService } from 'src/app/providers/cel-members/cel-members.service';
import { map } from 'rxjs/operators';
import { LanguagesService } from 'src/app/providers/languages/languages.service';
import { VideosCategoriesService } from 'src/app/providers/videos/videos-categories/videos-categories.service';
import { DownloadsSectionService } from 'src/app/providers/downloads/downloads-section/downloads-section.service';
import { ManualSectionService } from 'src/app/providers/manuals/manual-section/manual-section.service';
import { VideosDisplayService } from 'src/app/providers/videos/videos-display/videos-display.service';
import { VideosSubtitlesService } from 'src/app/providers/videos/videos-subtitles/videos-subtitles.service';
import { AdditionalAppsSectionService } from 'src/app/providers/additional-app/additional-apps-section/additional-apps-section.service';
import { AdditionalAppCategoriesService } from 'src/app/providers/additional-app/additional-apps-categories/additional-app-categories.service';
import { ManualCategoriesService } from 'src/app/providers/manuals/manual-categories/manual-categories.service';
import { DownloadsCategoriesService } from 'src/app/providers/downloads/downloads-categories/downloads-categories.service';

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.scss']
})
export class DeleteConfirmDialogComponent implements OnInit {

  constructor(
    public celMemberService: CelMembersService,
    public languageService: LanguagesService,
    public videoCategoryService: VideosCategoriesService,
    public downloadSectionService: DownloadsSectionService,
    public manualSectionService: ManualSectionService,
    public videoDisplayService: VideosDisplayService,
    public videoSubtitleService: VideosSubtitlesService,
    public addSectionService: AdditionalAppsSectionService,
    public addCategoryService: AdditionalAppCategoriesService,
    public downloadsService: DownloadsCategoriesService,
    public dialogRef: MatDialogRef<DeleteConfirmDialogComponent>,
    public manualCategoryservice: ManualCategoriesService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

  onConfirm() {
    switch (this.data.component) {
      case 'celmembers': {
        console.log("one");
        this.celMemberService.deleteCelMembers(this.data.id)
          .pipe(map(
            data => { console.log(data); return data }
            
          )).subscribe(
            data => {
              // alert(this.data.emailAddress+ "has been deleted");
              return data;
              
            });
        this.dialogRef.close(true);
        break;
      }

      case 'language': {
        console.log("language");
        this.languageService.deleteLanguages(this.data.id)
          .pipe(map(
            data => { console.log(data); return data }
            
          )).subscribe(
            data => {
              // alert(this.data.emailAddress+ "has been deleted");
              return data;
              
            });
        this.dialogRef.close(true);
        break;
      }
      
      case 'videocategory': {
        console.log("videocategory");
        this.videoCategoryService.deleteVideoCategories(this.data.id)
          .pipe(map(
            data => { console.log(data); return data }
            
          )).subscribe(
            data => {
              // alert(this.data.emailAddress+ "has been deleted");
              return data;
              
            });
        this.dialogRef.close(true);
        break;
      }
      
      case 'manualsection': {
        console.log("manualsection");
        this.manualSectionService.deleteManualSection(this.data.id)
          .pipe(map(
            data => { console.log(data); return data }
            
          )).subscribe(
            data => {
              // alert(this.data.emailAddress+ "has been deleted");
              return data;
              
            });
        this.dialogRef.close(true);
        break;
      }

      case 'manualcategory': {
        console.log("manualcategory");
        this.manualCategoryservice.deleteManualCategory(this.data.id)
          .pipe(map(
            data => { console.log(data); return data }
            
          )).subscribe(
            data => {
              // alert(this.data.emailAddress+ "has been deleted");
              return data;
              
            });
        this.dialogRef.close(true);
        break;
      }

      case 'downloadsection': {
        console.log("downloadsection");
        this.downloadSectionService.deleteDownloadSection(this.data.id)
          .pipe(map(
            data => { console.log(data); return data }
            
          )).subscribe(
            data => {
              // alert(this.data.emailAddress+ "has been deleted");
              return data;
              
            });
        this.dialogRef.close(true);
        break;
      }

      case 'downloadscategory': {
        console.log("downloadscategory");
        this.downloadsService.deleteDownloads(this.data.id, this.data.sectionID)
          .pipe(map(
            data => { console.log(data); return data }
            
          )).subscribe(
            data => {
              // alert(this.data.emailAddress+ "has been deleted");
              return data;
              
            });
        this.dialogRef.close(true);
        break;
      }

      case 'video': {
        console.log("video");
        this.videoDisplayService.deleteVideos(this.data.id, this.data.categoryID)
          .pipe(map(
            data => { console.log(data); return data }
            
          )).subscribe(
            data => {
              // alert(this.data.emailAddress+ "has been deleted");
              return data;
              
            });
        this.dialogRef.close(true);
        break;
      }

      case 'subtitle': {
        console.log("subtitle");
        this.videoSubtitleService.deleteVideoSubtitles(this.data.id)
          .pipe(map(
            data => { console.log(data); return data }
            
          )).subscribe(
            data => {
              // alert(this.data.emailAddress+ "has been deleted");
              return data;
              
            });
        this.dialogRef.close(true);
        break;
      }

      case 'additionappssection': {
        console.log("additionappssection");
        this.addSectionService.deleteAdditionalAppsSections(this.data.id)
          .pipe(map(
            data => { console.log(data); return data }
            
          )).subscribe(
            data => {
              // alert(this.data.emailAddress+ "has been deleted");
              return data;
              
            });
        this.dialogRef.close(true);
        break;
      }

      case 'additionalappscategory': {
        console.log("additionalappscategory");
        this.addCategoryService.deleteAdditionalApps(this.data.id, this.data.sectionID)
          .pipe(map(
            data => { console.log(data); return data }
            
          )).subscribe(
            data => {
              // alert(this.data.emailAddress+ "has been deleted");
              return data;
              
            });
        this.dialogRef.close(true);
        break;
      }
      
      default: {
        console.log("default");
        break;
      }
    }
  }
}
