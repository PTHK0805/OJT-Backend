import { Injectable } from '@angular/core';
import { Employee } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  EmpData: Employee[];

  constructor() {
    this.EmpData = [
     { Id: 1, FirstName: "Johannah", LastName: "Kiffin", Email: "Johannah@google.pl", Gender: "Female", JobTitle: "Administrative Assistant I"},
     { Id: 2, FirstName: "Myint", LastName: "Kiffin", Email: "Myint@google.pl", Gender: "Male", JobTitle: "IT"},
     { Id: 3, FirstName: "Aung", LastName: "Kiffin", Email: "Aung@google.pl", Gender: "Male", JobTitle: "Web"},
     { Id: 4, FirstName: "John", LastName: "Kiffin", Email: "John@google.pl", Gender: "Male", JobTitle: "Android"},
     { Id: 5, FirstName: "Smith", LastName: "Kiffin", Email: "Smith@google.pl", Gender: "Male", JobTitle: "Administrative Assistant I"},
     { Id: 6, FirstName: "Hanna", LastName: "Kiffin", Email: "Hanna@google.pl", Gender: "Female", JobTitle: "Ios"},
     { Id: 7, FirstName: "Aye", LastName: "Kiffin", Email: "Aye@google.pl", Gender: "Female", JobTitle: "Administrative Assistant I"},
     { Id: 8, FirstName: "Johannah", LastName: "Kiffin", Email: "Johannah@google.pl", Gender: "Female", JobTitle: "IT"},
     { Id: 9, FirstName: "Kyaw", LastName: "Kiffin", Email: "Kyaw@google.pl", Gender: "Male", JobTitle: "Ios"},
     { Id: 10, FirstName: "Hnin", LastName: "Kiffin", Email: "Hnin@google.pl", Gender: "Female", JobTitle: "Administrative Assistant I"},
     { Id: 11, FirstName: "Ba", LastName: "Kiffin", Email: "Ba@google.pl", Gender: "Male", JobTitle: "Administrative Assistant I"},
     { Id: 12, FirstName: "Joe", LastName: "Kiffin", Email: "Joe@google.pl", Gender: "Male", JobTitle: "Web"},
     { Id: 13, FirstName: "Jane", LastName: "Kiffin", Email: "Jane@google.pl", Gender: "Female", JobTitle: "Android"},
     { Id: 14, FirstName: "Yue", LastName: "Kiffin", Email: "Yue@google.pl", Gender: "Female", JobTitle: "Administrative Assistant I"},
     { Id: 15, FirstName: "Win", LastName: "Kiffin", Email: "Win@google.pl", Gender: "Male", JobTitle: "Admin"},
     { Id: 16, FirstName: "Josy", LastName: "Kiffin", Email: "Josy@google.pl", Gender: "Female", JobTitle: "Web"},
     { Id: 17, FirstName: "Nyan", LastName: "Kiffin", Email: "Nyan@google.pl", Gender: "Male", JobTitle: "Administrative Assistant I"},
     { Id: 18, FirstName: "Johannah", LastName: "Kiffin", Email: "Johannah@google.pl", Gender: "Female", JobTitle: "Administrative Assistant I"},
     { Id: 19, FirstName: "Dhgs", LastName: "Kiffin", Email: "Dhgs@google.pl", Gender: "Male", JobTitle: "IT"},
     { Id: 20, FirstName: "Jong", LastName: "Kiffin", Email: "Jong@google.pl", Gender: "Male", JobTitle: "Administrative Assistant I"},
     { Id: 21, FirstName: "Uins", LastName: "Kiffin", Email: "Uins@google.pl", Gender: "Female", JobTitle: "Ios"},
     { Id: 22, FirstName: "Onfr", LastName: "Kiffin", Email: "Onfr@google.pl", Gender: "Female", JobTitle: "Web"},
     { Id: 23, FirstName: "Tndg", LastName: "Kiffin", Email: "Tndg@google.pl", Gender: "Female", JobTitle: "Web"},
     { Id: 24, FirstName: "Pebe", LastName: "Kiffin", Email: "Pebe@google.pl", Gender: "Male", JobTitle: "Android"},
    ];

   
  }
}

