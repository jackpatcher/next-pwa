import AdminLayout from "@/components/AdminLayout";

export default function UserPage() {
  const fontSize = 30;
  return (
    <AdminLayout>
      <h1 style={{ fontSize: fontSize * 1.1, fontWeight: 700, marginBottom: 16 }}>User Page</h1>
      <p style={{ fontSize }}>นี่คือหน้าผู้ใช้ (User)</p>
    </AdminLayout>
  );
}