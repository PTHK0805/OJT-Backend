import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  hidePassword = true;
  hideConfirmPassword = true;

//  getPassword(value: any) {
//    this.password1 = value;
//  }
//
//  getConfirmPassword(value:any){
//    this.confirmPassword1 = value;
//  }

  isMatch(password:any, confirmPassword:any) {
    return ((password as string) === (confirmPassword as string) ? true : false)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
