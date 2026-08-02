const stages = [
  { label: "DATA IN", x: 40 },
  { label: "LLM ORCHESTRATES", x: 280 },
  { label: "RULES DECIDE", x: 560 },
] as const;

export function PipelineDiagram() {
  return (
    <svg
      viewBox="0 0 640 120"
      className="w-full max-w-2xl"
      role="img"
      aria-label="Diagram: data flows in, an LLM orchestrates which tool to call, then deterministic rules make the final decision"
    >
      <line
        x1="40"
        y1="60"
        x2="600"
        y2="60"
        stroke="#3D5A73"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        className="animate-flow"
      />
      {stages.map((stage, i) => (
        <g key={stage.label}>
          <circle
            cx={stage.x}
            cy="60"
            r={i === 1 ? "5" : "4"}
            fill={i === 1 ? "#F2B84B" : "#8B96A3"}
            className={i === 1 ? "animate-pulse-signal" : ""}
          />
          <text
            x={stage.x}
            y="92"
            textAnchor="middle"
            className="fill-muted font-mono"
            style={{ fontSize: "11px", letterSpacing: "0.05em" }}
          >
            {stage.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
