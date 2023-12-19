/*
Given a monthly salary s in dollars, a list of debts, and a list of interests for these debts, your task is to pay all the debts while spending the least possible amount of money. However, you have a strict restriction: you can spend no more than 10% of your salary on covering debts.

There is also a rule on how the required payment can change according to your previous payments: if at the end of the month, you do not fully pay your ith debt, its amount increases by (interests[i] / 100) * debts[i] dollars. In other words, if at the end of the month for some i where debts[i] > 0, then debts[i] becomes equal to

debts[i] + debts[i] * (interests[i] / 100)
You can pay for the debts in any order. Return the minimum possible amount of money required to cover all the debts.

Example

For s = 50, debts = [2, 2, 5], and interests = [200, 100, 150], the output should be solution(s, debts, interests) = 22.

Each month you are allowed to spend $5 to cover the debts ($50 * 10% = $5).

Here's a way to pay all the debts over a period of 5 months, spending the minimal amount of $22 for it:

During the 1st month, spend $2 to cover debts[0] and $3 to partially cover debts[2]. After that the debts array will look like [0, 2, 2]. After recalculations it will look like [0, 2 + 2 * (100 / 100), 2 + (2 * 150 / 100)] = [0, 4, 5].
During the 2nd month, spend $5 to cover debts[2]. After that the debts array will look like [0, 4, 0]. After recalculations it will look like [0, 4 + 4 * (100 / 100), 0] = [0, 8, 0].
During the 3rd month, spend $5 to partially cover debts[1]. After that the debts array will look like [0, 3, 0]. After recalculations it will look like [0, 3 + 3 * (100 / 100), 0] = [0, 6, 0].
During the 4th month, spend $5 one more time to partially cover debts[1] again. After that the debts array will look like [0, 1, 0]. After recalculations the debts array will look like [0, 1 + 1 * (100 / 100), 0] = [0, 2, 0].
During the 5th month, spend $2 to cover the remaining part of debts[1].
So over the course of 5 months, you will have paid $5 + $5 + $5 + $5 + $2 = $22 to cover all the debts.
*/
function solution(s, debts, interests) {
  let total = 0;
  let debtsLeft = debts.reduce((acc, debt) => acc + debt, 0);
  while (debtsLeft > 0) {
    let thisMonthPayment = Math.min(s * 0.1, debtsLeft);
    while(thisMonthPayment > 0) {
      debts.forEach((debt, i) => {
        if (debt > 0) {
          const payment = Math.min(monthlyPayment, debt);
          debts[i] = debt - payment;
          debtsLeft -= payment;
          const interest = Math.floor(debt * (interests[i] / 100));
          debts[i] += interest;
          debtsLeft += interest;
        }
      });
      total += monthlyPayment;
    }
  }
  return total;
}

console.log(solution(50, [2, 2, 5], [200, 100, 150])); // 22