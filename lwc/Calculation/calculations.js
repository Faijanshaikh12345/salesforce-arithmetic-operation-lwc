import { LightningElement, track } from 'lwc';

export default class Calculations extends LightningElement {

    @track firstNumber = 0;
    @track secondNumber = 0;
    @track result;
    handleChange(event) {
        const oprationName = event.target.name;
        if (oprationName == 'num1') {
            this.firstNumber = Number(event.target.value);
        }
        else if (oprationName == 'num2') {
            this.secondNumber = Number(event.target.value);
        }
    }
   add() {
        this.result = this.firstNumber + this.secondNumber;
    }
    sub() {
        this.result = this.firstNumber - this.secondNumber;
    }
    mul() {
        this.result = this.firstNumber * this.secondNumber;
    }
    div(){
        if (this.secondNumber !== 0) {
            this.result = this.firstNumber / this.secondNumber;
        } else {
            this.result = 'Cannot divide by zero';
        }
    }
}