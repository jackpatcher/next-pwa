import AdminLayout from "@/components/AdminLayout";
import { useState } from "react";

export default function SettingPage() {
  return (
    <AdminLayout>
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Setting Page</h1>
      <p style={{ fontSize: 22 }}>นี่คือหน้าตั้งค่า (Setting)</p>
    </AdminLayout>
  );
}