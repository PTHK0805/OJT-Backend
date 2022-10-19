import { Injectable } from '@angular/core';
import { Employee } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  EmpData: Employee[];

  constructor() {
    this.EmpData = [
     { Id: 1, FirstName: "Johannah", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 2, FirstName: "Myint", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 3, FirstName: "Aung", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 4, FirstName: "John", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 5, FirstName: "Smith", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 6, FirstName: "Hanna", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 7, FirstName: "Aye", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 8, FirstName: "Johannah", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 9, FirstName: "Kyaw", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 10, FirstName: "Hnin", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 11, FirstName: "Ba", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 12, FirstName: "Joe", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 13, FirstName: "Jane", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 14, FirstName: "Yue", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 15, FirstName: "Win", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 16, FirstName: "Josy", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 17, FirstName: "Nyan", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 18, FirstName: "Johannah", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 19, FirstName: "Dhgs", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 20, FirstName: "Jong", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 21, FirstName: "Uins", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 22, FirstName: "Onfr", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 23, FirstName: "Tndg", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
     { Id: 24, FirstName: "Pebe", LastName: "Kiffin", Email: "jkiffin0@google.pl", Gender: "F", JobTitle: "Administrative Assistant I"},
    ];

   
  }
}

