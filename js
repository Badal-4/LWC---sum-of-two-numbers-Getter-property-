import {LightningElement} from 'lwc';
export default class sumOfNumbers extends LightningElement 
{
  firstNumber;
  secondNumber;

  handleChange(event) 
  {
    if(event.target.name === 'input1')
    {
      this.firstNumber = event.target.value;
    }

    else if(event.target.name === 'input2')
    {
      this.secondNumber = event.target.value;
    }
  }

  get sumOfNumbers()
  {
    if(this.firstNumber && this.secondNumber)
    {
      return parseInt(this.firstNumber) + parseInt(this.secondNumber);
    }
  }
}
