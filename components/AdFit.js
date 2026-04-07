"use client";

import { useEffect, useState } from "react";

export default function AdFit({ unit, width, height }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 1. 컴포넌트가 브라우저에 완전히 안착했는지 확인
    setMounted(true);

    let retryInterval;
    let count = 0;

    const tryDisplay = () => {
      if (window.adfit && typeof window.adfit.display === 'function') {
        try {
          window.adfit.display();
          clearInterval(retryInterval);
        } catch (e) {
          console.error("AdFit display error:", e);
        }
      } else if (count > 20) {
        clearInterval(retryInterval);
      }
      count++;
    };

    // 2. 마운트 직후 바로 실행하지 않고 0.5초 정도 여유를 줍니다 (버튼 기능 연결 시간 확보)
    if (mounted) {
      retryInterval = setInterval(tryDisplay, 500);
    }

    return () => {
      if (retryInterval) clearInterval(retryInterval);
    };
  }, [mounted, unit]);

  // 3. 서버 사이드 렌더링 시에는 아무것도 렌더링하지 않아 충돌 방지
  if (!mounted) return <div style={{ minHeight: height }} />;

  return (
    <div className="flex justify-center my-4 overflow-hidden" style={{ minHeight: height }}>
      <ins
        className="kakao_ad_area"
        style={{ display: "none" }}
        data-ad-unit={unit}
        data-ad-width={width}
        data-ad-height={height}
      ></ins>
    </div>
  );
}