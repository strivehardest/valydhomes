"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

const SUPPORTED = ["GHS", "USD", "GBP"];
const SYMBOLS: Record<string, string> = {
  GHS: "GH₵",
  USD: "$",
  GBP: "£",
};

type CurrencyContextType = {
  currency: string;
  setCurrency: (c: string) => void;
  rates: Record<string, number>;
  loading: boolean;
  convert: (amount: number, to: string) => number;
  SUPPORTED: string[];
  SYMBOLS: Record<string, string>;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function useCurrencyContext() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) throw new Error("useCurrencyContext must be used within CurrencyProvider");
  return ctx;
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  // Use USD as base for live rates
  const base = "USD";
  const [currency, setCurrency] = useState(base);
  const [rates, setRates] = useState<Record<string, number>>({ [base]: 1 });
  const [loading, setLoading] = useState(false);

  // Manually set GHS/USD rate (update as needed)
  const GHS_TO_USD = 0.075; // Example: 1 GHS = 0.075 USD (update this value periodically)

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.frankfurter.app/latest?from=${base}&to=${SUPPORTED.filter(c => c !== base && c !== "GHS").join(",")}`
    )
      .then((res) => res.json())
      .then((data) => {
        // Add GHS manually
        setRates({ ...data.rates, GHS: 1 / GHS_TO_USD, [base]: 1 });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [base]);

  function convert(amount: number, to: string) {
    if (currency === "GHS") {
      // Convert USD to GHS using manual rate
      return amount / GHS_TO_USD;
    }
    if (!rates[to]) return 0;
    return amount * rates[to];
  }

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, rates, loading, convert, SUPPORTED, SYMBOLS }}>
      {children}
    </CurrencyContext.Provider>
  );
}