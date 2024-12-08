import { formatCurrency, formatPercentage } from "./formatter";
import { loadData } from "./helper";
import {
  calculateRevenue,
  calculateExpenses,
  calculateGrossProfitMargin,
  calculateNetProfitMargin,
  calculateWorkingCapitalRatio,
} from "./metrics";
import { Data } from "./types";

try {
  // load the data from the file
  const { data }: Data = loadData("data.json");

  // calculate metrics
  const revenue = calculateRevenue(data);
  const expenses = calculateExpenses(data);
  const grossProfitMargin = calculateGrossProfitMargin(data, revenue);
  const netProfitMargin = calculateNetProfitMargin(revenue, expenses);
  const workingCapitalRatio = calculateWorkingCapitalRatio(data);

  // display the results
  console.log(`Revenue: ${formatCurrency(revenue)}`);
  console.log(`Expenses: ${formatCurrency(expenses)}`);
  console.log(`Gross Profit Margin: ${formatPercentage(grossProfitMargin)}`);
  console.log(`Net Profit Margin: ${formatPercentage(netProfitMargin)}`);
  console.log(
    `Working Capital Ratio: ${formatPercentage(workingCapitalRatio)}`
  );
} catch (error: any) {
  console.log(`Error occurred while calculating metrics: ${error}`);
}
