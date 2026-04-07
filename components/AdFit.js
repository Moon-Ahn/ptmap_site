"use client";

import { useEffect } from "react";

export default function AdFit({ unit, width, height }) {
  useEffect(() => {
    // 0.1초 뒤에 광고 실행 (DOM이 완전히 그려진 후 안전하게 호출)
    const timer = setTimeout(() => {
      try {
        if (window.adfit) {
          window.adfit.display();
        }
      } catch (e) {
        console.error("AdFit error:", e);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [unit]); // unit이 바뀔 때(페이지 이동 시)만 다시 실행됩니다.

  return (
    <div className="flex justify-center my-4 overflow-hidden min-h-[50px]">
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