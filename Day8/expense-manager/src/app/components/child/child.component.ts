import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/interfaces/hero';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() heroes: Hero[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
