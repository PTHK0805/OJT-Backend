
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsComponent } from 'src/app/components/students/students.component';
import { StudentsService } from 'src/app/services/students.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit{
  
  studentRowData: any;
  isLoading = false;
  editable = true;
  selectedFile: any = null;
  form;
  id = this.studentData.student_data.length;
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;

  }

  constructor(fb: FormBuilder, public studentData: StudentsService, private router: Router) {
    
    this.studentRowData = this.studentData.student_row_data;

    this.form = fb.group({
      name: [this.studentRowData.name , [Validators.required]],
      address: [this.studentRowData.address, [Validators.required]],
      phone: [this.studentRowData.phone, [Validators.required]],
      year: [this.studentRowData.year, [Validators.required]],
      dob: [this.studentRowData.dob, [Validators.required]]
    });

  }

  ngOnInit(){}
  onClick() {
    this.isLoading = true;
    this.editable = false;
    setTimeout(() => {
      this.isLoading = false;
      
      this.router.navigate(['/']);
      console.log(this.studentData.student_data);
    }, 2000)

  }

  cancel() {
    this.router.navigate(['/']);
  }

}
