"use client";
// SVG icon components
function HomeIcon({ color = "currentColor", size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12l9-9 9 9" />
      <path d="M9 21V9h6v12" />
      <path d="M3 12h18" />
    </svg>
  );
}
function UserIcon({ color = "currentColor", size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
    </svg>
  );
}
function AdminIcon({ color = "currentColor", size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
function CogIcon({ color = "currentColor", size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0 .33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15 8.6a1.65 1.65 0 0 0 1.82.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z" />
    </svg>
  );
}
function InfoIcon({ color = "currentColor", size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="8" />
    </svg>
  );
}
import React, { useState } from 'react';
import Link from 'next/link';

import { useFontSize } from '../app/fontSizeContext';
import { useTheme } from '../app/themeContext';
import { usePathname } from 'next/navigation';



type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { fontSize, setFontSize } = useFontSize();
  const pathname = usePathname();
  const { theme } = useTheme();
  // Provide fallback values for theme properties
  const themeBackground = (theme as any)?.background || '#fff';
  const themeText = theme.text || '#222';
  const themePrimary = theme.primary || '#0070f3';
  const themeAccent = (theme as any)?.accent || themePrimary;
  const themeHeader = (theme as any)?.header || themeBackground;
  const themeSurface = (theme as any)?.surface || '#f5f5f5';
  const themeOnAccent = (theme as any)?.onAccent || '#fff';

  // Sidebar menu config (icon, name, href, badge, badgeColor)
  type MenuItem = {
    name: string;
    href: string;
    icon: React.ReactElement;
    badge?: string | number;
    badgeColor?: string;
    sub?: MenuItem[];
  };
  // Best practice: use basePath from env, and next/link for navigation
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const menuItems: MenuItem[] = [
    {
      name: "Dashboard",
      href: `${basePath}/`,
      icon: <HomeIcon color={themePrimary} />,
    },
    {
      name: "User",
      href: `${basePath}/user`,
      icon: <UserIcon color={themePrimary} />,
      sub: [
        {
          name: "Admin",
          href: `${basePath}/user/admin`,
          icon: <AdminIcon color={themePrimary} />,
          badge: "New",
          badgeColor: themeAccent,
        },
      ],
    },
    {
      name: "Setting",
      href: `${basePath}/setting`,
      icon: <CogIcon color={themePrimary} />,
    },
    {
      name: "About",
      href: `${basePath}/about`,
      icon: <InfoIcon color={themePrimary} />,
    },
  ];

  // Helper: normalize path for active menu check
  function normalizePath(path: string) {
    // Remove trailing slash except root
    if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
    return path;
  }

  // Sidebar and header styles
  const sidebarStyle = {
    background: themeBackground,
    color: themeText,
    width: isOpen ? 220 : 60,
    transition: "width 0.2s",
    fontSize,
  } as React.CSSProperties;
  const headerStyle = {
    background: themeHeader,
    color: themeText,
    fontSize,
  } as React.CSSProperties;
  const iconStyle = {
    color: themePrimary,
    fontSize: 22,
  } as React.CSSProperties;

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: themeBackground }}>
      {/* Sidebar */}
      <aside style={{
        ...sidebarStyle,
        background: '#fff',
        boxShadow: '0 2px 8px #0001',
        borderRight: '1px solid #eee',
        minWidth: 220,
        maxWidth: 320,
        width: 'clamp(220px, 18vw, 320px)',
        height: '100vh',
        overflowY: 'auto',
        position: 'sticky',
        top: 0,
      }}>
        {/* Profile/Logo section */}
        <div style={{ padding: 24, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: themeSurface, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px #0001" }}>
            <img src="https://avatars.githubusercontent.com/u/1?v=4" alt="Avatar" style={{ width: 36, height: 36, borderRadius: "50%" }} />
          </div>
          <div style={{ fontWeight: 600, fontSize: 16, color: themeText }}>Am Geradt</div>
          <div style={{ fontSize: 13, color: themeAccent, fontWeight: 500 }}>Administrator</div>
        </div>
        <nav style={{ display: "flex", flexDirection: "column", gap: 2, padding: "8px 0" }}>
          {menuItems.map((item) => {
            const isActive = normalizePath(pathname) === normalizePath(item.href);
            const isUserMenu = item.name === "User";
            const isUserActive = normalizePath(pathname).startsWith(normalizePath(item.href));
            return (
              <React.Fragment key={item.name}>
                <Link
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "12px 20px",
                    borderRadius: 12,
                    fontWeight: 600,
                    fontSize: 16,
                    color: isActive || (isUserMenu && isUserActive) ? themeAccent : themeText,
                    background: isActive || (isUserMenu && isUserActive) ? themeSurface : "none",
                    boxShadow: isActive || (isUserMenu && isUserActive) ? "0 2px 8px #0001" : "none",
                    textDecoration: "none",
                    marginBottom: 2,
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseOver={e => e.currentTarget.style.background = themeSurface}
                  onMouseOut={e => e.currentTarget.style.background = isActive || (isUserMenu && isUserActive) ? themeSurface : "none"}
                >
                  <span style={{ ...iconStyle, minWidth: 22 }}>{item.icon}</span>
                  <span style={{ marginLeft: 8, fontWeight: 600 }}>{item.name}</span>
                  {item.badge && (
                    <span
                      style={{
                        marginLeft: "auto",
                        background: item.badgeColor,
                        color: themeOnAccent,
                        borderRadius: 12,
                        padding: "2px 8px",
                        fontSize: 12,
                        fontWeight: 500,
                      }}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
                {/* Sub-menu for User */}
                {isUserMenu && isUserActive && item.sub && (
                  <div style={{ marginLeft: 36, display: "flex", flexDirection: "column", gap: 0 }}>
                    {item.sub.map((sub) => {
                      const isSubActive = normalizePath(pathname) === normalizePath(sub.href);
                      return (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            padding: "10px 28px",
                            borderRadius: 10,
                            fontWeight: 600,
                            fontSize: 15,
                            color: isSubActive ? themeAccent : themeText,
                            background: isSubActive ? themeSurface : "none",
                            boxShadow: isSubActive ? "0 2px 8px #0001" : "none",
                            textDecoration: "none",
                            marginBottom: 0,
                            transition: "background 0.2s, color 0.2s",
                          }}
                          onMouseOver={e => e.currentTarget.style.background = themeSurface}
                          onMouseOut={e => e.currentTarget.style.background = isSubActive ? themeSurface : "none"}
                        >
                          <span style={{ ...iconStyle, fontSize: 18, minWidth: 18 }}>{sub.icon}</span>
                          <span style={{ marginLeft: 8, fontWeight: 600 }}>{sub.name}</span>
                          {sub.badge && (
                            <span
                              style={{
                                marginLeft: "auto",
                                background: sub.badgeColor,
                                color: themeOnAccent,
                                borderRadius: 12,
                                padding: "2px 8px",
                                fontSize: 11,
                                fontWeight: 500,
                              }}
                            >
                              {sub.badge}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </aside>
      {/* AppBar/Header */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <header style={{ height: 64, background: '#fff', boxShadow: '0 2px 8px #0001', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', borderBottom: '1px solid #eee' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <span style={{ fontWeight: 700, fontSize: 22, color: themePrimary }}>Ready Dashboard</span>
            <span style={{ fontWeight: 500, fontSize: 18, color: themeText }}>ระบบจัดการ</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              aria-label="ลดขนาดฟอนต์"
              style={{ width: 32, height: 32, borderRadius: '50%', background: '#f3f3f3', border: 'none', fontWeight: 700, fontSize: 18, color: themePrimary, cursor: 'pointer', marginRight: 4 }}
              onClick={() => setFontSize(Math.max(14, fontSize - 2))}
            >
              -
            </button>
            <span style={{ minWidth: 40, textAlign: 'center', fontSize: 16 }}>{fontSize}px</span>
            <button
              aria-label="เพิ่มขนาดฟอนต์"
              style={{ width: 32, height: 32, borderRadius: '50%', background: '#f3f3f3', border: 'none', fontWeight: 700, fontSize: 18, color: themePrimary, cursor: 'pointer', marginLeft: 4 }}
              onClick={() => setFontSize(Math.min(32, fontSize + 2))}
            >
              +
            </button>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#e0e0e0', marginLeft: 8 }}></div>
          </div>
        </header>
        {/* Main content */}
        <main style={{ flex: 1, background: themeBackground, color: themeText, fontSize }}>
          <div style={{ padding: 24 }}>{children}</div>
        </main>
      </div>
    </div>
  );
}