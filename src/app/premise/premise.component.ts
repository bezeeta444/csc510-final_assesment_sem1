import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CalculationService} from '../calculation.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-premise',
  templateUrl: './premise.component.html',
  styleUrls: ['./premise.component.css']
})
export class PremiseComponent implements OnInit {


  selectedRadio = ' ';
  selectedRadio2 = ' ';
  selectedRadio3 = ' ';
  variable = '';
  variable2 = '';
  variable3 = '';
  input1 = '';
  input2 = '';
  input3 = '';
  value1: number;
  value2: number;
  value3: number;
  uncheck = true;


  premise: any = [
    'and',
    'or',
    'if',
    'not',
    'single'
  ];

  constructor(private calculationService: CalculationService) {}

  ngOnInit(): void {

  }


  radioChangeHandler(event: any) {
    this.selectedRadio = event.target.value;

    if (this.selectedRadio === 'and') {
      this.variable = 'P∧Q';
      this.value1 = 1;
    } else if (this.selectedRadio === 'or') {
      this.variable = 'P∨Q';
      this.value1 = 2;
    } else if (this.selectedRadio === 'if') {
      this.variable = 'P→Q';
      this.value1 = 3;
    } else if (this.selectedRadio === 'not') {
      this.variable = '¬P';
      this.value1 = 4;
    } else if (this.selectedRadio === 'single') {
      this.variable = 'P';
      this.value1 = 5;
    }

    this.calculationService.valueValidate1(this.value1, this.variable);

  }

  radioChangeHandler2(event: any) {
    this.selectedRadio2 = event.target.value;

    if (this.selectedRadio2 === 'and') {
      this.variable2 = 'P∧Q';
      this.value2 = 1;
    } else if (this.selectedRadio2 === 'or') {
      this.variable2 = 'P∨Q';
      this.value2 = 2;
    } else if (this.selectedRadio2 === 'if') {
      this.variable2 = 'P→Q';
      this.value2 = 3;
    } else if (this.selectedRadio2 === 'not') {
      this.variable2 = '¬P';
      this.value2 = 4;
    } else if (this.selectedRadio2 === 'single') {
      this.variable2 = 'q';
      this.value2 = 5;
    }

    this.calculationService.valueValidate2(this.value2, this.variable2);
  }

  radioChangeHandler3(event: any) {
    this.selectedRadio3 = event.target.value;

    if (this.selectedRadio3 === 'and') {
      this.variable3 = 'P∧Q';
      this.value3 = 1;
    } else if (this.selectedRadio3 === 'or') {
      this.variable3 = 'P∨Q';
      this.value3 = 2;
    } else if (this.selectedRadio3 === 'if') {
      this.variable3 = 'P→Q';
      this.value3 = 3;
    } else if (this.selectedRadio3 === 'not') {
      this.variable3 = '¬P';
      this.value3 = 4;
    } else if (this.selectedRadio3 === 'single') {
      this.variable3 = 'P';
      this.value3 = 5;
    }
    this.calculationService.valueValidate3(this.value3 , this.variable3);

  }

  onInput1(input1: string) {
    this.calculationService.inputValue1(input1);
  }

  onInput2(input2: string) {
    this.calculationService.inputValue2(input2);
  }

  onInput3(input3: string) {
     this.calculationService.inputValue3(input3);
  }

  onsubmit(form: NgForm) {
    console.log(form);
  }



}




