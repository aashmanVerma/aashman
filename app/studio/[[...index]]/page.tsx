'use client';

export default function StudioPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Sanity Studio</h1>
        <p className="mb-6 text-gray-600">
          To manage your content, run the standalone Sanity Studio:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <code className="text-sm">npm run studio</code>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Then visit: <code className="bg-gray-100 px-2 py-1 rounded text-blue-600">http://localhost:3333</code>
        </p>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Or access via{' '}
            <a 
              href="https://sanity.io/manage" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Sanity Manage
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
