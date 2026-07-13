'use client';

import React, { useState } from 'react';
import { format } from 'date-fns';
import { ChevronDown, ChevronUp } from 'lucide-react';

type Customer = {
  id: string;
  createdAt: Date;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  gstNumber: string | null;
  city: string | null;
  state: string | null;
  purchases: { id: string; status: string }[];
};

type SortField = 'createdAt' | 'name' | 'status';
type SortOrder = 'asc' | 'desc';

export default function CustomersTable({ initialCustomers }: { initialCustomers: Customer[] }) {
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

  const getStatus = (customer: Customer) => {
    return customer.purchases.some((p) => p.status === 'PAID' || p.status === 'ACTIVATED') ? 'Paying' : 'Lead';
  };

  const sortedCustomers = [...initialCustomers].sort((a, b) => {
    let comparison = 0;
    if (sortField === 'createdAt') {
      comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    } else if (sortField === 'name') {
      comparison = a.name.localeCompare(b.name);
    } else if (sortField === 'status') {
      const statusA = getStatus(a);
      const statusB = getStatus(b);
      comparison = statusA.localeCompare(statusB);
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
                Joined <SortIcon field="createdAt" />
              </th>
              <th 
                className="px-6 py-4 font-semibold cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('name')}
              >
                Name <SortIcon field="name" />
              </th>
              <th className="px-6 py-4 font-semibold">Contact</th>
              <th className="px-6 py-4 font-semibold">Business / GST</th>
              <th className="px-6 py-4 font-semibold">Location</th>
              <th 
                className="px-6 py-4 font-semibold cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => handleSort('status')}
              >
                Status <SortIcon field="status" />
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sortedCustomers.map((customer) => {
              const status = getStatus(customer);
              return (
                <tr key={customer.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-400">
                    {format(new Date(customer.createdAt), 'dd MMM yyyy')}
                  </td>
                  <td className="px-6 py-4 font-semibold text-[#1A1A1A]">
                    {customer.name}
                  </td>
                  <td className="px-6 py-4">
                    <div>{customer.email}</div>
                    <div className="text-gray-400">{customer.phone}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-[#1A1A1A]">{customer.company || '-'}</div>
                    <div className="text-xs text-gray-400 uppercase font-mono mt-0.5">{customer.gstNumber || '-'}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {customer.city ? `${customer.city}, ${customer.state}` : '-'}
                  </td>
                  <td className="px-6 py-4">
                    {status === 'Paying' ? (
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-green-100 text-green-800 border border-green-200">
                        Paying
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-500 border border-gray-200">
                        Lead
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}

            {sortedCustomers.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                  No customers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
