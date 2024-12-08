// Helper function to format currency
export function formatCurrency(amount: number): string {
  return `$${amount.toLocaleString("en-US", { minimumFractionDigits: 0 })}`;
}

// Helper function to format percentage
export function formatPercentage(amount: number): string {
  return `${(amount * 100).toFixed(1)}%`;
}
