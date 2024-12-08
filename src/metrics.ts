import { AccountItem } from "./types";

/**
 * Calculates the total revenue from a list of account items.
 *
 * @param {AccountItem[]} data - An array of account items.
 * @returns {number} The total revenue calculated from the account items.
 */
export function calculateRevenue(data: AccountItem[]): number {
  return data
    .filter((item) => item.account_category === "revenue")
    .reduce((sum, item) => sum + item.total_value, 0);
}

/**
 * Calculates the total expenses from a list of account items.
 *
 * @param {AccountItem[]} data - The list of account items to calculate expenses from.
 * @returns {number} The total value of all items categorized as expenses.
 */
export function calculateExpenses(data: AccountItem[]): number {
  return data
    .filter((item) => item.account_category === "expense")
    .reduce((sum, item) => sum + item.total_value, 0);
}

/**
 * Calculates the gross profit margin.
 *
 * @param data - An array of account items.
 * @param revenue - The total revenue.
 * @returns The gross profit margin as a number.
 */
export function calculateGrossProfitMargin(
  data: AccountItem[],
  revenue: number
): number {
  const salesDebit = data
    .filter(
      (item) => item.account_type === "sales" && item.value_type === "debit"
    )
    .reduce((sum, item) => sum + item.total_value, 0);
  return salesDebit / revenue;
}

/**
 * Calculates the net profit margin.
 *
 *
 * @param revenue - The total revenue generated.
 * @param expenses - The total expenses incurred.
 * @returns The net profit margin as a decimal.
 */
export function calculateNetProfitMargin(
  revenue: number,
  expenses: number
): number {
  return (revenue - expenses) / revenue;
}

/**
 * Calculates the working capital ratio from a list of account items.
 *
 * @param {AccountItem[]} data - An array of account items.
 * @returns {number} The working capital ratio.
 */
export function calculateWorkingCapitalRatio(data: AccountItem[]): number {
  const assetsDebit = data
    .filter(
      (item) =>
        item.account_category === "assets" &&
        item.value_type === "debit" &&
        ["current", "bank", "current_accounts_receivable"].includes(
          item.account_type
        )
    )
    .reduce((sum, item) => sum + item.total_value, 0);

  const assetsCredit = data
    .filter(
      (item) =>
        item.account_category === "assets" &&
        item.value_type === "credit" &&
        ["current", "bank", "current_accounts_receivable"].includes(
          item.account_type
        )
    )
    .reduce((sum, item) => sum + item.total_value, 0);

  const liabilitiesCredit = data
    .filter(
      (item) =>
        item.account_category === "liability" &&
        item.value_type === "credit" &&
        ["current", "current_accounts_payable"].includes(item.account_type)
    )
    .reduce((sum, item) => sum + item.total_value, 0);

  const liabilitiesDebit = data
    .filter(
      (item) =>
        item.account_category === "liability" &&
        item.value_type === "debit" &&
        ["current", "current_accounts_payable"].includes(item.account_type)
    )
    .reduce((sum, item) => sum + item.total_value, 0);

  const assets = assetsDebit - assetsCredit;
  const liabilities = liabilitiesCredit - liabilitiesDebit;

  return assets / liabilities;
}
