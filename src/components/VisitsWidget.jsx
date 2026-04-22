export default function VisitWidget({ totalVisits }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-white dark:bg-black backdrop-blur-md border border-black dark:border-white rounded-full shadow-2xl transition-all hover:scale-105 font-[Passero_One]">
      
      {/* Live Dot */}
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-black dark:bg-white opacity-75 animate-ping"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-black dark:bg-white"></span>
      </span>

      {/* Text */}
      <p className="text-xs font-medium text-black dark:text-white">
        VISITORS:
        <span className="text-black dark:text-white font-bold ml-1">
          {totalVisits}
        </span>
      </p>

    </div>
  );
}