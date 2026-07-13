import React from 'react';

export default function AdminLoading() {
  return (
    <div className="max-w-6xl mx-auto animate-pulse">
      <div className="h-9 bg-gray-200 rounded w-48 mb-8"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gray-200 rounded-lg"></div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
            <div className="h-8 bg-gray-200 rounded w-32 mt-auto"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
