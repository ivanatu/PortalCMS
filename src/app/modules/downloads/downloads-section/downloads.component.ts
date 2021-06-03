import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { DownloadsSectionModalComponent } from 'src/app/modals/downloads/downloads-section-modal/downloads-section-modal.component';
import { DownloadsSectionService } from 'src/app/providers/downloads/downloads-section/downloads-section.service';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {
  public downloadSectionData;
  constructor(public dialog: MatDialog,  public router: Router, public downloadSectionService: DownloadsSectionService) { }

  ngOnInit(): void {
    this.getDownloadSectionData();
  }

  openDialogsection(){
    const dialogRef = this.dialog.open(DownloadsSectionModalComponent, {
      width: '300px',
      data: {
        title: 'Create new section'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getDownloadSectionData();
    });
  }

  getDownloadSectionData(){
    this.downloadSectionService.viewDownloadSection()
      .pipe(map(
        data => {console.log(data); return data }
      )).subscribe(
        data => {
          this.downloadSectionData = data;   
        });
  }

  edit(downloadSectionObj){
    const dialogRef = this.dialog.open(DownloadsSectionModalComponent, {
      width: '300px',
      data: {
        id: downloadSectionObj.id,
        title: 'Edit section',
        sectionName: downloadSectionObj.sectionName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getDownloadSectionData();
    });
  }

  categories(){
    this.router.navigateByUrl('/downloads-category');
  }

  delete(downloadSectionObj){
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '350px',
      data: {
        component: 'downloadsection',
        id: downloadSectionObj.id,
        title: 'Confirm Delete',
        message: 'Are you sure, you want to remove section: '+ downloadSectionObj.sectionName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getDownloadSectionData();
    });
  }

}
