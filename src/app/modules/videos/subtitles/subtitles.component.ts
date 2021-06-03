import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { SubtitlesModalComponent } from 'src/app/modals/videos/subtitles-modal/subtitles-modal.component';
import { VideosSubtitlesService } from 'src/app/providers/videos/videos-subtitles/videos-subtitles.service';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-subtitles',
  templateUrl: './subtitles.component.html',
  styleUrls: ['./subtitles.component.scss']
})
export class SubtitlesComponent implements OnInit {
  public subtitleData;
  constructor(public dialog: MatDialog, public router: Router, public videoSubtitleService: VideosSubtitlesService) { }

  ngOnInit(): void {
    this.getVideoSubtitleData();
  }

  videos(){
    this.router.navigateByUrl('/');
  }

  categories() {
    this.router.navigateByUrl('/video-categories');
  }

  openDialogCategory(){
    const dialogRef = this.dialog.open(SubtitlesModalComponent, {
      width: '350px',
      data: {
        title: 'Create new subtitle'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getVideoSubtitleData();
    });
  }

  getVideoSubtitleData(){
    this.videoSubtitleService.viewVideoSubtitles()
      .pipe(map(
        data => {console.log(data); return data }
      )).subscribe(
        data => {
          this.subtitleData = data;   
        });
  }

  edit(subtitleObj){
    const dialogRef = this.dialog.open(SubtitlesModalComponent, {
      width: '350px',
      data: {
        title: 'Edit subtitle',
        languageID: subtitleObj.languageID,
        videoNameTranslated: subtitleObj.VideoNameTranslated
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getVideoSubtitleData();
    });
  }

  delete(subtitleObj){
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '350px',
      data: {
        component: 'subtitle',
        id: subtitleObj.id,
        title: 'Confirm Delete',
        message: 'Are you sure, you want to remove subtitle: '+ subtitleObj.languageID
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getVideoSubtitleData();
    });
  }

}
