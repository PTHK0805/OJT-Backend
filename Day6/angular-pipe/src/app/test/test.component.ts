import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
    price: number = 20000;
    Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];
    decimalNum1: number = 8.7589623;
    decimalNum2: number = 5.43;
    decimalNum3: number = 0.8178; 
    jsonData = { id: 'one', name: { username: 'user1' } };
    digits: number = 10000000000; 
    
    presentDate = new Date();
    //timeChange: any;

    //timeChange = new Observable((observer: Observer<string>) => {
    //  setInterval(() => observer.next(new
    //  Date().toString()), 1000);
    //});

    //timeChange = new Observable((observer) => {
    //  setInterval(() => {
    //    observer.next(new Date().toString())
    //  },1000)
    //})


    //ngOnInit() {
    //setInterval(() => {
    //  this.timeChange = new Date();
    //},1000)
    //}
    //
    
    getExpenseEntries(){ 
        let mockExpenseEntries = [ 
           { id: 1, 
              item: "Pizza", 
              amount: Math.floor((Math.random() * 10) + 1), 
              category: "Food", 
              location: "Mcdonald", 
              spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
              createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
           { id: 1, 
              item: "Pizza", 
              amount: Math.floor((Math.random() * 10) + 1), 
              category: "Food", 
              location: "KFC", 
              spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
              createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
           { id: 1,
              item: "Pizza",
              amount: Math.floor((Math.random() * 10) + 1), 
              category: "Food", 
              location: "Mcdonald", 
              spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
              createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
           { id: 1, 
              item: "Pizza", 
              amount: Math.floor((Math.random() * 10) + 1), 
              category: "Food", 
              location: "KFC", 
              spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
              createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) }, 
           { id: 1, 
              item: "Pizza", 
              amount: Math.floor((Math.random() * 10) + 1), 
              category: "Food", 
              location: "KFC", 
              spendOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10), 
              createdOn: new Date(2020, 4, Math.floor((Math.random() * 30) + 1), 10, 10, 10) 
           }, 
        ]; 
        return mockExpenseEntries; 
      }
      
      title: string=''; 
    expenseEntries:any[] = []; 
    timeChange = new Subject();
    ngOnInit() {
        setInterval(() => {
            this.timeChange.next(new Date().toString());
        }, 1000)

        this.title = "Expense Entry List"; 
        this.expenseEntries = this.getExpenseEntries(); 
    }
}
