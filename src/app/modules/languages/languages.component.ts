import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LanguagesModalComponent } from 'src/app/modals/languages-modal/languages-modal.component';
import { LanguagesService } from 'src/app/providers/languages/languages.service';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  public languageData;
  constructor(public dialog: MatDialog, public router: Router, public languageService: LanguagesService) { }

  ngOnInit(): void {
    this.getLanguagesData();
  }
  openDialog(){
    const dialogRef = this.dialog.open(LanguagesModalComponent, {
      width: '350px',
      data: {
        title: 'Add new language'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  getLanguagesData(){
    this.languageService.viewLanguages()
      .pipe(map(
        data => {console.log(data); return data }
      )).subscribe(
        data => {
          this.languageData = data;   
        });
  }

  edit(languageObj){
    const dialogRef = this.dialog.open(LanguagesModalComponent, {
      width: '350px',
      data: {
        id: languageObj.id,
        title: 'Edit language',
        fullName: languageObj.fullName,
        shortName: languageObj.shortName,
        languageCode: languageObj.languageCode
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getLanguagesData();
    });
  }

  delete(languageObj){
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '350px',
      data: {
        component: 'language',
        id: languageObj.id,
        title: 'Confirm Delete',
        message: 'Are you sure, you want to delete: ' + languageObj.fullName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getLanguagesData();
    });
  }

}
