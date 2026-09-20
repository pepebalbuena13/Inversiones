const START = 1000;
const RATE = 0.07;
const YEARS = 20;
const WIDTH = 320;
const HEIGHT = 120;
const PADDING = 6;

function buildPath() {
  const values = Array.from({ length: YEARS + 1 }, (_, i) => START * Math.pow(1 + RATE, i));
  const min = Math.min(...values);
  const max = Math.max(...values);

  const points = values.map((value, i) => {
    const x = PADDING + (i / YEARS) * (WIDTH - PADDING * 2);
    const y = HEIGHT - PADDING - ((value - min) / (max - min)) * (HEIGHT - PADDING * 2);
    return [x, y] as const;
  });

  const line = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
  const [firstX] = points[0];
  const [lastX] = points[points.length - 1];
  const area = `${line} L${lastX.toFixed(1)},${HEIGHT} L${firstX.toFixed(1)},${HEIGHT} Z`;

  return { line, area, finalValue: Math.round(values[values.length - 1]) };
}

export default function MiniGrowthSpark() {
  const { line, area, finalValue } = buildPath();
  const finalValueLabel = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(finalValue);

  return (
    <div>
      <p className="text-xs text-navy-300">
        1.000&nbsp;€ invertidos hoy a un 7&nbsp;% anual, sin aportar nada más
      </p>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="mt-3 h-24 w-full"
        preserveAspectRatio="none"
        role="img"
        aria-label={`Crecimiento de 1.000 euros hasta ${finalValueLabel} en 20 años`}
      >
        <defs>
          <linearGradient id="heroSparkGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5ecb99" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#5ecb99" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#heroSparkGradient)" />
        <path
          d={line}
          fill="none"
          stroke="#5ecb99"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="mt-1 flex items-baseline justify-between">
        <span className="text-xs text-navy-400">Hoy: 1.000&nbsp;€</span>
        <span className="text-xl font-bold text-emerald-300">
          ≈ {finalValueLabel} en 20 años
        </span>
      </div>
    </div>
  );
}
