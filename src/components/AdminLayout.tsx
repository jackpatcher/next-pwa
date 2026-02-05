"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(22);
  const pathname = usePathname();

  // Sidebar menu config (icon, name, href, badge, badgeColor)
  type MenuItem = {
    name: string;
    href: string;
    icon: React.ReactElement;
    badge?: string | number;
    badgeColor?: string;
  };
  const menuItems: MenuItem[] = [
    {
      name: 'Dashboard',
      href: '/',
      icon: (
        <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" /></svg>
      ),
    },
    {
      name: 'User',
      href: '/user/',
      icon: (
        <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
      ),
    },
    {
      name: 'Setting',
      href: '/setting/',
      icon: (
        <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.25 3c.414 0 .75.336.75.75v1.086a7.001 7.001 0 013.364 1.39l.77-.77a.75.75 0 111.06 1.06l-.77.77a7.001 7.001 0 011.39 3.364h1.086a.75.75 0 010 1.5h-1.086a7.001 7.001 0 01-1.39 3.364l.77.77a.75.75 0 11-1.06 1.06l-.77-.77a7.001 7.001 0 01-3.364 1.39v1.086a.75.75 0 01-1.5 0v-1.086a7.001 7.001 0 01-3.364-1.39l-.77.77a.75.75 0 11-1.06-1.06l.77-.77a7.001 7.001 0 01-1.39-3.364H3.75a.75.75 0 010-1.5h1.086a7.001 7.001 0 011.39-3.364l-.77-.77a.75.75 0 111.06-1.06l.77.77A7.001 7.001 0 0111.25 4.836V3.75c0-.414.336-.75.75-.75z" /></svg>
      ),
    },
    {
      name: 'About',
      href: '/about/',
      icon: (
        <svg className="w-5 h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z" /></svg>
      ),
    },
  ];

  // Sidebar user info
  const user = {
    name: 'Hizrian',
    role: 'Administrator',
    avatar: '/icons/avatar.png', // put your avatar image in public/icons/avatar.png
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform lg:relative lg:translate-x-0 flex flex-col`}>
        <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-100">
          <span className="text-xl font-bold text-gray-700">Ready Dashboard</span>
        </div>
        {/* User Profile */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
          <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover border" />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-800 leading-tight">{user.name}</span>
            <span className="text-xs text-gray-400">{user.role}</span>
          </div>
        </div>
        {/* Menu */}
        <nav className="flex-1 mt-2 flex flex-col gap-2">
          {menuItems.map((item) => {
            // Normalize trailing slashes for comparison
            const normalize = (str: string) => {
              if (!str) return '/';
              // Remove trailing and leading slashes, but keep root
              if (str === '/') return '/';
              return '/' + str.replace(/^\/+|\/+$/g, '');
            };
            const current = normalize(pathname);
            const href = normalize(item.href);
            const active = href === '/'
              ? current === '/'
              : current === href || current.startsWith(href + '/');
            // Merge className for SVG icons safely
            let icon = item.icon;
            if (React.isValidElement(item.icon)) {
              const iconElement = item.icon as React.ReactElement<any, any>;
              const prevClass = (iconElement.props.className || '');
              // If active, force icon to blue-500, else use original
              const iconClass = active
                ? `w-7 h-7 mr-3 text-blue-500`
                : `w-7 h-7 mr-3 ${prevClass}`;
              icon = React.cloneElement(iconElement, { className: iconClass.trim() });
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  `relative flex items-center px-7 py-4 group transition-colors rounded-lg ` +
                  (active ? "bg-blue-50" : "hover:bg-blue-50")
                }
                style={{ fontSize: fontSize, minHeight: fontSize * 2.2 }}
              >
                {/* Left color bar */}
                <span className={`absolute left-0 top-2 h-[70%] w-1 rounded-r-lg transition-all duration-200 ${active ? "bg-blue-500" : "bg-transparent"}`} />
                {/* Icon */}
                {icon}
                {/* Name */}
                <span className={`flex-1 font-semibold ${active ? "text-blue-600" : "text-gray-700"}`}>{item.name}</span>
                {/* Badge */}
                {item.badge !== undefined && (
                  <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-semibold ${item.badgeColor}`}>{item.badge}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white shadow flex items-center justify-between px-6">
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">☰</button>
          <span className="font-semibold text-gray-700">ระบบจัดการ</span>
          <div className="flex items-center gap-2">
            <button
              aria-label="ลดขนาดฟอนต์"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-lg font-bold hover:bg-slate-300 transition-all shadow"
              onClick={() => setFontSize(f => Math.max(14, f - 2))}
              style={{ lineHeight: 1 }}
            >
              -
            </button>
            <span className="min-w-[32px] text-center text-base">{fontSize}px</span>
            <button
              aria-label="เพิ่มขนาดฟอนต์"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-lg font-bold hover:bg-slate-300 transition-all shadow"
              onClick={() => setFontSize(f => Math.min(48, f + 2))}
              style={{ lineHeight: 1 }}
            >
              +
            </button>
            <div className="w-8 h-8 bg-slate-300 rounded-full ml-2"></div>
          </div>
        </header>
        <main className="p-6 overflow-auto" style={{ fontSize: fontSize }}>{children}</main>
      </div>
    </div>
  );
}