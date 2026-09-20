"use client";

import {
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

export interface MarketPoint {
  name: string;
  risk: "Bajo" | "Medio" | "Medio-alto" | "Alto";
  riskScore: number;
  returnValue: number;
}

const RISK_COLORS: Record<MarketPoint["risk"], string> = {
  Bajo: "#1f9463",
  Medio: "#f59e0b",
  "Medio-alto": "#f97316",
  Alto: "#ef4444",
};

interface TooltipPayloadEntry {
  payload: MarketPoint;
}

function ScatterTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: TooltipPayloadEntry[];
}) {
  if (!active || !payload?.length) return null;
  const point = payload[0].payload;
  return (
    <div className="rounded-lg border border-navy-100 bg-white px-3 py-2 text-xs shadow-md">
      <p className="font-semibold text-navy-800">{point.name}</p>
      <p className="mt-1 text-navy-500">Riesgo: {point.risk}</p>
      <p className="text-navy-500">Rentabilidad aprox.: {point.returnValue}% anual</p>
    </div>
  );
}

export default function RiskReturnScatter({ markets }: { markets: MarketPoint[] }) {
  return (
    <div className="card p-4 sm:p-6">
      <h3 className="text-sm font-semibold text-navy-700">
        Riesgo relativo vs. rentabilidad histórica anual (aproximado)
      </h3>
      <div className="mt-4 h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 36, right: 20, bottom: 24, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e4e9f0" />
            <XAxis
              type="number"
              dataKey="riskScore"
              domain={[0, 10]}
              tick={{ fontSize: 12, fill: "#4a6f96" }}
              label={{
                value: "Riesgo relativo →",
                position: "insideBottom",
                offset: -10,
                fill: "#4a6f96",
                fontSize: 12,
              }}
            />
            <YAxis
              type="number"
              dataKey="returnValue"
              domain={[0, "dataMax + 3"]}
              tick={{ fontSize: 12, fill: "#4a6f96" }}
              tickFormatter={(v) => `${v}%`}
              label={{
                value: "Rentabilidad histórica (%)",
                angle: -90,
                position: "insideLeft",
                fill: "#4a6f96",
                fontSize: 12,
              }}
            />
            <ZAxis range={[260, 260]} />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} content={<ScatterTooltip />} />
            <Scatter data={markets}>
              {markets.map((entry) => (
                <Cell key={entry.name} fill={RISK_COLORS[entry.risk]} />
              ))}
              <LabelList
                dataKey="name"
                position="top"
                style={{ fontSize: 11, fontWeight: 600, fill: "#142c48" }}
              />
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-3 text-xs text-navy-400">
        Posiciones aproximadas con fines ilustrativos, no una predicción. El riesgo
        combina volatilidad histórica y concentración; la rentabilidad es la media
        histórica orientativa de cada mercado.
      </p>
    </div>
  );
}
