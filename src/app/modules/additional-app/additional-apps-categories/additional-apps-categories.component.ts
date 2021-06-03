import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AppsCategoryModalComponent } from 'src/app/modals/additional-apps/apps-category-modal/apps-category-modal.component';
import { AdditionalAppCategoriesService } from 'src/app/providers/additional-app/additional-apps-categories/additional-app-categories.service';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-additional-apps-categories',
  templateUrl: './additional-apps-categories.component.html',
  styleUrls: ['./additional-apps-categories.component.scss']
})
export class AdditionalAppsCategoriesComponent implements OnInit {
  public addCategoryData;
  thumbnail: any;
  constructor(public dialog: MatDialog,  public router: Router, 
    public addCategoryService: AdditionalAppCategoriesService,
    private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.getAddCategoryData();
  }
  appSection(){
    this.router.navigateByUrl('/additional-app-sections');
  }
  appDisplay(){
    this.router.navigateByUrl('/additional-app-display');
  }

  openDialogCategory(){
    const dialogRef = this.dialog.open(AppsCategoryModalComponent, {
      width: '380px',
      data: {
        title: 'Create new category'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAddCategoryData();
    });
  }

  getAddCategoryData(){
    this.addCategoryService.viewAdditionalApps()
    .pipe(map(
      data => { console.log(data); return data }
    )).subscribe(
      data => {
        this.addCategoryData = data;
        //let objectURL = 'data:image/jpeg;base64,' + data.;
        //this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        
      });
  }

  edit(categoryObj){
    const dialogRef = this.dialog.open(AppsCategoryModalComponent, {
      width: '380px',
      data: {
        title: 'Edit category',
        id: categoryObj.id,
        sectionID: categoryObj.sectionID,
        categoryName: categoryObj.categoryName,
        mainDescription: categoryObj.mainDescription,
        secondaryDescription: categoryObj.secondaryDescription,
        mainImageName: categoryObj.iconName,
        iconBase64: categoryObj.iconBase64
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAddCategoryData();
    });
  }

  delete(categoryObj){
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '350px',
      data: {
        component: 'additionalappscategory',
        id: categoryObj.id,
        sectionID: categoryObj.sectionID,
        title: 'Confirm Delete',
        message: 'Are you sure, you want to remove ' + categoryObj.categoryName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAddCategoryData();
    });
  }

}
