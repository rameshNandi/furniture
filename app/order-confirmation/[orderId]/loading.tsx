export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gray-800 rounded-full mx-auto mb-4"></div>
            <div className="h-8 bg-gray-800 rounded w-1/3 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-800 rounded w-1/2 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="h-48 bg-gray-800 rounded-lg"></div>
              <div className="h-64 bg-gray-800 rounded-lg"></div>
            </div>
            <div className="space-y-6">
              <div className="h-48 bg-gray-800 rounded-lg"></div>
              <div className="h-32 bg-gray-800 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
