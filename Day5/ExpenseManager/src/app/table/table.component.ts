import { Component, OnInit, ɵɵstylePropInterpolate1 } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  id: number = 2;
 
  people = [
    { id: 1, name: 'Wisdom Jed', country: 'United States' },
    { id: 2, name: 'Dusty Ethelbert', country: 'United Kingdom' },
    { id: 3, name: 'Jeremy Miriam', country: 'United States' },
    { id: 4, name: 'Smith Liberty', country: 'United Kingdom' },
    { id: 5, name: 'Praise Jerold', country: 'United States' },
    { id: 6, name: 'Nick Hedley', country: 'United Kingdom' },
    { id: 7, name: 'Flanagan Lex', country: 'United States' },
  ];

  onKeyUp() {
    this.id = this.people[this.id - 1].id;
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
