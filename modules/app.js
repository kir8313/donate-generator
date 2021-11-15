import { DonateForm as Form } from './donate-form';
import { DonateList as List } from './donate-list';
import * as helperFunctions from '../core/utils/index'

class App {
  constructor(donates = []) {
    this.state = {
      donates,
      totalAmount: 0,
    }
    this.donateForm = new Form(this.state.totalAmount, this.createNewDonate.bind(this));
    this.donateList = new List(this.state.donates);
  }

  run() {
    // document.body.insertAdjacentHTML('afterbegin', `<p>Hello world</p>`)

    this.state.totalAmount = helperFunctions.calculateSumOfNumbers(this.state.donates)
    this.donateForm.render()
    this.donateList.render()
  }

  createNewDonate(newDonate = 0) {
    this.state.donates.push(newDonate);
    this.state.totalAmount += newDonate.amount;
    this.donateList.updateDonates(this.state.donates)

    new Form(this.state.totalAmount, this.createNewDonate.bind(this)).updateTotalAmount(this.state.totalAmount);
  }
}

export default App;

export const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() },
];
