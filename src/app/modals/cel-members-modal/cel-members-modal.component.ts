import { Component, Inject, OnInit, Optional } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CelMembersService } from 'src/app/providers/cel-members/cel-members.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cel-members-modal',
  templateUrl: './cel-members-modal.component.html',
  styleUrls: ['./cel-members-modal.component.scss']
})
export class CelMembersModalComponent implements OnInit {
  celForm: FormGroup;
  constructor(public fb: FormBuilder,public celMemberService: CelMembersService,
    public dialogRef: MatDialogRef<CelMembersModalComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
      if (!this.data.emailAddress) {
        this.createForm();
      } else {
        this.editForm();
      }
   }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  createForm() {
    this.celForm = new FormGroup({
      // firstName: new FormControl(),
      // lastName: new FormControl(),
      emailAddress: new FormControl()
    });
    this.celForm = this.fb.group({
      // firstName: ['', [Validators.required]],
      // lastName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required]]
    })
  }

  editForm() {
    this.celForm = new FormGroup({
      // firstName: new FormControl(),
      // lastName: new FormControl(),
      emailAddress: new FormControl()
    });
    this.celForm = this.fb.group({
      // firstName: [this.data.firstName, [Validators.required]],
      // lastName: [this.data.lastName, [Validators.required]],
      emailAddress: [this.data.emailAddress, [Validators.required]]
    })
  }

  addMember(){
    if (!this.data.emailAddress) {
      console.log(this.celForm.value);
      this.celMemberService.addCelMembers(this.celForm.value)
          .pipe(map(
          data => { console.log(data); return data },
          err => { console.log(err); return err }
          ))
          .subscribe(
            data=>{
              return data;
         },
            err=>{alert("Invalid data");console.log(err)}
         );
    } else {
      console.log(this.celForm.value);
      this.celMemberService.editCelMembers(this.data.id, this.celForm.value)
        .pipe(map(
          data => { return data },
          err => { console.log(err); return err }
        ))
        .subscribe(
          data => {
            return data;
          },
          err => { alert("Invalid data"); console.log(err) }
        );
    }
    
  }

}
