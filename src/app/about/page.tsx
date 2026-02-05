import AdminLayout from "@/components/AdminLayout";

function AboutContent() {
  const fontSize = 30;
  return (
    <>
      <h1 style={{ fontSize: fontSize * 1.1, fontWeight: 700, marginBottom: 16 }}>About Page</h1>
      <p style={{ fontSize }}>นี่คือหน้าเกี่ยวกับ (About)</p>
    </>
  );
}

export default function AboutPage() {
  return (
    <AdminLayout>
      <AboutContent />
    </AdminLayout>
  );
}