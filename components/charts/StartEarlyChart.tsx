"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { calculateCompoundInterest } from "@/lib/compound";

const MONTHLY_CONTRIBUTION = 200;
const ANNUAL_RETURN_RATE = 7;
const START_AGE_A = 25;
const START_AGE_B = 35;
const END_AGE = 65;

const investorA = calculateCompoundInterest({
  initialAmount: 0,
  monthlyContribution: MONTHLY_CONTRIBUTION,
  years: END_AGE - START_AGE_A,
  annualReturnRate: ANNUAL_RETURN_RATE,
  applyTaxes: false,
});

const investorB = calculateCompoundInterest({
  initialAmount: 0,
  monthlyContribution: MONTHLY_CONTRIBUTION,
  years: END_AGE - START_AGE_B,
  annualReturnRate: ANNUAL_RETURN_RATE,
  applyTaxes: false,
});

const data = Array.from({ length: END_AGE - START_AGE_A + 1 }, (_, i) => {
  const age = START_AGE_A + i;
  const balanceA = investorA.yearlyBreakdown[i]?.balance ?? 0;
  const balanceB = age < START_AGE_B ? 0 : investorB.yearlyBreakdown[age - START_AGE_B]?.balance ?? 0;
  return { age, balanceA, balanceB };
});

const currencyFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export default function StartEarlyChart() {
  return (
    <div className="card p-4 sm:p-6">
      <h4 className="text-sm font-semibold text-navy-700">
        Mismo esfuerzo mensual (200 €/mes al 7 %), diez años de diferencia
      </h4>
      <div className="mt-4 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e4e9f0" />
            <XAxis
              dataKey="age"
              tickFormatter={(v) => `${v} años`}
              tick={{ fontSize: 12, fill: "#4a6f96" }}
            />
            <YAxis
              tickFormatter={(v) => currencyFormatter.format(v)}
              tick={{ fontSize: 12, fill: "#4a6f96" }}
              width={80}
            />
            <Tooltip
              formatter={(value: number) => currencyFormatter.format(value)}
              labelFormatter={(label) => `Edad: ${label} años`}
            />
            <Legend
              formatter={(value) =>
                value === "balanceA" ? "Empieza a los 25" : "Empieza a los 35"
              }
            />
            <Line
              type="monotone"
              dataKey="balanceA"
              stroke="#17754f"
              strokeWidth={2.5}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="balanceB"
              stroke="#4a6f96"
              strokeWidth={2.5}
              dot={false}
              strokeDasharray="5 4"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Empieza a los 25
          </p>
          <p className="mt-1 text-lg font-bold text-navy-800">
            {currencyFormatter.format(investorA.finalBalance)}
          </p>
          <p className="mt-1 text-xs text-navy-500">
            Aportado: {currencyFormatter.format(investorA.totalContributed)} en 40 años
          </p>
        </div>
        <div className="rounded-lg border border-navy-100 bg-navy-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-navy-600">
            Empieza a los 35
          </p>
          <p className="mt-1 text-lg font-bold text-navy-800">
            {currencyFormatter.format(investorB.finalBalance)}
          </p>
          <p className="mt-1 text-xs text-navy-500">
            Aportado: {currencyFormatter.format(investorB.totalContributed)} en 30 años
          </p>
        </div>
      </div>
      <p className="mt-3 text-xs text-navy-400">
        Ambos aportan lo mismo cada mes hasta los 65 años. Empezar diez años antes
        supone aportar {currencyFormatter.format(investorA.totalContributed - investorB.totalContributed)}{" "}
        más en total, pero genera una diferencia de capital final mucho mayor gracias
        al interés compuesto.
      </p>
    </div>
  );
}
