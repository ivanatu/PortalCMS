import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DownloadsDisplayModalComponent } from 'src/app/modals/downloads/downloads-display-modal/downloads-display-modal.component';

@Component({
  selector: 'app-downloads-display',
  templateUrl: './downloads-display.component.html',
  styleUrls: ['./downloads-display.component.scss']
})
export class DownloadsDisplayComponent implements OnInit {

  constructor(public dialog: MatDialog,  public router: Router) { }

  ngOnInit(): void {
  }
  title = 'Card View Demo';

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  downloadCategories(){
    this.router.navigateByUrl('/downloads-category');
  }

  back(){
    this.router.navigateByUrl('/downloads-category');
  }


  openDialogdownload(){
    const dialogRef = this.dialog.open(DownloadsDisplayModalComponent, {
      width: '400px',
      data: {
        title: 'Upload new files'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  edit(){

  }

  delete(){
    
  }

}
