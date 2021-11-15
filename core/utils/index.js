import moment from 'moment';
import 'moment-precise-range-plugin';

export function calculateSumOfNumbers(numbers) {

  return numbers.reduce((accum, next) => {
    return accum + Number(next.amount)
  }, 0)
}

export function getFormattedTime(date) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}
