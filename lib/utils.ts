import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatPrice(price: number, currency: 'GHS' | 'USD' = 'GHS', opts?: { noSymbol?: boolean }): string {
  if (opts?.noSymbol) {
    // Return just the number, no currency symbol
    return new Intl.NumberFormat('en-GH', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  }
  const formatter = new Intl.NumberFormat('en-GH', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return formatter.format(price);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-GH').format(num)
}