"use client";

import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const ALLOCATION = [
  { name: "Fondos indexados / acciones", value: 75, color: "#1c3a5e" },
  { name: "Renta fija", value: 15, color: "#7e9fc0" },
  { name: "Oro", value: 5, color: "#d97706" },
  { name: "Criptomonedas", value: 5, color: "#ea580c" },
];

export default function PortfolioAllocationChart() {
  return (
    <div className="card p-4 sm:p-6">
      <h3 className="text-sm font-semibold text-navy-700">
        Ejemplo de cartera diversificada
      </h3>
      <div className="mt-4 h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={ALLOCATION}
              dataKey="value"
              nameKey="name"
              innerRadius="55%"
              outerRadius="85%"
              paddingAngle={2}
              strokeWidth={0}
            >
              {ALLOCATION.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value: number, name: string) => [`${value}%`, name]} />
            <Legend
              layout="horizontal"
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{ fontSize: 12, color: "#2c4e73" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-3 text-xs text-navy-400">
        Ejemplo puramente ilustrativo, no una recomendación personalizada. Tu
        distribución ideal depende de tu horizonte temporal y tolerancia al riesgo.
      </p>
    </div>
  );
}
