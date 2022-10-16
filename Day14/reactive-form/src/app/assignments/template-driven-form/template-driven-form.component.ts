import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  hidePassword = true;
  hideConfirmPassword = true;

  public requiredForm = {
    name: '',
    passwordA: '',
    passwordB: ''
  }

  public errors = {
    passwordMatch : false,
  }

  textChange() {
    this.errors.passwordMatch = (this.requiredForm.passwordA === this.requiredForm.passwordB) ? false : true;
  }
  
  constructor() { }
      
  ngOnInit(): void {
  }

}
