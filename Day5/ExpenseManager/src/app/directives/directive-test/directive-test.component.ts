import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-test',
  templateUrl: './directive-test.component.html',
  styleUrls: ['./directive-test.component.scss']
})
export class DirectiveTestComponent implements OnInit {

  isNeeded = true;
  isLogIn: boolean = true;
  list = [1,2,3,4,5];

  studentArr: any[] = [ { 
    "id": 1, 
    "name": "student1" 
 }, 
 { 
    "id": 2,
    "name": "student2" 
 }, 
 { 
    "id": 3, "name": "student3"
 },
 { 
    "id": 4, 
    "name": "student4" 
 } 
  ];

  users = [ 
    { 
       "userId": 1, 
       "userName": 'User1' 
    }, 
    { 
       "userId": 2, 
       "userName": 'User2' 
    }, 
 ]; 
  
  logInName = '';
  name: string = 'Peter';
  
  constructor() { }

  ngOnInit(): void {
  }

}
