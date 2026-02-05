import AdminLayout from "../../../components/AdminLayout";

export default function Page() {
  return (
    <AdminLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-2xl font-semibold text-blue-600">1,245</span>
            <span className="text-gray-500 mt-2">Users</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-2xl font-semibold text-green-600">98%</span>
            <span className="text-gray-500 mt-2">Uptime</span>
          </div>
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
            <span className="text-2xl font-semibold text-red-600">12</span>
            <span className="text-gray-500 mt-2">Errors</span>
          </div>
        </div>

        {/* Recent Users Table */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-2">สมชาย ใจดี</td>
                  <td className="px-4 py-2">somchai@email.com</td>
                  <td className="px-4 py-2">Admin</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Jane Doe</td>
                  <td className="px-4 py-2">jane@email.com</td>
                  <td className="px-4 py-2">Editor</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">John Smith</td>
                  <td className="px-4 py-2">john@email.com</td>
                  <td className="px-4 py-2">User</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}