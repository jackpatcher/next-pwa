"use client";
import React from "react";
import AdminLayout from "@/components/AdminLayout";
import { useFont } from "../providers";
import { useFontSize } from "../fontSizeContext";

import { useTheme } from "../themeContext";

export default function SettingPage() {
  const { font, setFont } = useFont();
  const { fontSize } = useFontSize();
  const { theme, setTheme, themePresets } = useTheme();
  const [tab, setTab] = React.useState<'font' | 'theme'>('font');
  return (
    <AdminLayout>
      <h1 style={{ fontSize: fontSize * 1.1, fontWeight: 700, marginBottom: 16, color: 'var(--text)' }}>Setting Page</h1>
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', borderBottom: '1px solid #e5e7eb', marginBottom: 16 }}>
          <button
            onClick={() => setTab('font')}
            style={{
              padding: '8px 24px',
              border: 'none',
              borderBottom: tab === 'font' ? `3px solid var(--primary)` : '3px solid transparent',
              background: 'none',
              fontWeight: tab === 'font' ? 700 : 400,
              color: tab === 'font' ? 'var(--primary)' : 'var(--text)',
              fontSize: 18,
              cursor: 'pointer',
              outline: 'none',
              marginRight: 8,
              transition: 'border 0.2s',
            }}
          >
            ฟอนต์ (Font)
          </button>
          <button
            onClick={() => setTab('theme')}
            style={{
              padding: '8px 24px',
              border: 'none',
              borderBottom: tab === 'theme' ? `3px solid var(--primary)` : '3px solid transparent',
              background: 'none',
              fontWeight: tab === 'theme' ? 700 : 400,
              color: tab === 'theme' ? 'var(--primary)' : 'var(--text)',
              fontSize: 18,
              cursor: 'pointer',
              outline: 'none',
              marginRight: 8,
              transition: 'border 0.2s',
            }}
          >
            ธีม (Theme)
          </button>
        </div>
        {tab === 'font' && (
          <div>
            <span style={{ marginRight: 12 }}>เลือกฟอนต์:</span>
            <button
              onClick={() => setFont('prompt')}
              style={{
                marginRight: 8,
                padding: '6px 16px',
                borderRadius: 6,
                border: font === 'prompt' ? `2px solid var(--primary)` : '1px solid #ccc',
                background: font === 'prompt' ? '#eef2ff' : '#fff',
                fontWeight: font === 'prompt' ? 700 : 400,
                cursor: 'pointer',
              }}
            >
              Prompt
            </button>
            <button
              onClick={() => setFont('sarabun')}
              style={{
                padding: '6px 16px',
                borderRadius: 6,
                border: font === 'sarabun' ? `2px solid var(--primary)` : '1px solid #ccc',
                background: font === 'sarabun' ? '#eef2ff' : '#fff',
                fontWeight: font === 'sarabun' ? 700 : 400,
                cursor: 'pointer',
              }}
            >
              Sarabun
            </button>
          </div>
        )}
        {tab === 'theme' && (
          <div>
            <span style={{ marginRight: 12 }}>เลือกธีมสี:</span>
            <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
              {themePresets.map((preset) => (
                <button
                  key={preset.name}
                  onClick={() => setTheme(preset)}
                  style={{
                    border: theme.name === preset.name ? `2px solid var(--primary)` : '1px solid #ccc',
                    background: '#fff',
                    borderRadius: 8,
                    padding: 12,
                    minWidth: 80,
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    fontWeight: theme.name === preset.name ? 700 : 400,
                    color: preset.text,
                    boxShadow: theme.name === preset.name ? '0 2px 8px #6366f133' : 'none',
                    outline: 'none',
                    transition: 'border 0.2s',
                  }}
                >
                  <span style={{
                    display: 'block',
                    width: 32,
                    height: 32,
                    borderRadius: 16,
                    background: preset.primary,
                    marginBottom: 8,
                    border: '2px solid #e5e7eb',
                  }} />
                  {preset.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
        <p style={{ fontSize, color: 'var(--text)' }}>นี่คือหน้าตั้งค่า (Setting) - ตัวอย่างฟอนต์ {font === 'prompt' ? 'Prompt' : 'Sarabun'}</p>
        <p style={{ fontSize, color: 'var(--text)' }}>The quick brown fox jumps over the lazy dog.</p>
        <p style={{ fontSize, color: 'var(--text)' }}>กลุ่มงานสุขภาพดิจิทัล โรงพยาบาล</p>
      </div>
    </AdminLayout>
  );
}
