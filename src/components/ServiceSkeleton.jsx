export default function ServiceSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-line bg-surface p-6">
      <div className="mb-4 h-3 w-16 rounded bg-surface-raised" />
      <div className="mb-3 h-6 w-3/4 rounded bg-surface-raised" />
      <div className="space-y-2">
        <div className="h-3 w-full rounded bg-surface-raised" />
        <div className="h-3 w-5/6 rounded bg-surface-raised" />
        <div className="h-3 w-2/3 rounded bg-surface-raised" />
      </div>
    </div>
  )
}
