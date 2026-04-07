"use client";

import { useEffect, useState } from "react";

export default function AdFit({ unit, width, height }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // 1. 클라이언트 사이드인지 확인 (Hydration 오류 방지)
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      // 2. 리액트가 화면을 다 그린 후, 아주 잠깐의 여유(300ms)를 두고 광고 호출
      const timer = setTimeout(() => {
        try {
          if (window.adfit && typeof window.adfit.display === 'function') {
            window.adfit.display();
          }
        } catch (e) {
          console.error("AdFit display error:", e);
        }
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isClient, unit]); // unit이 바뀌거나 클라이언트 마운트 시 실행

  // 서버 사이드 렌더링 시에는 빈 영역(placeholder)만 보여줌
  if (!isClient) return <div style={{ minHeight: `${height}px` }} />;

  return (
    <div className="flex justify-center my-4 overflow-hidden" style={{ minHeight: `${height}px` }}>
      <ins
        className="kakao_ad_area"
        style={{ display: "none" }}
        data-ad-unit={unit}
        data-ad-width={width}
        data-ad-height={height}
        suppressHydrationWarning={true}
      ></ins>
    </div>
  );
}