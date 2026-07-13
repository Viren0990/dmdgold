import React from 'react';

export default function CustomersLoading() {
  return (
    <div className="max-w-7xl mx-auto animate-pulse">
      <div className="h-9 bg-gray-200 rounded w-48 mb-8"></div>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50 flex gap-4">
          <div className="h-4 bg-gray-200 rounded w-24"></div>
          <div className="h-4 bg-gray-200 rounded w-32"></div>
          <div className="h-4 bg-gray-200 rounded w-24"></div>
        </div>
        <div className="divide-y divide-gray-100">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="p-4 flex gap-4 items-center">
              <div className="h-4 bg-gray-200 rounded w-1/6"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/5"></div>
              <div className="h-4 bg-gray-200 rounded w-1/6"></div>
              <div className="h-6 bg-gray-200 rounded-full w-16 ml-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
