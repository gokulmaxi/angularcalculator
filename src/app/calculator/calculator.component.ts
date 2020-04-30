import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  currentNumber = '0';
  fistOperand = null;
  operator = null;
  waitForSecondNumber =false;
  public getNumber(v: string){
    console.log(v);
    if(this.waitForSecondNumber)
    {
    this.currentNumber = v;
    this.waitForSecondNumber = false;
    }else{
    this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;
    
    }
    
    }
  constructor() { }

  ngOnInit(): void {
  }

}
