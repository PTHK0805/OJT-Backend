import { StudentsService } from './../../services/students.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ngxCsv } from 'ngx-csv';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/services/students';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  pageSizeOption = [5, 10, 20];
  students: any;
  displayedColumns: string[] = ['no', 'name', 'address', 'phone', 'year', 'date_of_birth'];
  dataSources = new MatTableDataSource<Student>(this.studentsData.student_data);

  constructor(private studentsData: StudentsService) { }

  ngOnInit(): void {
    this.students = this.studentsData.student_data;
  }
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSources.paginator = this.paginator;
  }

  search(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSources.filter = filterValue.trim().toLowerCase();

  }

  download(){
    new ngxCsv(this.students, 'Students Record');
  }
}
