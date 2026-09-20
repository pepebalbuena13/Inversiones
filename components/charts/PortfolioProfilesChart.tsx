"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const COLORS = {
  "Renta variable": "#1c3a5e",
  "Renta fija": "#7e9fc0",
  "Oro / cripto": "#d97706",
};

const PROFILES = [
  {
    name: "Conservador",
    description: "Horizonte corto o baja tolerancia al riesgo",
    data: [
      { name: "Renta variable", value: 30 },
      { name: "Renta fija", value: 60 },
      { name: "Oro / cripto", value: 10 },
    ],
  },
  {
    name: "Moderado",
    description: "Horizonte medio (10-15 años), riesgo medio",
    data: [
      { name: "Renta variable", value: 60 },
      { name: "Renta fija", value: 30 },
      { name: "Oro / cripto", value: 10 },
    ],
  },
  {
    name: "Agresivo",
    description: "Horizonte largo (20 años o más), alta tolerancia",
    data: [
      { name: "Renta variable", value: 90 },
      { name: "Renta fija", value: 5 },
      { name: "Oro / cripto", value: 5 },
    ],
  },
];

export default function PortfolioProfilesChart() {
  return (
    <div className="card p-4 sm:p-6">
      <h3 className="text-sm font-semibold text-navy-700">
        Tres ejemplos de reparto de cartera según el perfil
      </h3>
      <div className="mt-4 grid gap-6 sm:grid-cols-3">
        {PROFILES.map((profile) => (
          <div key={profile.name} className="text-center">
            <div className="h-40 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={profile.data}
                    dataKey="value"
                    nameKey="name"
                    innerRadius="55%"
                    outerRadius="85%"
                    paddingAngle={2}
                    strokeWidth={0}
                  >
                    {profile.data.map((entry) => (
                      <Cell key={entry.name} fill={COLORS[entry.name as keyof typeof COLORS]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number, name: string) => [`${value}%`, name]} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm font-semibold text-navy-800">{profile.name}</p>
            <p className="mt-1 text-xs text-navy-500">{profile.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 border-t border-navy-100 pt-4">
        {Object.entries(COLORS).map(([name, color]) => (
          <span key={name} className="flex items-center gap-1.5 text-xs text-navy-600">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: color }}
            />
            {name}
          </span>
        ))}
      </div>
      <p className="mt-3 text-xs text-navy-400">
        Ejemplos puramente ilustrativos, no una recomendación personalizada. Tu
        reparto ideal depende de tu horizonte temporal, tus objetivos y tu
        tolerancia real al riesgo.
      </p>
    </div>
  );
}
