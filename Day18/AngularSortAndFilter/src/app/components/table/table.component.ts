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
  dataSource: any;

  constructor(private dataService: DataService) {
    console.log(dataService);
  }
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('empTbSort') empTbSort!: MatSort;

  ngAfterViewInit() {
    setTimeout(() => {
       this.dataSource = new MatTableDataSource<Employee>(this.dataService.EmpData);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.empTbSort;
    })
   
  }

  applyFilter(event: Event) {

    //this.dataSource.filterPredicate = function (record:any,filter:any) { 
    //  return record.Gender.toLocaleLowerCase() == filter.toLocaleLowerCase(); 
    //}

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}

}
