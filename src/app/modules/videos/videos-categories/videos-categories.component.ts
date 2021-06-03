import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { VideosCategoryModalComponent } from 'src/app/modals/videos/videos-category-modal/videos-category-modal.component';
import { VideosCategoriesService } from 'src/app/providers/videos/videos-categories/videos-categories.service';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-videos-categories',
  templateUrl: './videos-categories.component.html',
  styleUrls: ['./videos-categories.component.scss']
})
export class VideosCategoriesComponent implements OnInit {
  public videoCategoryData;
  constructor(public dialog: MatDialog, public router: Router, public videoCategoryService: VideosCategoriesService) { }

  ngOnInit(): void {
    this.getVideoCategoryData();
  }

  openDialogCategory(){
    const dialogRef = this.dialog.open(VideosCategoryModalComponent, {
      width: '300px',
      data: {
        title: 'Create new category'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getVideoCategoryData();
    });
  }

  getVideoCategoryData(){
    this.videoCategoryService.viewVideoCategories()
      .pipe(map(
        data => {console.log(data); return data }
      )).subscribe(
        data => {
          this.videoCategoryData = data;   
        });
  }

  edit(categoryObj){
    const dialogRef = this.dialog.open(VideosCategoryModalComponent, {
      width: '300px',
      data: {
        id: categoryObj.id,
        title: 'Edit category',
        categoryName: categoryObj.categoryName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getVideoCategoryData();
    });
  }

  videos(){
    this.router.navigateByUrl('/');
  }

  subtitles(){
    this.router.navigateByUrl('/subtitles');
  }

  delete(categoryObj){
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '350px',
      data: {
        component: 'videocategory',
        id: categoryObj.id,
        title: 'Confirm Delete',
        message: 'Are you sure, you want to remove category: '+categoryObj.categoryName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getVideoCategoryData();
    });
  }

}
