import { Skeleton } from "@/components/ui/skeleton";

function LoadingResults() {
  return (
    <section>
      <div className="max-w-7xl mx-auto">
        <p className="text-center animate-pulse font-bold pt-10 text-[#013B94]">
          Sit tight we are just scanning market for the best deals
        </p>
      </div>

      <div className="flex justify-center py-10">
        <div className="w-10 h-10 rounded-full animate-bounce bg-[#013B94]"></div>
      </div>

      <div className="space-y-2 p-5">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex space-x-2 mx-auto max-w-7xl">
            <Skeleton className="h-20 w-20 md:h-44 rounded-lg" />
            <Skeleton className="h-44 w-full rounded-lg" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default LoadingResults;
