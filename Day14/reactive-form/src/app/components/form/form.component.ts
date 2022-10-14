import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

   //Create FormGroup
  requiredForm!: FormGroup;
  public console = console;
  public typeof(value:any) {
    return (typeof value);
  }
  public FormControl = FormControl;
   constructor(private fb: FormBuilder) {
      this.myForm();
   }
  
  public model = {
    name: ''
  };

  public error = {
    name: false
  }

   //Create required field validator for name
   myForm() {
      this.requiredForm = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
      });
   }
  
  //requiredForm = new FormGroup({
  //  name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //  email: new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
  //});

  public textChange() {
    this.error.name = this.model.name ? false : true;
  }

  //onEnter(firstName: any) {
  //  console.log(firstName);
  //}
  
   ngOnInit()
   {

   }

}
