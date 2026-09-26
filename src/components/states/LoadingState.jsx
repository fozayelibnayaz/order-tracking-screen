// A grey pulsing block used to build the skeleton shapes below.
function SkeletonBlock({ className }) {
  return <div className={`bg-slate-200 rounded-lg animate-pulse ${className}`} />
}

// LoadingState mimics the SHAPE of the real screen (banner, timeline, summary)
// so the layout doesn't "jump" once real content pops in.
function LoadingState() {
  return (
    <div>
      <div className="px-4 pt-4">
        <SkeletonBlock className="h-24 w-full rounded-2xl" />
      </div>
      <div className="px-4 pt-4">
        <div className="bg-white rounded-2xl border border-slate-100 p-4 space-y-4">
          <SkeletonBlock className="h-4 w-32" />
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <SkeletonBlock className="h-8 w-8 rounded-full" />
              <SkeletonBlock className="h-3 flex-1" />
            </div>
          ))}
        </div>
      </div>
      <div className="px-4 pt-4">
        <div className="bg-white rounded-2xl border border-slate-100 p-4 space-y-3">
          <SkeletonBlock className="h-4 w-28" />
          <div className="flex items-center gap-3">
            <SkeletonBlock className="h-14 w-14 rounded-xl" />
            <div className="flex-1 space-y-2">
              <SkeletonBlock className="h-3 w-3/4" />
              <SkeletonBlock className="h-3 w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingState