import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AppsSectionModalComponent } from 'src/app/modals/additional-apps/apps-section-modal/apps-section-modal.component';
import { AdditionalAppsSectionService } from 'src/app/providers/additional-app/additional-apps-section/additional-apps-section.service';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-additional-apps-section',
  templateUrl: './additional-apps-section.component.html',
  styleUrls: ['./additional-apps-section.component.scss']
})
export class AdditionalAppsSectionComponent implements OnInit {
  public addSectionData;
  constructor(public dialog: MatDialog,  public router: Router, public addSectionService: AdditionalAppsSectionService) { }

  ngOnInit(): void {
    this.getAddServiceData();
  }

  appCategories(){
    this.router.navigateByUrl('/additional-app-categories');
  }

  openDialogSection(){
    const dialogRef = this.dialog.open(AppsSectionModalComponent, {
      width: '250px',
      data: {
        title: 'Create new section'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAddServiceData();
    });
  }

  getAddServiceData() {
    this.addSectionService.viewAdditionalAppsSections()
      .pipe(map(
        data => { console.log(data); return data }
      )).subscribe(
        data => {
          this.addSectionData = data;
        });
  }

  edit(sectionObj){
    const dialogRef = this.dialog.open(AppsSectionModalComponent, {
      width: '350px',
      data: {
        title: 'Edit section',
        id: sectionObj.id,
        sectionName: sectionObj.sectionName,
        description: sectionObj.description,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAddServiceData();
    });
  }

  delete(sectionObj){
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '350px',
      data: {
        component: 'additionappssection',
        id: sectionObj.id,
        title: 'Confirm Delete',
        message: 'Are you sure, you want to remove '+ sectionObj.sectionName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAddServiceData();
    });
  }

}
