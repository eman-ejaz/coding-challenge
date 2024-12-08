/**
 * Represents an account item with details about its category, type, value type, and total value.
 */
export interface AccountItem {
  account_category: string;
  account_type: string;
  value_type: string;
  total_value: number;
}

/**
 * Represents the structure of the data object.
 * 
 * @interface Data
 * @property {AccountItem[]} data - An array of AccountItem objects.
 */
export interface Data {
  data: AccountItem[];
}
