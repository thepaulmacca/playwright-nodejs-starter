import { expect, test } from "@playwright/test";

const people = ['Alice', 'Bob'];

for (const name of people) {
  test(`Testing ${name}`, async () => {
    console.log(name);
  });
}

const inputs = [
  ["10", "6 months", "After 6 Months you will earn $0.20 on your deposit"],
  ["20", "1 Year", "After 1 Year you will earn $1.00 on your deposit"]
];

for (const [sum, period, result] of inputs) {
  test(`Testing with ${sum} ${period} ${result}`, async ({ page }) => {

    await page.goto('/savings.html');
    await page.getByTestId('deposit').fill(sum);
    await page.getByTestId('period').selectOption(period);

    await expect(page.getByTestId('result')).toHaveText(result);
  });
}
