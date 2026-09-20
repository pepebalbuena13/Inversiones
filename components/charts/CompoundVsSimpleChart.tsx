"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const PRINCIPAL = 10000;
const RATE = 0.07;
const YEARS = 20;

const data = Array.from({ length: YEARS + 1 }, (_, year) => ({
  year,
  simple: Math.round(PRINCIPAL * (1 + RATE * year)),
  compound: Math.round(PRINCIPAL * Math.pow(1 + RATE, year)),
}));

const currencyFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

export default function CompoundVsSimpleChart() {
  return (
    <div className="card p-4 sm:p-6">
      <h4 className="text-sm font-semibold text-navy-700">
        10.000 € al 7 % anual, sin aportaciones: interés simple vs. compuesto
      </h4>
      <div className="mt-4 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="simpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4a6f96" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#4a6f96" stopOpacity={0.05} />
              </linearGradient>
              <linearGradient id="compoundGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#17754f" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#17754f" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e4e9f0" />
            <XAxis
              dataKey="year"
              tickFormatter={(v) => `Año ${v}`}
              tick={{ fontSize: 12, fill: "#4a6f96" }}
            />
            <YAxis
              tickFormatter={(v) => currencyFormatter.format(v)}
              tick={{ fontSize: 12, fill: "#4a6f96" }}
              width={80}
            />
            <Tooltip
              formatter={(value: number) => currencyFormatter.format(value)}
              labelFormatter={(label) => `Año ${label}`}
            />
            <Legend
              formatter={(value) => (value === "simple" ? "Interés simple" : "Interés compuesto")}
            />
            <Area
              type="monotone"
              dataKey="simple"
              stroke="#4a6f96"
              fill="url(#simpleGradient)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="compound"
              stroke="#17754f"
              fill="url(#compoundGradient)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-3 text-xs text-navy-400">
        Con interés simple, los intereses se calculan siempre sobre los 10.000&nbsp;€
        iniciales. Con interés compuesto, cada año se calculan sobre el capital
        acumulado, incluidos los intereses de años anteriores: por eso la curva se
        despega con el tiempo.
      </p>
    </div>
  );
}
