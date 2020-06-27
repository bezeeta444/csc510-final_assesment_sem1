import { Component } from '@angular/core';
import {PremiseComponent} from './premise/premise.component';
import {CalculationService} from './calculation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  answer = '';
  title = 'csc510';
  condition = false;
  input1 = '';
  input2 = '';
  input3 = '';
  Eq1 = '';
  Eq2 = '';
  Eq3 = '';

  constructor(private calculationService: CalculationService) {
  }

  onSubmit() {
    this.condition = true;

    this.answer = this.calculationService.onCalculation();
    this.Eq1 = this.calculationService.onPremise1();
    this.Eq2 = this.calculationService.onPremise2();
    this.Eq3 = this.calculationService.onPremise3();
    this.input1 = this.calculationService.onInput1();
    this.input2 = this.calculationService.onInput2();
    this.input3 = this.calculationService.onInput3();
  }

  onClear() {
    this.condition = false;

    this.answer = '';
    this.Eq1 = '';
    this.Eq2 = '';
    this.Eq3 = '';
    this.input1 = '';
    this.input2 = '';
    this.input3 = '';

  }



}
