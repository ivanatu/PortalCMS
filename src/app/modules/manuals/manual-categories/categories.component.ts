import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ManualsCategoryModalComponent } from 'src/app/modals/manuals/manuals-category-modal/manuals-category-modal.component';
import { ManualCategoriesService } from 'src/app/providers/manuals/manual-categories/manual-categories.service';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public manualCategoryData;
  constructor(public dialog: MatDialog, public router: Router, public manualcategoryservice: ManualCategoriesService) { }

  ngOnInit(): void {
    this.getmanualCategoryData()
  }

  openDialogCategory(): void{
    const dialogRef = this.dialog.open(ManualsCategoryModalComponent, {
      width: '250px',
      data: {
        title: 'Create new category'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getmanualCategoryData()
    });
  }

  getmanualCategoryData(){
    this.manualcategoryservice.viewManualCategory()
    .pipe(map(
      data => {console.log(data); return data }
    )).subscribe(
      data => {
        this.manualCategoryData = data;   
      });
  }

  edit(manualcategoryObj){
    const dialogRef = this.dialog.open(ManualsCategoryModalComponent, {
      width: '250px',
      data: {
        title: 'Edit category',
        id: manualcategoryObj.id,
        categoryName: manualcategoryObj.categoryName,
        // sectionName: categoryName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getmanualCategoryData()
    });
  }

  delete(manualcategoryObj){
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '350px',
      data: {
        component: 'manualcategory',
        id: manualcategoryObj.id,
        title: 'Confirm Delete',
        message: 'Are you sure, you want to remove '+ manualcategoryObj.categoryName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getmanualCategoryData()
    });
  }

  sections(){
    this.router.navigateByUrl('/manuals');
  }
  viewPdf(manualcategoryObj: any){
    this.router.navigateByUrl('/files/'+ manualcategoryObj.id);
  }
  
}
