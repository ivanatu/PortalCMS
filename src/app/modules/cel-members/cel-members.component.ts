import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CelMembersModalComponent } from 'src/app/modals/cel-members-modal/cel-members-modal.component';
import { CelMembersService } from 'src/app/providers/cel-members/cel-members.service';
import { DeleteConfirmDialogComponent } from 'src/app/shared/delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-cel-members',
  templateUrl: './cel-members.component.html',
  styleUrls: ['./cel-members.component.scss']
})
export class CelMembersComponent implements OnInit {
  public celMembersData;
  constructor(public dialog: MatDialog, public router: Router, public celMemberService: CelMembersService) { }

  ngOnInit(): void {
    this.getCelMembersData();
  }


  openDialog(){
    const dialogRef = this.dialog.open(CelMembersModalComponent, {
      width: '350px',
      data: {
        title: 'Add new member'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCelMembersData();
    });
  }

  getCelMembersData() {
    this.celMemberService.viewCelMembers()
      .pipe(map(
        data => {console.log(data); return data }
      )).subscribe(
        data => {
          this.celMembersData = data;   
        });
  }

  edit(celMemberObj){
    const dialogRef = this.dialog.open(CelMembersModalComponent, {
      width: '380px',
      data: {
        id: celMemberObj.id,
        title: 'Edit member',
        emailAddress: celMemberObj.emailAddress,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCelMembersData();
    });
  }

  delete(celMemberObj){
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: '350px',
      data: {
        component: 'celmembers',
        id: celMemberObj.id,
        title: 'Confirm Delete',
        message: 'Are you sure, you want to delete: ' + celMemberObj.emailAddress
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCelMembersData();
    });
  }

}
