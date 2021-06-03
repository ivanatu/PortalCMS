import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ManualsSectionModalComponent } from 'src/app/modals/manuals/manuals-section-modal/manuals-section-modal.component';
import { ManualSectionService } from 'src/app/providers/manuals/manual-section/manual-section.service';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-manuals',
  templateUrl: './manuals.component.html',
  styleUrls: ['./manuals.component.scss']
})
export class ManualsComponent implements OnInit {
  public manualSectionData;
  constructor(public dialog: MatDialog, public router: Router, public manualSectionService: ManualSectionService) { }

  ngOnInit() {
    this.getManualSectionData();
  }

  openDialogSection(): void{
    const dialogRef = this.dialog.open(ManualsSectionModalComponent, {
      width: '250px',
      data: {
        title: 'Create new section'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getManualSectionData();
    });
  }

  getManualSectionData(){
    this.manualSectionService.viewManualSection()
    .pipe(map(
      data => {console.log(data); return data }
    )).subscribe(
      data => {
        this.manualSectionData = data;   
      });
  }

  edit(manualsectionObj){
    const dialogRef = this.dialog.open(ManualsSectionModalComponent, {
      width: '250px',
      data: {
        id: manualsectionObj.id,
        title: 'Edit section',
        sectionName: manualsectionObj.sectionName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getManualSectionData();
    });
  }

  delete(manualsectionObj){
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '350px',
      data: {
        component: 'manualsection',
        id: manualsectionObj.id,
        title: 'Confirm Delete',
        message: 'Are you sure, you want to remove '+ manualsectionObj.sectionName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getManualSectionData();
    });
  }
  
  
  categories() {
    this.router.navigateByUrl('/categories');
}

}
