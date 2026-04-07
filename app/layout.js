import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  title: "PT MAP | 물리치료사 콘텐츠 허브",
  description: "물리치료사 성향 테스트 및 밸런스 게임",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        {/* 구글 폰트 (주아체) */}
        <link href="https://fonts.googleapis.com/css2?family=Jua&display=swap" rel="stylesheet" />

        {/* 카카오 광고 공통 스크립트 (필요 시 유지) */}
        <script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script>
      </head>
      <body className="antialiased">
        {/* 페이지 콘텐츠 */}
        {children}

        {/* 1. Vercel 분석 (기존 코드) */}
        <Analytics />

        {/* 2. Google Analytics 4 (새로 추가) */}
        <GoogleAnalytics gaId="G-0EP4BEM1QD" />
      </body>
    </html>
  );
}