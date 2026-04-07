"use client";
import { useEffect } from "react";

export default function AdFit({ unit, width, height }) {
  useEffect(() => {
    // 1. 기존에 이미 광고가 로드되었는지 확인 (중복 로드 방지)
    const ins = document.querySelector(`ins[data-ad-unit="${unit}"]`);

    if (ins && ins.firstChild) {
      // 이미 광고가 들어있다면 아무것도 하지 않음
      return;
    }

    // 2. 카카오 애드핏 스크립트 동적 생성 및 실행
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // 컴포넌트가 사라질 때 스크립트 제거 (메모리 관리)
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [unit]); // 광고 단위(unit)가 바뀌면 다시 실행

  return (
    <div className="flex justify-center my-6 overflow-hidden min-h-[50px]">
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