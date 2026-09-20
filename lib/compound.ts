export interface CompoundInterestInputs {
  initialAmount: number;
  monthlyContribution: number;
  years: number;
  annualReturnRate: number; // percentage, e.g. 7 for 7%
  applyTaxes: boolean;
}

export interface YearlyBreakdown {
  year: number;
  contributed: number;
  balance: number;
  interestEarned: number;
}

export interface CompoundInterestResult {
  finalBalance: number;
  totalContributed: number;
  totalInterest: number;
  taxesPaid: number;
  finalBalanceAfterTax: number;
  yearlyBreakdown: YearlyBreakdown[];
}

/**
 * Spanish IRPF "base del ahorro" brackets (2024/2025), applied to the gain only.
 */
const IRPF_SAVINGS_BRACKETS = [
  { upTo: 6000, rate: 0.19 },
  { upTo: 50000, rate: 0.21 },
  { upTo: 200000, rate: 0.23 },
  { upTo: 300000, rate: 0.27 },
  { upTo: Infinity, rate: 0.3 },
];

export function calculateIrpfOnGain(gain: number): number {
  if (gain <= 0) return 0;
  let remaining = gain;
  let previousLimit = 0;
  let tax = 0;

  for (const bracket of IRPF_SAVINGS_BRACKETS) {
    const bracketSize = bracket.upTo - previousLimit;
    const taxableInBracket = Math.min(remaining, bracketSize);
    if (taxableInBracket <= 0) break;
    tax += taxableInBracket * bracket.rate;
    remaining -= taxableInBracket;
    previousLimit = bracket.upTo;
    if (remaining <= 0) break;
  }

  return tax;
}

export function calculateCompoundInterest(
  inputs: CompoundInterestInputs
): CompoundInterestResult {
  const { initialAmount, monthlyContribution, years, annualReturnRate, applyTaxes } =
    inputs;

  const monthlyRate = Math.pow(1 + annualReturnRate / 100, 1 / 12) - 1;
  const yearlyBreakdown: YearlyBreakdown[] = [];

  let balance = initialAmount;
  let contributed = initialAmount;

  yearlyBreakdown.push({
    year: 0,
    contributed: round2(contributed),
    balance: round2(balance),
    interestEarned: 0,
  });

  for (let year = 1; year <= years; year++) {
    for (let month = 1; month <= 12; month++) {
      balance = balance * (1 + monthlyRate) + monthlyContribution;
      contributed += monthlyContribution;
    }
    yearlyBreakdown.push({
      year,
      contributed: round2(contributed),
      balance: round2(balance),
      interestEarned: round2(balance - contributed),
    });
  }

  const finalBalance = balance;
  const totalContributed = contributed;
  const totalInterest = finalBalance - totalContributed;
  const taxesPaid = applyTaxes ? calculateIrpfOnGain(totalInterest) : 0;
  const finalBalanceAfterTax = finalBalance - taxesPaid;

  return {
    finalBalance: round2(finalBalance),
    totalContributed: round2(totalContributed),
    totalInterest: round2(totalInterest),
    taxesPaid: round2(taxesPaid),
    finalBalanceAfterTax: round2(finalBalanceAfterTax),
    yearlyBreakdown,
  };
}

export interface GoalContributionInputs {
  targetAmount: number;
  initialAmount: number;
  years: number;
  annualReturnRate: number;
}

/**
 * Solves the compound interest formula for the monthly contribution needed
 * to reach a target amount, given an initial amount, a time horizon and an
 * expected annual return.
 */
export function calculateRequiredMonthlyContribution({
  targetAmount,
  initialAmount,
  years,
  annualReturnRate,
}: GoalContributionInputs): number {
  const monthlyRate = Math.pow(1 + annualReturnRate / 100, 1 / 12) - 1;
  const months = years * 12;
  const growthFactor = Math.pow(1 + monthlyRate, months);
  const futureValueOfInitial = initialAmount * growthFactor;
  const remaining = targetAmount - futureValueOfInitial;

  if (remaining <= 0) return 0;

  if (Math.abs(monthlyRate) < 1e-9) {
    return round2(remaining / months);
  }

  const annuityFactor = (growthFactor - 1) / monthlyRate;
  return round2(remaining / annuityFactor);
}

function round2(value: number): number {
  return Math.round(value * 100) / 100;
}
