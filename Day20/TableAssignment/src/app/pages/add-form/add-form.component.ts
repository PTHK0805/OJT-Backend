import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  isLoading = false;
  selectedFile: any = null;
  form;
  newData: any;
  id = this.studentData.student_data.length;
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;

  }
  constructor(private fb: FormBuilder, public studentData: StudentsService, private router: Router) {
    this.form = fb.group({
      profile: [],
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      year: ['', [Validators.required]],
      dob: ['', [Validators.required]]
    })
  }

  ngOnInit() { }
  onClick() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
      this.newData = this.form.value;
      this.studentData.student_data = [...this.studentData.student_data, { no: ++this.id, ...this.newData }];
      this.router.navigate(['/']);
      console.log(this.studentData.student_data);
    }, 1500)

  }

  cancel() {
    this.router.navigate(['/']);
  }

}
