import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-button-toggles',
  templateUrl: './button-toggles.component.html',
  styleUrls: ['./button-toggles.component.scss']
})
export class ButtonTogglesComponent implements OnInit {
  isRed = false;
  isGreen = false;
  isBlue = false;
  
  fontStyleControl = new FormControl('');
  fontStyle?: string;
  constructor() { }

  ngOnInit(): void {
  }

  isRedFn() {
    this.isRed = !this.isRed;
  }

  isGreenFn() {
    this.isGreen = !this.isGreen;
  }

  isBlueFn() {
    this.isBlue = !this.isBlue;
  }


}
