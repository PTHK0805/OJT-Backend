
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsComponent } from 'src/app/components/students/students.component';
import { StudentsService } from 'src/app/services/students.service';
import * as moment from 'moment'; 

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit{
  
  studentRowData: any;
  isLoading = false;
  editable = true;
  selectedFile: any = null;
  form;

  profileImage: any;
  imgFile: any;
  id = this.studentData.student_data.length;
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;

  }

  constructor(fb: FormBuilder, public studentData: StudentsService, private router: Router) {
    
    this.studentRowData = this.studentData.student_row_data;
    console.log('DOB : ', this.studentRowData.date_of_birth);
    console.log('From Moment :', new Date(2019, 0, 1));

    const temp = this.studentRowData.date_of_birth.split('/');

    console.log(temp);
    this.form = fb.group({
      no: [this.studentRowData.no],
      profile: [this.studentRowData.profile],
      name: [this.studentRowData.name , [Validators.required]],
      address: [this.studentRowData.address, [Validators.required]],
      phone: [this.studentRowData.phone, [Validators.required]],
      year: [this.studentRowData.year, [Validators.required]],
      dob: [new Date(temp[2], parseInt(temp[1])-1, temp[0]), [Validators.required]]
    });

  }

  ngOnInit() {}

  onClick() {
    this.isLoading = true;
    this.editable = false;
    setTimeout(() => {
      this.isLoading = false;
      if (this.studentData.student_row_data != this.form)
        this.studentData.updateData(this.form.value);
      
      this.router.navigate(['/']);
      console.log(this.studentData.student_data);
    }, 2000)

  }

  
  cancel() {
    this.router.navigate(['/']);
  }

}
