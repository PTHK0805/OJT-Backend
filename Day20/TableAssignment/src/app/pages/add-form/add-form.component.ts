import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmDialogComponent } from 'src/app/dialogs/confirm-dialog/confirm-dialog.component';
import { StudentsService } from 'src/app/services/students.service';
import * as moment from 'moment';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  isLoading = false;
  editable = true;
  selectedFile: any = null;
  form;
  newData: any;
  id = this.studentData.student_data.length;
  confirm: boolean = false;
  public imageSrc: any;

  constructor(private fb: FormBuilder, public studentData: StudentsService, private router: Router, public dialog: MatDialog) {
    this.form = fb.group({
      profile: [],
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      year: ['', [Validators.required]],
      date_of_birth: ['', [Validators.required]]
    })
  }

  ngOnInit() { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);

      setTimeout(() => {
        this.form.value.profile = this.imageSrc;

        console.log(this.studentData.profileImg)
        console.log(this.form.value.profile);
      }, 500)

    }

  }

  onClick() {
    this.isLoading = true;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: this.newData
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result.event == 'Confirm') {
        setTimeout(() => {
          this.isLoading = false;
          //this.newData = this.form.value;
          this.newData.profile = this.imageSrc;
          this.newData.date_of_birth = moment(this.newData.date_of_birth).format('DD/MM/YYYY')

          console.log(this.newData);

          this.studentData.student_data = [...this.studentData.student_data, { no: ++this.id, ...this.newData }];
          this.router.navigate(['/']);
          console.log(this.studentData.student_data);
        }, 2000)
      }

      if (result.event == 'Cancel') {
        this.isLoading = false;
        console.log('Dialog is Cancel...');
      }

    });
  }

  isConfirm() {
    this.confirm = !this.confirm;
    this.newData = this.form.value;

    if (this.confirm) {
      this.form.controls['name'].disable();
      this.form.controls['address'].disable();
      this.form.controls['phone'].disable();
      this.form.controls['year'].disable();
      this.form.controls['date_of_birth'].disable();
    }
      
    else {
      this.form.controls['name'].enable();
      this.form.controls['address'].enable();
      this.form.controls['phone'].enable();
      this.form.controls['year'].enable(); 
      this.form.controls['date_of_birth'].enable(); 
    }
     
  }

  deleteData(element: any) {
    throw new Error('Method not implemented.');
  }

  cancel() {
    this.router.navigate(['/']);
  }

}
