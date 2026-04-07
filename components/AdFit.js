"use client";

import { useEffect, useRef } from "react";

export default function AdFit({ unit, width, height }) {
  const adRef = useRef(null);

  useEffect(() => {
    if (!adRef.current) return;

    // 1. 기존 내용을 완전히 비우고 새로 생성 (매우 중요)
    adRef.current.innerHTML = "";

    const ins = document.createElement("ins");
    ins.className = "kakao_ad_area";
    ins.style.display = "none";
    ins.setAttribute("data-ad-unit", unit);
    ins.setAttribute("data-ad-width", width);
    ins.setAttribute("data-ad-height", height);

    adRef.current.appendChild(ins);

    // 2. 약간의 지연 후 카카오 광고 호출
    const timer = setTimeout(() => {
      try {
        if (window.adfit && typeof window.adfit.display === 'function') {
          window.adfit.display();
        }
      } catch (e) {
        console.error("AdFit Display Error:", e);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [unit]); // unit이 바뀌거나 컴포넌트가 새로 나타나면 무조건 실행

  return (
    <div
      className="flex justify-center my-4 overflow-hidden"
      style={{ minWidth: `${width}px`, minHeight: `${height}px` }}
    >
      <div ref={adRef} />
    </div>
  );
}