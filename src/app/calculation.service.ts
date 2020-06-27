import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  value: number;
  value2: number;
  value3: number;
  eq1: string;
  eq2: string;
  eq3: string;
  answer = '';
  input1: string;
  input2 = '';
  input3 = '';


 valueValidate1(valid: number , equation: string ) {
   this.value = valid;
   this.eq1 = equation;
 }

  valueValidate2(valid2: number, equation2: string) {
  this.value2 = valid2;
  this.eq2 = equation2;
  }

  valueValidate3(valid3: number, equation3: string) {
  this.value3 = valid3;
  this.eq3 = equation3;
  }

  inputValue1(in1: string){
  this.input1 = in1;

  return this.input1;

  }
  inputValue2(in2: string){
    this.input2 = in2;

  }
  inputValue3(in3: string) {
    this.input3 = in3;

  }

  // premise calculation
  onCalculation() {
   // calculation function
   if (this.value === 3 && this.value2 === 5 && this.value3 === 5) {
     this.answer = 'modus ponens';
   }else if (this.value === 3 && this.value2 === 4 && this.value3 === 4 ) {
     this.answer = 'modus tollens';
   }else  if (this.value === 3 && this.value2 === 3 && this.value3 === 3 ){
     this.answer = 'hypothetical syllogism';
   }else  if (this.value === 2 && this.value2 === 4 && this.value3 === 5 ){
     this.answer = 'disjunctive syllogism';
   }else  if (this.value === 5 &&  this.value3 === 2 ){
     this.answer = 'addition';
   }else  if (this.value === 1 && this.value3 === 5 ){
     this.answer = 'simplification';
   }else  if (this.value === 5 && this.value2 === 5 && this.value3 === 1 ){
     this.answer = 'conjuction';
   }else  if (this.value === 2 && this.value2 === 2  && this.value3 === 2 ){
     this.answer = 'resolution';
   }else {
     this.answer = 'no law';
   }
   return this.answer;
  }

  onClear(in1: string , in2: string , in3: string) {

  }

  onPremise1() {

   return this.eq1;
  }

  onPremise2() {

    return this.eq2;
  }

  onPremise3() {
    return this.eq3;
  }

  onInput1() {
   return this.input1;
  }
  onInput2() {
   return this.input2;
  }

  onInput3() {
   return this.input3;
  }



}
