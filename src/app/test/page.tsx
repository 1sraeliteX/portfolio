export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Tailwind CSS Test
        </h1>
        <p className="text-gray-600 mb-6">
          If you can see this, Tailwind CSS is working correctly!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
            Primary Button
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
            Secondary Button
          </button>
        </div>
      </div>
    </div>
  );
}
