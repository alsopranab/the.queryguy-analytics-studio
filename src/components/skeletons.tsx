export function CardSkeleton() {
  return (
    <div className="glass-card p-5 rounded-xl flex items-center gap-4">
      <div className="w-11 h-11 rounded-lg skeleton" />
      <div className="flex-grow space-y-2">
        <div className="h-4 w-32 rounded skeleton" />
        <div className="h-3 w-16 rounded skeleton" />
      </div>
      <div className="w-4 h-4 rounded skeleton" />
    </div>
  );
}

export function LabSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}

export function ContentSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-8 w-64 rounded skeleton" />
      <div className="h-4 w-full rounded skeleton" />
      <div className="h-4 w-5/6 rounded skeleton" />
      <div className="h-4 w-4/6 rounded skeleton" />
      <div className="h-32 w-full rounded-lg skeleton mt-6" />
      <div className="h-4 w-full rounded skeleton" />
      <div className="h-4 w-3/4 rounded skeleton" />
    </div>
  );
}

export function LineSkeleton() {
  return (
    <div className="space-y-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="glass-card p-6 rounded-xl">
          <div className="flex justify-between items-start mb-4">
            <div className="h-3 w-16 rounded skeleton" />
            <div className="w-5 h-5 rounded skeleton" />
          </div>
          <div className="h-6 w-32 rounded skeleton mb-3" />
          <div className="h-4 w-full rounded skeleton mb-2" />
          <div className="h-4 w-3/4 rounded skeleton" />
        </div>
      ))}
    </div>
  );
}
