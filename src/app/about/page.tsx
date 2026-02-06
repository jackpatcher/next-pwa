
"use client";
import AdminLayout from "@/components/AdminLayout";
import { useFontSize } from "../fontSizeContext";

function AboutContent() {
  const { fontSize } = useFontSize();
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