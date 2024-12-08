RewardPay Coding Challenge
============================

This project is a TypeScript-based application for calculating various financial metrics, including revenue, expenses, gross profit margin, net profit margin, and working capital ratio, based on account data provided in a JSON file. The app is designed to process financial data, perform calculations, and output formatted results to the console.

Features
--------

-   Calculate key financial metrics:
    -   Revenue
    -   Expenses
    -   Gross Profit Margin
    -   Net Profit Margin
    -   Working Capital Ratio
-   Parses and processes account data from a JSON file.
-   Outputs results in a user-friendly, formatted manner (currency and percentage formatting).

Requirements
------------

-   Node.js
-   TypeScript

Installation
------------

1.  **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd <repository-folder>
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Build the project**:

    ```bash
    npm run build
    ```

4.  **Run the project**:

    ```bash
    npm start
    ```

File Structure
--------------

```bash
├── src
│   ├── constants.ts        # Constants and enumerations
│   ├── formatter.ts        # Helper functions for formatting outputs
│   ├── helper.ts           # Utility functions (e.g., file loading)
│   ├── metrics.ts          # Core logic for financial metric calculations
│   ├── types.ts            # Type definitions for data structures
│   └── index.ts            # Main entry point of the application
├── assets
│   └── data.json          # Sample data file (financial account data)
├── dist                    # Compiled output (generated after build)
├── package.json            # Project metadata and dependencies
└── tsconfig.json           # TypeScript configuration file
```

How to Use
----------

1.  Place your JSON file with financial data in the `assets` folder. The file should follow this structure:

    ```json
    {
      "data": [
        {
          "account_category": "revenue",
          "account_type": "sales",
          "value_type": "debit",
          "total_value": 50000
        },
        ...
      ],
      "object_category": "financial_metrics",
      "connection_id": "1234",
      "user": "example_user",
      "object_creation_date": "2023-01-01"
    }
    ```

2.  Run the application using:

    ```bash
    npm start
    ```

3.  View the calculated metrics in the console output.

Metrics Explained
-----------------

### Revenue

Sum of all items categorized under `ACCOUNT_CATEGORY.REVENUE`.

### Expenses

Sum of all items categorized under `ACCOUNT_CATEGORY.EXPENSE`.

### Gross Profit Margin

Calculated as:

```plaintext
(Sales Debit) / Revenue
```

### Net Profit Margin

Calculated as:

```plaintext
(Revenue - Expenses) / Revenue
```

### Working Capital Ratio

Calculated as:

```plaintext
(Current Assets - Current Liabilities) / Current Liabilities
```

Development
-----------

To modify or extend the project:

1.  Edit the TypeScript files in the `src` directory.
2.  Rebuild the project:

    ```bash
    npm run build
    ```

3.  Run the updated application:

    ```bash

    npm start
    ```

Troubleshooting
---------------

-   Ensure the JSON data file is formatted correctly and matches the `Data` type structure.
-   If the `dist` folder is missing, rebuild the project using `npm run build`.
