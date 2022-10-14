import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { PasswordValidators } from './validators/password.validator';

export interface Movies {
  name: string,
  year: number,
  rating: number,
};
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  form;
  //constructor(private fb: FormBuilder) {
  //  this.form =fb.group({
  //  name: ['',[ Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
  //  password: ['', Validators.required],
  //  confPassword: ['', Validators.required],
  //},{
  //  validators: PasswordValidators.passwordsShouldMatch
  //})
  //}

  movies: Movies[] = [
    {name: 'MovieA', year: 2019, rating: 4.5},
    {name: 'MovieB', year: 2019, rating: 4.5},
    {name: 'MovieC', year: 2019, rating: 4.5},
  ]

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', 
      [ Validators.required, Validators.minLength(3), Validators.maxLength(20)]
      ],
      password: ['', Validators.required],
      confPassword: ['', Validators.required]
    }, {
      validator: PasswordValidators.passwordsShouldMatch
    });
  }


  get name() {
    return this.form.get('name');
  }

  get password() {
    return this.form.get('password');
  }

  get confPassword() {
    return this.form.get('confPassword');
  }

}
