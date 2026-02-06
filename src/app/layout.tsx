
import Providers from "./providers";
import "./globals.css";
import "../../public/fonts/thsarabun.css";

export const metadata = {
  title: "Admin PWA",
  manifest: "/next-pwa/manifest.json",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <head>
        <meta name="theme-color" content="#1e293b" />
        <script src="/next-pwa/pwa-install.js" defer></script>
      </head>
      <body>
        <button id="pwa-install-btn" style={{display:'none',position:'fixed',bottom:24,right:24,zIndex:1000}} className="bg-blue-600 text-white px-4 py-2 rounded shadow-lg">ติดตั้งแอป</button>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}