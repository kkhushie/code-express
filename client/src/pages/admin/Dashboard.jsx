import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
// Sample data for graph (students enrolled per month)
//   const chartData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Months
//     datasets: [
//       {
//         label: "Students Enrolled",
//         data: [50, 75, 100, 120, 150, 200], // Data for each month
//         backgroundColor: "rgba(75, 192, 192, 0.2)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Student Enrollment Over Time",
//       },
//     },
//   };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Students Card */}
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-600 text-sm font-semibold">Total Students</p>
          <h3 className="text-gray-900 text-2xl font-bold">1,234</h3>
        </div>
        {/* Total Faculties Card */}
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-600 text-sm font-semibold">Total Faculties</p>
          <h3 className="text-gray-900 text-2xl font-bold">56</h3>
        </div>
        {/* Total Courses Card */}
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-600 text-sm font-semibold">Total Courses</p>
          <h3 className="text-gray-900 text-2xl font-bold">12</h3>
        </div>
        {/* Total Quizzes Card */}
        <div className="bg-white shadow rounded-lg p-4">
          <p className="text-gray-600 text-sm font-semibold">Total Quizzes</p>
          <h3 className="text-gray-900 text-2xl font-bold">35</h3>
        </div>
      </div>

      {/* Graph Section */}
      {/* <div className="mt-8 bg-white shadow rounded-lg p-6">
        <h3 className="text-gray-900 text-xl font-semibold mb-4">Student Enrollment Over Time</h3>
        <Line data={chartData} options={chartOptions} />
      </div> */}
    </div>
  );
};

export default Dashboard;
