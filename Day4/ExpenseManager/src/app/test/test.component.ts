import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  appName = "My first app in Angular"
  userName: string = "Peter"
  colspan = 2;
  myCSSClass = "red";
  applyCSSClass = true;
  myColor = 'brown';
  constructor() { }

  ngOnInit(): void {
  }

  showData($event: any) {
    console.log("button is clicked!"); if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }

}
