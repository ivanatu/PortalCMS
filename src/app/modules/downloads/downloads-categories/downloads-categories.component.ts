import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { DownloadsCategoryModalComponent } from 'src/app/modals/downloads/downloads-category-modal/downloads-category-modal.component';
import { DownloadsCategoriesService } from 'src/app/providers/downloads/downloads-categories/downloads-categories.service';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-downloads-categories',
  templateUrl: './downloads-categories.component.html',
  styleUrls: ['./downloads-categories.component.scss']
})
export class DownloadsCategoriesComponent implements OnInit {
  public downloadsData;
  constructor(public dialog: MatDialog,  public router: Router, public downloadsService: DownloadsCategoriesService) { }

  ngOnInit(): void {
    this.getdownloadsData();
  }

  downloadDisplay(downloadsObj){
    this.router.navigateByUrl('/display-downloads');
  }

  downloadSections(){
    this.router.navigateByUrl('/downloads-section');
  }
  openDialogCategory(){
    const dialogRef = this.dialog.open(DownloadsCategoryModalComponent, {
      width: '350px',
      data: {
        title: 'Create new category'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getdownloadsData();
    });
  }

  getdownloadsData(){
    this.downloadsService.viewDownloads()
    .pipe(map(
      data => {console.log(data); return data }
    )).subscribe(
      data => {
        this.downloadsData = data;   
      });
  }

  edit(downloadsObj){
    const dialogRef = this.dialog.open(DownloadsCategoryModalComponent, {
      width: '350px',
      data: {
        title: 'Edit category',
        id: downloadsObj.id,
        categoryName: downloadsObj.categoryName,
        description: downloadsObj.description
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getdownloadsData();
    });
  }

  delete(downloadsObj){
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '350px',
      data: {
        component: 'downloadscategory',
        id: downloadsObj.id,
        sectionID: downloadsObj.sectionID,
        title: 'Confirm Delete',
        message: 'Are you sure, you want to remove ' + downloadsObj.categoryName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getdownloadsData();
    });
  }

}
