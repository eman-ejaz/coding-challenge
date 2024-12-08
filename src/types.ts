import {
  ACCOUNT_CATEGORY,
  ACCOUNT_TYPE,
  ACCOUNT_VALUE_TYPE,
} from "./constants";

/**
 * Represents an account item with details about its category, type, value type, and total value.
 */
export interface AccountItem {
  account_category: ACCOUNT_CATEGORY;
  account_type: ACCOUNT_TYPE;
  value_type: ACCOUNT_VALUE_TYPE;
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
  object_category: string;
  connection_id: string;
  user: string;
  object_creation_date: string;
}
