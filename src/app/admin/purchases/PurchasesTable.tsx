'use client';

import React, { useState } from 'react';
import { format } from 'date-fns';
import { ChevronDown, ChevronUp } from 'lucide-react';

type Purchase = {
  id: string;
  createdAt: Date;
  razorpayOrderId: string | null;
  totalAmount: number;
  status: string;
  customer: { name: string; email: string };
  plan: { name: string };
};

type SortField = 'createdAt' | 'customer' | 'amount' | 'status';
type SortOrder = 'asc' | 'desc';

export default function PurchasesTable({ initialPurchases }: { initialPurchases: Purchase[] }) {
  const [sortField, setSortField] = useState<SortField>('createdAt');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('desc'); // default to desc for new field
    }
  };

  const formatPrice = (pricePaise: number) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(pricePaise / 100);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PAID':
      case 'ACTIVATED':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'FAILED':
      case 'CANCELLED':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const sortedPurchases = [...initialPurchases].sort((a, b) => {
    let comparison = 0;
    if (sortField === 'createdAt') {
      comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    } else if (sortField === 'customer') {
      comparison = a.customer.name.localeCompare(b.customer.name);
    } else if (sortField === 'amount') {
      comparison = a.totalAmount - b.totalAmount;
    } else if (sortField === 'status') {
      comparison = a.status.localeCompare(b.status);
    }
    
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const SortIcon = ({ field }: { field: SortField }) => {
    if (sortField !== field) return <ChevronDown className="w-4 h-4 opacity-20 inline-block ml-1" />;
    return sortOrder === 'asc' ? (
      <ChevronUp className="w-4 h-4 text-[#C6A87C] inline-block ml-1" />
    ) : (
      <ChevronDown className="w-4 h-4 text-[#C6A87C] inline-block ml-1" />
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 uppercase tracking-wider text-xs select-none">
            <tr>
              <th 
                className="px-6 py-4 font-semibold cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('createdAt')}
              >
                Date <SortIcon field="createdAt" />
              </th>
              <th className="px-6 py-4 font-semibold">Order ID</th>
              <th 
                className="px-6 py-4 font-semibold cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('customer')}
              >
                Customer <SortIcon field="customer" />
              </th>
              <th className="px-6 py-4 font-semibold">Plan</th>
              <th 
                className="px-6 py-4 font-semibold cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('amount')}
              >
                Amount <SortIcon field="amount" />
              </th>
              <th 
                className="px-6 py-4 font-semibold cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('status')}
              >
                Status <SortIcon field="status" />
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sortedPurchases.map((purchase) => (
              <tr key={purchase.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  {format(new Date(purchase.createdAt), 'dd MMM yyyy, HH:mm')}
                </td>
                <td className="px-6 py-4 font-mono text-xs text-gray-400">
                  {purchase.razorpayOrderId || 'N/A'}
                </td>
                <td className="px-6 py-4">
                  <div className="font-semibold text-[#1A1A1A]">{purchase.customer.name}</div>
                  <div className="text-xs text-gray-400">{purchase.customer.email}</div>
                </td>
                <td className="px-6 py-4 font-medium text-[#1A1A1A]">
                  {purchase.plan.name}
                </td>
                <td className="px-6 py-4 font-bold text-[#1A1A1A]">
                  {formatPrice(purchase.totalAmount)}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getStatusColor(purchase.status)}`}>
                    {purchase.status}
                  </span>
                </td>
              </tr>
            ))}
            
            {sortedPurchases.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                  No purchases found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
