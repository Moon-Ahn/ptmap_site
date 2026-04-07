import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "PT MAP | 물리치료사 콘텐츠 허브",
  description: "물리치료사 성향 테스트 및 밸런스 게임",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />
        {/* 카카오 광고 공통 스크립트 */}
        <script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script>
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}