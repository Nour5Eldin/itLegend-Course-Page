export function CourseProgressBar({ percentage, label, }:
  { percentage: number; label: string; }) {
  return (
    <div className="relative">
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-[#6abd8a] transition-all"
          style={{ width: `${percentage}%` }}/>
      </div>
      <div
        className="absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
        style={{ left: `${percentage}%` }}>
        <span className="mb-1 rounded-full border border-border bg-card px-2 py-0.5 text-[10px] font-medium text-muted-foreground shadow-sm">
          {label}
        </span>
        <span className="h-3 w-3 rounded-full border-2 border-[#6abd8a] bg-card" />
        <span className="mt-1 text-xs text-gray-500">{percentage}%</span>
      </div>
    </div>
  );
}