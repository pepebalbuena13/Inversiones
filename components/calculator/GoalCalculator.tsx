"use client";

import { useMemo, useState } from "react";
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
import { calculateCompoundInterest, calculateRequiredMonthlyContribution } from "@/lib/compound";

const RETURN_PRESETS = [
  { label: "Renta fija / cuentas remuneradas", value: 3 },
  { label: "Fondo indexado global (MSCI World)", value: 7 },
  { label: "S&P 500 (media histórica)", value: 8 },
  { label: "Mercados emergentes (más volátil)", value: 9 },
  { label: "Personalizado", value: -1 },
];

const currencyFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

const currencyFormatterPrecise = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 2,
});

export default function GoalCalculator() {
  const [targetAmount, setTargetAmount] = useState(50000);
  const [initialAmount, setInitialAmount] = useState(0);
  const [years, setYears] = useState(15);
  const [annualReturnRate, setAnnualReturnRate] = useState(7);
  const [selectedPreset, setSelectedPreset] = useState(7);

  const requiredContribution = useMemo(
    () =>
      calculateRequiredMonthlyContribution({
        targetAmount: Number.isFinite(targetAmount) ? targetAmount : 0,
        initialAmount: Number.isFinite(initialAmount) ? initialAmount : 0,
        years: Number.isFinite(years) ? Math.max(1, Math.min(years, 60)) : 1,
        annualReturnRate: Number.isFinite(annualReturnRate) ? annualReturnRate : 0,
      }),
    [targetAmount, initialAmount, years, annualReturnRate]
  );

  const result = useMemo(
    () =>
      calculateCompoundInterest({
        initialAmount: Number.isFinite(initialAmount) ? initialAmount : 0,
        monthlyContribution: requiredContribution,
        years: Number.isFinite(years) ? Math.max(1, Math.min(years, 60)) : 1,
        annualReturnRate: Number.isFinite(annualReturnRate) ? annualReturnRate : 0,
        applyTaxes: false,
      }),
    [initialAmount, requiredContribution, years, annualReturnRate]
  );

  const handlePresetChange = (value: number) => {
    setSelectedPreset(value);
    if (value !== -1) {
      setAnnualReturnRate(value);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="card lg:col-span-2 p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-navy-800">Tu objetivo</h3>
        <div className="mt-6 space-y-5">
          <Field
            label="Cantidad que quieres conseguir (€)"
            value={targetAmount}
            onChange={setTargetAmount}
            min={0}
            step={1000}
            slider={{ min: 0, max: 500000, step: 1000 }}
          />
          <Field
            label="Ya tienes ahorrado (€)"
            value={initialAmount}
            onChange={setInitialAmount}
            min={0}
            step={100}
            slider={{ min: 0, max: 100000, step: 100 }}
          />
          <Field
            label="Años para conseguirlo"
            value={years}
            onChange={setYears}
            min={1}
            max={60}
            step={1}
            slider={{ min: 1, max: 50, step: 1 }}
          />

          <div>
            <label className="block text-sm font-medium text-navy-700">
              Rentabilidad anual esperada
            </label>
            <select
              className="mt-2 w-full rounded-lg border border-navy-200 bg-white px-3 py-2 text-sm text-navy-800 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              value={selectedPreset}
              onChange={(e) => handlePresetChange(Number(e.target.value))}
            >
              {RETURN_PRESETS.map((preset) => (
                <option key={preset.label} value={preset.value}>
                  {preset.label}
                  {preset.value !== -1 ? ` (~${preset.value}%)` : ""}
                </option>
              ))}
            </select>
            {selectedPreset === -1 && (
              <div className="mt-3">
                <Field
                  label="Rentabilidad anual (%)"
                  value={annualReturnRate}
                  onChange={setAnnualReturnRate}
                  min={-20}
                  max={30}
                  step={0.5}
                  hideLabel
                  slider={{ min: -20, max: 30, step: 0.5 }}
                />
              </div>
            )}
            <p className="mt-2 text-xs text-navy-400">
              Valores orientativos basados en medias históricas de largo plazo. La
              rentabilidad pasada no garantiza resultados futuros.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3 space-y-6">
        <div className="card p-6 text-center sm:p-8">
          <p className="text-sm font-medium uppercase tracking-wide text-navy-400">
            Aportación mensual necesaria
          </p>
          <p className="mt-2 text-4xl font-bold text-emerald-700 sm:text-5xl">
            {currencyFormatterPrecise.format(requiredContribution)}
          </p>
          <p className="mt-2 text-sm text-navy-500">
            al mes, durante {years} {years === 1 ? "año" : "años"}, para llegar a{" "}
            {currencyFormatter.format(targetAmount)}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <ResultCard
            label="Total aportado"
            value={currencyFormatter.format(result.totalContributed)}
            accent="bg-navy-600"
          />
          <ResultCard
            label="Generado por intereses"
            value={currencyFormatter.format(result.totalInterest)}
            accent="bg-emerald-600"
          />
        </div>

        <div className="card p-4 sm:p-6">
          <h3 className="mb-4 text-sm font-semibold text-navy-700">
            Evolución del capital año a año
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={result.yearlyBreakdown}>
                <defs>
                  <linearGradient id="colorGoalContributed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1c3a5e" stopOpacity={0.7} />
                    <stop offset="95%" stopColor="#1c3a5e" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="colorGoalInterest" x1="0" y1="0" x2="0" y2="1">
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
                  formatter={(value: number) => currencyFormatterPrecise.format(value)}
                  labelFormatter={(label) => `Año ${label}`}
                />
                <Legend
                  formatter={(value) =>
                    value === "contributed" ? "Aportado" : "Capital total"
                  }
                />
                <Area
                  type="monotone"
                  dataKey="contributed"
                  stroke="#1c3a5e"
                  fill="url(#colorGoalContributed)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="balance"
                  stroke="#17754f"
                  fill="url(#colorGoalInterest)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div className="card p-5">
      <span className={`inline-block h-1.5 w-8 rounded-full ${accent}`} />
      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-navy-400">
        {label}
      </p>
      <p className="mt-1 text-xl font-bold text-navy-800 sm:text-2xl">{value}</p>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
  hideLabel = false,
  slider,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  hideLabel?: boolean;
  slider?: { min: number; max: number; step: number };
}) {
  return (
    <div>
      {!hideLabel && (
        <label className="block text-sm font-medium text-navy-700">{label}</label>
      )}
      <input
        type="number"
        inputMode="decimal"
        value={Number.isNaN(value) ? "" : value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(e.target.valueAsNumber)}
        className={`${
          hideLabel ? "" : "mt-2"
        } w-full rounded-lg border border-navy-200 bg-white px-3 py-2 text-sm text-navy-800 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500`}
        aria-label={hideLabel ? label : undefined}
      />
      {slider && (
        <input
          type="range"
          min={slider.min}
          max={slider.max}
          step={slider.step}
          value={Number.isNaN(value) ? slider.min : Math.min(Math.max(value, slider.min), slider.max)}
          onChange={(e) => onChange(Number(e.target.value))}
          className="mt-2 w-full accent-emerald-600"
          aria-label={`${label} (control deslizante)`}
        />
      )}
    </div>
  );
}
