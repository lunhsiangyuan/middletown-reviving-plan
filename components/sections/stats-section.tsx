"use client";

export function StatsSection() {
  const policyStats = [
    {
      label: "就業機會",
      current: "2,847",
      target: "5,000",
      progress: 57,
    },
    {
      label: "住宅單位",
      current: "450",
      target: "1,200",
      progress: 38,
    },
    {
      label: "投資金額（M）",
      current: "$234",
      target: "$500",
      progress: 47,
    },
    {
      label: "計畫完成率",
      current: "12",
      target: "28",
      progress: 43,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 border-b border-slate-200">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-6 w-1 bg-orange-600" />
          <span className="text-sm font-mono uppercase tracking-widest text-slate-500">
            政策指標 — 現況 vs. 目標
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {policyStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-slate-200 p-6"
            >
              <div className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-2">
                {stat.label}
              </div>
              <div className="flex items-end gap-3 mb-3">
                <span className="text-4xl font-mono font-bold text-slate-900 tabular-nums">
                  {stat.current}
                </span>
                <span className="text-sm text-slate-500 mb-1">/ 目標 {stat.target}</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full">
                <div
                  className="bg-orange-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${stat.progress}%` }}
                />
              </div>
              <div className="text-xs text-slate-400 mt-1">{stat.progress}% 達成</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
