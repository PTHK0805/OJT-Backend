import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subject } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  price: number = 20000;
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
  timeChange = new Subject();
  ngOnInit() {
    setInterval(() => {
      this.timeChange.next(new Date().toString());
    },1000)
  }
}
