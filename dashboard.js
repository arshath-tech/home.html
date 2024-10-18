// src/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaChartBar } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/5 bg-white h-screen p-5">
                <div className="text-center mb-10">
                    <h1 className="text-2xl font-bold">#HARDWARE</h1>
                </div>
                <nav>
                    <ul>
                        <li className="mb-4">
                            <Link className="flex items-center text-gray-700 hover:text-blue-500" to="/">
                                <FaHome className="mr-3" />
                                Home
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link className="flex items-center text-gray-700 hover:text-blue-500" to="/profile">
                                <FaUser className="mr-3" />
                                Profile
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link className="flex items-center text-gray-700 hover:text-blue-500" to="/analytics">
                                <FaChartBar className="mr-3" />
                                Analytics
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="absolute bottom-0 left-0 w-full p-5">
                    <div className="bg-blue-500 text-white p-5 rounded-lg text-center">
                        <p className="mb-2">Upgrade to Pro</p>
                        <button className="bg-white text-blue-500 px-4 py-2 rounded">Upgrade</button>
                    </div>
                </div>
            </div>
            {/* Main Content */}
            <div className="w-4/5 p-5">
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-3xl font-bold">Main Dashboard</h2>
                    <div className="flex items-center">
                        <input className="border border-gray-300 rounded-lg px-4 py-2 mr-4" placeholder="Search..." type="text" />
                        <i className="fas fa-bell text-gray-700 mr-4"></i>
                        <img alt="User Avatar" className="rounded-full" height="40" src="https://storage.googleapis.com/a1aa/image/PJpforbMY6WAKqB7nz1SQEeWb34qYC45Q3bdgwUEHJWhH5nTA.jpg" width="40" />
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4 mb-10">
                    <div className="bg-white p-5 rounded-lg shadow">
                        <h3 className="text-gray-700">Total Sales</h3>
                        <p className="text-2xl font-bold">$2004</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow">
                        <h3 className="text-gray-700">Total Expenses</h3>
                        <p className="text-2xl font-bold">$2432.34</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow">
                        <h3 className="text-gray-700">Net Profit</h3>
                        <p className="text-2xl font-bold">$1.2M</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow">
                        <h3 className="text-gray-700">New Users</h3>
                        <p className="text-2xl font-bold">2000</p>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2 bg-white p-5 rounded-lg shadow">
                        <h3 className="text-gray-700 mb-5">Revenue</h3>
                        <img alt="Line Chart showing revenue trends" height="300" src="https://storage.googleapis.com/a1aa/image/iihpAd1oh1bKIBmsU92LB2ejLGetAwzQtRM5eB1i5So8OyPnA.jpg" width="600" />
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow">
                        <h3 className="text-gray-700 mb-5">Monthly Revenue</h3>
                        <img alt="Bar Chart showing monthly revenue" height="300" src="https://storage.googleapis.com/a1aa/image/mbN7QtgB8LJjId45dj7peJGxtPK01oRE7q1wz60MsTKyj8zJA.jpg" width="300" />
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow">
                        <h3 className="text-gray-700 mb-5">Current Sales</h3>
                        <table className="w-full text-left">
                            <thead>
                                <tr>
                                    <th className="py-2">Product</th>
                                    <th className="py-2">Sales</th>
                                    <th className="py-2">Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2">Product 1</td>
                                    <td className="py-2">500</td>
                                    <td className="py-2">$5000</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Product 2</td>
                                    <td className="py-2">300</td>
                                    <td className="py-2">$3000</td>
                                </tr>
                                <tr>
                                    <td className="py-2">Product 3</td>
                                    <td className="py-2">200</td>
                                    <td className="py-2">$2000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow">
                        <h3 className="text-gray-700 mb-5">Conversion Rate</h3>
                        <img alt="Bar Chart showing conversion rate" height="300" src="https://storage.googleapis.com/a1aa/image/HLlgoml7mZIzFJFMuyc7qY3UxVfIKom9xnETEYxeT53gH5nTA.jpg" width="300" />
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow">
                        <h3 className="text-gray-700 mb-5">Sales Distribution</h3>
                        <img alt="Pie Chart showing sales distribution" height="300" src="https://storage.googleapis.com/a1aa/image/h8yBAqqk3ezQSq8hf48BYYUerRf37X8CepmLK0Up2xBZ8If5E.jpg" width="300" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
