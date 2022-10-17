import { Component, OnInit } from '@angular/core';
import { NgModel, ValidatorFn } from '@angular/forms';

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

  myValidator: ValidatorFn = (c) => {
    console.log(c);

    if (c.value != this.requiredForm.passwordA) {
      return { ['matchPassword']: true };
    }

    return null;
  };

  constructor() { }
      
  ngOnInit(): void {
  }

}
