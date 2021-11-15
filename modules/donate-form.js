import {settings} from '../core/constants/settings';

const currency = settings.currency

export class DonateForm {
  constructor(totalAmount, createNewDonate) {
    this.totalAmount = totalAmount;
    this.createNewDonate = createNewDonate;
  }
  render() {
    document.body.insertAdjacentHTML('beforeend', `
      <form class="donate-form">
        <h1 id="total-amount">28${currency}</h1>
        <label class="donate-form__input-label">
          Введите сумму в ${currency}
          <input class="donate-form__donate-input" name="amount" type="number" max="100" min="0" required="">
        </label>
        <button class="donate-form__submit-button" type="submit">
          Задонатить
        </button>
      </form>
    `);

    const donateForm = document.querySelector('.donate-form')
    const donateInput = document.querySelector('.donate-form__donate-input');

    donateForm.addEventListener('submit', (event => {
      event.preventDefault();
        let newAmount = { amount: Number(donateInput.value), date: new Date() }
        donateInput.value = '';
        this.createNewDonate(newAmount);
    }))
  }

  updateTotalAmount(newAmount = 0) {
    const totalAmount = document.querySelector('#total-amount')
    totalAmount.innerHTML = newAmount + currency;
  }
}
