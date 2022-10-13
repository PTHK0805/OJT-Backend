import { StepperOrientation } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;
  isLinear = false;
  stepperMode: StepperOrientation = 'horizontal'
  isVertical = false;

  mode() {
    this.isVertical = !this.isVertical;
    (this.isVertical) ? this.stepperMode = 'vertical' : this.stepperMode = 'horizontal';
  }

  constructor(private _formBuilder: FormBuilder) { }
}
