import {
  ACCOUNT_CATEGORY,
  ACCOUNT_TYPE,
  ACCOUNT_VALUE_TYPE,
} from "./constants";
import { AccountItem } from "./types";

/**
 * Calculates the total revenue from a list of account items.
 *
 * @param {AccountItem[]} data - An array of account items.
 * @returns {number} The total revenue calculated from the account items.
 */
export function calculateRevenue(data: AccountItem[]): number {
  return data
    .filter((item) => item.account_category === ACCOUNT_CATEGORY.REVENUE)
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
    .filter((item) => item.account_category === ACCOUNT_CATEGORY.EXPENSE)
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
  if (revenue === 0) {
    throw new Error("Revenue cannot be zero.");
  }

  const salesDebit = data
    .filter(
      (item) =>
        item.account_type === ACCOUNT_TYPE.SALES &&
        item.value_type === ACCOUNT_VALUE_TYPE.DEBIT
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
  if (revenue === 0) {
    throw new Error("Revenue cannot be zero.");
  }
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
        item.account_category === ACCOUNT_CATEGORY.ASSETS &&
        item.value_type === ACCOUNT_VALUE_TYPE.DEBIT &&
        [
          ACCOUNT_TYPE.CURRENT,
          ACCOUNT_TYPE.BANK,
          ACCOUNT_TYPE.CURRENT_ACCOUNTS_RECEIVABLE,
        ].includes(item.account_type)
    )
    .reduce((sum, item) => sum + item.total_value, 0);

  const assetsCredit = data
    .filter(
      (item) =>
        item.account_category === ACCOUNT_CATEGORY.ASSETS &&
        item.value_type === ACCOUNT_VALUE_TYPE.CREDIT &&
        [
          ACCOUNT_TYPE.CURRENT,
          ACCOUNT_TYPE.BANK,
          ACCOUNT_TYPE.CURRENT_ACCOUNTS_RECEIVABLE,
        ].includes(item.account_type)
    )
    .reduce((sum, item) => sum + item.total_value, 0);

  const liabilitiesCredit = data
    .filter(
      (item) =>
        item.account_category === ACCOUNT_CATEGORY.LIABILITY &&
        item.value_type === ACCOUNT_VALUE_TYPE.CREDIT &&
        [
          ACCOUNT_TYPE.CURRENT,
          ACCOUNT_TYPE.CURRENT_ACCOUNTS_RECEIVABLE,
        ].includes(item.account_type)
    )
    .reduce((sum, item) => sum + item.total_value, 0);

  const liabilitiesDebit = data
    .filter(
      (item) =>
        item.account_category === ACCOUNT_CATEGORY.LIABILITY &&
        item.value_type === ACCOUNT_VALUE_TYPE.DEBIT &&
        [
          ACCOUNT_TYPE.CURRENT,
          ACCOUNT_TYPE.CURRENT_ACCOUNTS_RECEIVABLE,
        ].includes(item.account_type)
    )
    .reduce((sum, item) => sum + item.total_value, 0);

  const assets = assetsDebit - assetsCredit;
  const liabilities = liabilitiesCredit - liabilitiesDebit;

  return assets / liabilities;
}
