export function formatNumber(value: number, decimal: number = 2) {
  return Number(value.toFixed(decimal));
}
