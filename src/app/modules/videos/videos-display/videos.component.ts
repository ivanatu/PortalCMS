import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { VideosCategoryModalComponent } from 'src/app/modals/videos/videos-category-modal/videos-category-modal.component';
import { VideosModalComponent } from 'src/app/modals/videos/videos-modal/videos-modal.component';
import { VideosDisplayService } from 'src/app/providers/videos/videos-display/videos-display.service';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})

export class VideosComponent implements OnInit {
  public videosData; 

  constructor(public dialog: MatDialog, public router: Router, public videoDisplayService: VideosDisplayService) { }

  ngOnInit() {
    this.getVideoDisplayData();
  }

  getVideoDisplayData(){
    this.videoDisplayService.viewVideos()
    .pipe(map(
      data => {console.log(data); return data }
    )).subscribe(
      data => {
        this.videosData = data;   
      });
  }
  
  edit(videoObj): void {
    const dialogRef = this.dialog.open(VideosModalComponent, {
      width: '400px',
      data: {
        title: 'Edit video',
        videoName: videoObj.videoName,
        duration: videoObj.duration,
        categoryID: videoObj.categoryID
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getVideoDisplayData();
    });
  }

  openDialogvideos() {
    const dialogRef = this.dialog.open(VideosModalComponent, {
      width: '400px',
      data: {
        title: 'Add new video'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getVideoDisplayData();
    });
  }

  categories() {
    this.router.navigateByUrl('/video-categories');
  }

  subtitles(){
    this.router.navigateByUrl('/subtitles');
  }

  delete(videoObj) {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '350px',
      data: {
        component: 'video',
        id: videoObj.id,
        categoryID: videoObj.categoryID,
        title: 'Confirm Delete',
        message: 'Are you sure, you want to remove '+ videoObj.videoName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getVideoDisplayData();
    });
  }
}
