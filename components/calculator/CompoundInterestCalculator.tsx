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
import { calculateCompoundInterest } from "@/lib/compound";

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

export default function CompoundInterestCalculator() {
  const [initialAmount, setInitialAmount] = useState(1000);
  const [monthlyContribution, setMonthlyContribution] = useState(150);
  const [years, setYears] = useState(20);
  const [annualReturnRate, setAnnualReturnRate] = useState(7);
  const [selectedPreset, setSelectedPreset] = useState(7);
  const [applyTaxes, setApplyTaxes] = useState(false);

  const result = useMemo(
    () =>
      calculateCompoundInterest({
        initialAmount: Number.isFinite(initialAmount) ? initialAmount : 0,
        monthlyContribution: Number.isFinite(monthlyContribution)
          ? monthlyContribution
          : 0,
        years: Number.isFinite(years) ? Math.max(1, Math.min(years, 60)) : 1,
        annualReturnRate: Number.isFinite(annualReturnRate) ? annualReturnRate : 0,
        applyTaxes,
      }),
    [initialAmount, monthlyContribution, years, annualReturnRate, applyTaxes]
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
        <h3 className="text-lg font-semibold text-navy-800">Tus datos</h3>
        <div className="mt-6 space-y-5">
          <Field
            label="Inversión inicial (€)"
            value={initialAmount}
            onChange={setInitialAmount}
            min={0}
            step={100}
          />
          <Field
            label="Aportación mensual (€)"
            value={monthlyContribution}
            onChange={setMonthlyContribution}
            min={0}
            step={10}
          />
          <Field
            label="Años de inversión"
            value={years}
            onChange={setYears}
            min={1}
            max={60}
            step={1}
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
                />
              </div>
            )}
            <p className="mt-2 text-xs text-navy-400">
              Valores orientativos basados en medias históricas de largo plazo. La
              rentabilidad pasada no garantiza resultados futuros.
            </p>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-navy-100 bg-navy-50 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-navy-800">
                Aplicar impuestos (IRPF)
              </p>
              <p className="text-xs text-navy-400">
                Simula la tributación española sobre las ganancias
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={applyTaxes}
              onClick={() => setApplyTaxes((v) => !v)}
              className={`relative h-6 w-11 shrink-0 rounded-full transition-colors ${
                applyTaxes ? "bg-emerald-600" : "bg-navy-200"
              }`}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                  applyTaxes ? "translate-x-5" : "translate-x-0.5"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3 space-y-6">
        <div className="grid gap-4 sm:grid-cols-3">
          <ResultCard
            label="Capital final"
            value={currencyFormatter.format(
              applyTaxes ? result.finalBalanceAfterTax : result.finalBalance
            )}
            accent="bg-emerald-600"
          />
          <ResultCard
            label="Total aportado"
            value={currencyFormatter.format(result.totalContributed)}
            accent="bg-navy-600"
          />
          <ResultCard
            label="Intereses generados"
            value={currencyFormatter.format(result.totalInterest)}
            accent="bg-navy-400"
          />
        </div>

        {applyTaxes && (
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
            Impuestos estimados sobre la ganancia (tramos del IRPF del ahorro):{" "}
            <strong>{currencyFormatterPrecise.format(result.taxesPaid)}</strong>.
            Capital final neto de impuestos:{" "}
            <strong>{currencyFormatterPrecise.format(result.finalBalanceAfterTax)}</strong>.
          </div>
        )}

        <div className="card p-4 sm:p-6">
          <h3 className="mb-4 text-sm font-semibold text-navy-700">
            Evolución del capital año a año
          </h3>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={result.yearlyBreakdown}>
                <defs>
                  <linearGradient id="colorContributed" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#1c3a5e" stopOpacity={0.7} />
                    <stop offset="95%" stopColor="#1c3a5e" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="colorInterest" x1="0" y1="0" x2="0" y2="1">
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
                  fill="url(#colorContributed)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="balance"
                  stroke="#17754f"
                  fill="url(#colorInterest)"
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
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  hideLabel?: boolean;
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
    </div>
  );
}
