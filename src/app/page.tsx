
"use client";
import { Doughnut } from "react-chartjs-2";
import AdminLayout from "@/components/AdminLayout";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
// Heroicons (Flowbite) SVGs
const icons = {
  visitors: (
    <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
  ),
  sales: (
    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5A2.25 2.25 0 005.25 6.75h13.5A2.25 2.25 0 0021 4.5V3M3 21v-1.5A2.25 2.25 0 015.25 17.25h13.5A2.25 2.25 0 0021 19.5V21M3 7.5h18M3 16.5h18"></path></svg>
  ),
  subscribers: (
    <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
  ),
  order: (
    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
  ),
};

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
  const chartData = {
    labels: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย."],
    datasets: [
      {
        label: "จำนวนผู้ใช้ใหม่",
        data: [120, 200, 150, 180, 220, 170],
        backgroundColor: "#2563eb",
        borderRadius: 8,
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "สถิติผู้ใช้ใหม่รายเดือน",
        font: { size: 24 },
      },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true, grid: { color: "#e5e7eb" } },
    },
  };

  // Data for Progress Chart
  const progressData = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#4f8cff", "#e5e7eb"],
        borderWidth: 0,
      },
    ],
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Top 4 Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Visitors */}
          <div className="bg-yellow-400 rounded-lg shadow p-6 flex flex-row items-center gap-4">
            <div className="bg-white/80 rounded-full p-2 flex items-center justify-center">{icons.visitors}</div>
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold text-white">1,294</span>
              <span className="text-white mt-1">Visitors</span>
            </div>
          </div>
          {/* Sales */}
          <div className="bg-green-500 rounded-lg shadow p-6 flex flex-row items-center gap-4">
            <div className="bg-white/80 rounded-full p-2 flex items-center justify-center">{icons.sales}</div>
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold text-white">$1,345</span>
              <span className="text-white mt-1">Sales</span>
            </div>
          </div>
          {/* Subscribers */}
          <div className="bg-red-400 rounded-lg shadow p-6 flex flex-row items-center gap-4">
            <div className="bg-white/80 rounded-full p-2 flex items-center justify-center">{icons.subscribers}</div>
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold text-white">1,303</span>
              <span className="text-white mt-1">Subscribers</span>
            </div>
          </div>
          {/* Order */}
          <div className="bg-blue-500 rounded-lg shadow p-6 flex flex-row items-center gap-4">
            <div className="bg-white/80 rounded-full p-2 flex items-center justify-center">{icons.order}</div>
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold text-white">576</span>
              <span className="text-white mt-1">Order</span>
            </div>
          </div>
        </div>
        {/* Second Row: Progress + World Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Progress Chart */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="font-semibold mb-2">Task</span>
            <div className="relative w-32 h-32 flex items-center justify-center">
              <Doughnut
                data={progressData}
                options={{
                  plugins: { legend: { display: false } },
                  cutout: "80%",
                }}
              />
              <span className="absolute text-2xl font-bold text-blue-600 select-none">80%</span>
            </div>
            <span className="text-gray-500 mt-2">Completed</span>
          </div>
          {/* World Map Placeholder */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center">
            <span className="font-semibold mb-2">World Map</span>
            <div className="w-full h-40 bg-gray-200 rounded flex items-center justify-center text-gray-400">
              [World Map Placeholder]
            </div>
            <span className="text-gray-500 mt-2 text-sm">Map of the distribution of users around the world</span>
          </div>
        </div>
        {/* ...Add more sections as needed... */}
      </div>
    </AdminLayout>
  );
}
