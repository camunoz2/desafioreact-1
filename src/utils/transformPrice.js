export function numberToClpPrice(number) {
  const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  return formatter.format(number);
}
