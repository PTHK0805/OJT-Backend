import { StudentsService } from './../../services/students.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ngxCsv } from 'ngx-csv';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Student } from 'src/app/services/students';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/dialogs/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  pageSizeOption = [5, 10, 20];
  students: any;
  displayedColumns: string[] = ['no', 'profile', 'name', 'address', 'phone', 'year', 'date_of_birth', 'action'];
  dataSources = new MatTableDataSource<Student>(this.studentsData.student_data);

  constructor(private studentsData: StudentsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.students = this.studentsData.student_data;
  }
  
  @ViewChild(MatTable) table!: MatTable<any>;
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

  deleteData(row: any) {
    let index = this.studentsData.student_data.indexOf(row);
    this.studentsData.student_data.splice(index, 1);
    console.log(row);
    this.table.renderRows();
  }

  openDialog(element:any):void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
     if(result.event == 'Delete'){
        this.deleteData(element);
      }

      if (result.event == 'Cancel') {
        console.log('Dialog is Cancel...');
      }
        
    });
  }
  
}
