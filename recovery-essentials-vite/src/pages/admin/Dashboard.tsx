import React from 'react';

const AdminDashboard = () => {
  // Mock data for the dashboard
  const stats = {
    totalProducts: 87,
    totalOrders: 356,
    totalRevenue: 28943.28,
    conversionRate: 4.2,
    visitors: 12456,
    subscribers: 2879,
  };

  const recentOrders = [
    { id: 'ORD-5623', customer: 'John Smith', total: 129.99, status: 'Completed', date: '2023-06-15' },
    { id: 'ORD-5622', customer: 'Sarah Johnson', total: 249.95, status: 'Processing', date: '2023-06-14' },
    { id: 'ORD-5621', customer: 'Michael Brown', total: 99.99, status: 'Completed', date: '2023-06-14' },
    { id: 'ORD-5620', customer: 'Emily Davis', total: 189.99, status: 'Shipped', date: '2023-06-13' },
  ];

  const topProducts = [
    { name: 'Theragun Pro', sales: 42, revenue: 25158.00 },
    { name: 'Hyperice Hypervolt 2', sales: 38, revenue: 11362.00 },
    { name: 'RENPHO Massage Gun', sales: 65, revenue: 6499.35 },
    { name: 'TriggerPoint Grid Foam Roller', sales: 53, revenue: 1749.00 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Total Products</h3>
          <p className="text-3xl font-bold">{stats.totalProducts}</p>
          <div className="flex items-center mt-4">
            <span className="text-green-500 text-sm font-medium">↑ 12%</span>
            <span className="text-gray-400 text-sm ml-2">vs. last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Total Orders</h3>
          <p className="text-3xl font-bold">{stats.totalOrders}</p>
          <div className="flex items-center mt-4">
            <span className="text-green-500 text-sm font-medium">↑ 8%</span>
            <span className="text-gray-400 text-sm ml-2">vs. last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-gray-500 text-sm font-medium">Total Revenue</h3>
          <p className="text-3xl font-bold">${stats.totalRevenue.toLocaleString()}</p>
          <div className="flex items-center mt-4">
            <span className="text-green-500 text-sm font-medium">↑ 15%</span>
            <span className="text-gray-400 text-sm ml-2">vs. last month</span>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow mb-8">
        <div className="p-6 border-b">
          <h2 className="text-lg font-medium">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.customer}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${order.total.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                      ${order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t flex justify-center">
          <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium">View All Orders →</button>
        </div>
      </div>

      {/* Top Products */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-lg font-medium">Top Selling Products</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Units Sold</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {topProducts.map((product, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.sales}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${product.revenue.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t flex justify-center">
          <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium">View Product Analytics →</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
