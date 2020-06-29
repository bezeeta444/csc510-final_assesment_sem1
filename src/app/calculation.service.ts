import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  //variable decralation

  value: number;
  value2: number;
  value3: number;
  eq1: string ;
  eq2: string ;
  eq3: string;
  answer = '';
  input1: string;
  input2 = '';
  input3 = '';
  conclude: number;



 valueValidate1(valid: number ) {
   this.value = valid;
 }

  valueValidate2(valid2: number) {
  this.value2 = valid2;
  }

  valueValidate3(valid3: number) {
  this.value3 = valid3;
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
     this.conclude = 1;
   }else if (this.value === 3 && this.value2 === 4 && this.value3 === 4 ) {
     this.answer = 'modus tollens';
     this.conclude = 2;
   }else  if (this.value === 3 && this.value2 === 3 && this.value3 === 3 ){
     this.answer = 'hypothetical syllogism';
     this.conclude = 3 ;
   }else  if (this.value === 2 && this.value2 === 4 && this.value3 === 5 ){
     this.answer = 'disjunctive syllogism';
     this.conclude = 4;
   }else  if (this.value === 5 &&  this.value3 === 2 ){
     this.answer = 'addition';
     this.conclude = 5;
   }else  if (this.value === 1 && this.value3 === 5 ){
     this.answer = 'simplification';
     this.conclude = 6;
   }else  if (this.value === 5 && this.value2 === 5 && this.value3 === 1 ){
     this.answer = 'conjuction';
     this.conclude = 7;
   }else  if (this.value === 2 && this.value2 === 2  && this.value3 === 2 ){
     this.answer = 'resolution';
     this.conclude = 8;
   }else {
     this.answer = 'no law';
   }
   return this.answer;
  }



  onPremise1() {
  if(this.conclude === 1){
    this.eq1 = 'P→Q';
  }else if (this.conclude === 2){
    this.eq1 = 'P→Q';
  }else if (this.conclude === 3){
    this.eq1 = 'P→Q';
  }else if (this.conclude === 4){
    this.eq1 = 'P∨Q';
  }else if (this.conclude === 5){
    this.eq1 = 'P';
  }else if (this.conclude === 6){
    this.eq1 = 'P∧Q';
  }else if (this.conclude === 7){
    this.eq1 = 'P';
  }else if (this.conclude === 8){
    this.eq1 = 'P∨Q';
  }else {
    this.eq1 = 'error';
  }

  return this.eq1;
  }

  onPremise2() {
    if (this.conclude === 1){
      this.eq2 = 'P';
    }else if (this.conclude === 2){
      this.eq2 = '¬Q';
    }else if (this.conclude === 3){
      this.eq2 = 'Q→R';
    }else if (this.conclude === 4){
      this.eq2 = '¬P';
    }else if (this.conclude === 5){
      this.eq2 = '-';
    }else if (this.conclude === 6){
      this.eq2 = '-';
    }else if (this.conclude === 7){
      this.eq2 = 'Q';
    }else if (this.conclude === 8){
      this.eq2 = '¬P∨R';
    }else {
      this.eq2 = 'error';
    }

    return this.eq2;
  }

  onPremise3() {
    if (this.conclude === 1){
      this.eq3 = 'Q';
    }else if (this.conclude === 2){
      this.eq3 = '¬P';
    }else if (this.conclude === 3){
      this.eq3 = 'P→R';
    }else if (this.conclude === 4){
      this.eq3 = 'Q';
    }else if (this.conclude === 5){
      this.eq3 = 'P∨Q';
    }else if (this.conclude === 6){
      this.eq3 = 'P';
    }else if (this.conclude === 7){
      this.eq3 = 'P∧Q';
    }else if (this.conclude === 8){
      this.eq3 = 'Q∨R';
    }else {
      this.eq3 = 'error';
    }

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
