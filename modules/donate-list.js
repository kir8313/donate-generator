import {settings} from '../core/constants/settings';
import * as helperFunctions from '../core/utils/index'


const currency = settings.currency

export class DonateList {
  #donates;
  constructor(donates = []) {
    this.#donates = donates;
  }

  render() {
    document.body.insertAdjacentHTML('afterbegin', `
    <div class="donates-container">
      <h2 class="donates-container__title">Список донатов</h2>
      <div class="donates-container__donates"></div>
    </div>
    `)

    document.querySelector('.donates-container__donates').innerHTML = this.#donates.map(item => `
    <div class="donate-item">${helperFunctions.getFormattedTime(item.date)} - <b>${item.amount}${currency}</b></div>
    `).join('');
  }

  updateDonates(updatedDonates) {
    document.querySelector('.donates-container__donates').innerHTML = updatedDonates.map(item => `
    <div class="donate-item">${helperFunctions.getFormattedTime(item.date)} - <b>${item.amount}${currency}</b></div>
    `).join('');
  }
}
