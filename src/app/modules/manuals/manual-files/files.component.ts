import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ManualsDisplayModalComponent } from 'src/app/modals/manuals/manuals-display-modal/manuals-display-modal.component';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';
import { PdfPreviewComponent } from 'src/app/modals/manuals/pdf-preview/pdf-preview.component';
import { ManualCategoriesService } from 'src/app/providers/manuals/manual-categories/manual-categories.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  pdfSource =  "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  public filesData;
  
  constructor(public dialog: MatDialog, public router: Router, 
    public manualcategoryservice: ManualCategoriesService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getfilesData();
  }
  back(){
    this.router.navigateByUrl('/categories');
  }

  openDialogFiles(){
    const dialogRef = this.dialog.open(ManualsDisplayModalComponent, {
      width: '400px',
      data: {
        title: 'Upload a new file'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getfilesData();
    });
  }

  getfilesData(){
    this.manualcategoryservice.viewManualCategory()
    .pipe(map(
      data => {console.log(data); return data }
    )).subscribe(
      data => {
        this.filesData = data;   
      });
  }

  edit(){

  }
  

  pdfData: string[] =[
    "name", 
  ];

  viewFiles(){
    const dialogRef = this.dialog.open(PdfPreviewComponent, {
      width: '800px',
      height: '700px',
      data: {
        src: "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  delete(){
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '350px',
      data: {
        // component: 'question',
        // id: questionObj.$id,
        title: 'Confirm Delete',
        message: 'Are you sure, you want to delete this pdf ' 
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      //this.getquestionData();
    });
  }

}
