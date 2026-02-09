import { useEffect, useState } from "react";

const SUPPORTED = ["GHS", "USD", "GBP", "NGN", "XOF"];
const SYMBOLS: Record<string, string> = {
  GHS: "GHS",
  USD: "$",
  GBP: "£",
  NGN: "₦",
  XOF: "CFA",
};

export function useCurrency(base: string = "GHS") {
  const [currency, setCurrency] = useState(base);
  const [rates, setRates] = useState<Record<string, number>>({ [base]: 1 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(
      `https://api.exchangerate.host/latest?base=${base}&symbols=${SUPPORTED.join(",")}`
    )
      .then((res) => res.json())
      .then((data) => {
        // Always ensure base currency is present and set to 1
        setRates({ ...data.rates, [base]: 1 });
        setLoading(false);
      })
      .catch((e) => {
        setError("Failed to fetch rates");
        setLoading(false);
      });
  }, [base]);

  function convert(amount: number, to: string) {
    if (!rates[to]) {
      // If the target currency is missing, return 0 to indicate unavailable
      return 0;
    }
    return amount * rates[to];
  }

  return {
    currency,
    setCurrency,
    rates,
    loading,
    error,
    convert,
    SUPPORTED,
    SYMBOLS,
  };
}
