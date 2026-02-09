
## ปัญหาที่เจอ 
คือ push ไปยัง gh page แล้วโหลด pwa บนมือถือ จะขึ้น 404 

GitHub Pages ไม่เหมาะกับ Next.js PWA ที่ต้องการ routing เต็มรูปแบบ
ถ้าอยากได้ประสบการณ์ PWA ที่ดี ควร deploy บน Vercel, Netlify หรือ Cloudflare Pages

## ติดตั้ง
npx create-next-app@latest next-pwa --typescript --tailwind --eslint   
 
√ Would you like to use React Compiler? ... No  
√ Would you like your code inside a `src/` directory? ...  Yes
√ Would you like to use App Router? (recommended) ...  Yes
√ Would you like to customize the import alias (`@/*` by default)? ... No 


npm install @ducanh2912/next-pwa @tanstack/react-query @tanstack/react-query-devtools gh-pages


## สร้างไฟล์ next.config.mjs

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',           // สร้างเป็นไฟล์ Static
  trailingSlash: true,        // แก้ปัญหา Refresh หน้าแล้ว 404
  basePath: '/next-pwa', // **ต้องตรงกับชื่อ Repository ของคุณ**
  images: { unoptimized: true },
};

export default withPWA(nextConfig);


## edit package.json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "deploy": "npm run build && touch out/.nojekyll && gh-pages -d out"
}