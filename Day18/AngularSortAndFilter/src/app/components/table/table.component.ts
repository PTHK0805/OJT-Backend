import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Employee } from 'src/app/services/data';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/services/data.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit {

  pageSizeOption = [5, 10, 20];
  displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'Email', 'Gender', 'JobTitle'];
  dataSource = new MatTableDataSource<Employee>(this.dataService.EmpData);

  constructor(private dataService: DataService) {
    console.log(dataService);
  }
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('empTbSort') empTbSort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.empTbSort;
  }

}
