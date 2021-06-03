import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppsDisplayModalComponent } from 'src/app/modals/additional-apps/apps-display-modal/apps-display-modal.component';

@Component({
  selector: 'app-additional-apps-display',
  templateUrl: './additional-apps-display.component.html',
  styleUrls: ['./additional-apps-display.component.scss']
})
export class AdditionalAppsDisplayComponent implements OnInit {

  constructor(public dialog: MatDialog,  public router: Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigateByUrl('/additional-app-categories');
  }

  openDialog(){
    const dialogRef = this.dialog.open(AppsDisplayModalComponent, {
      width: '300px',
      data: {
        title: 'Upload new Image/Video'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

}
