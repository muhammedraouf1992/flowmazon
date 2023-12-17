export function format(price) {
  return price.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
