"use client";

import { useEffect, useState } from "react";

export default function AdFit({ unit, width, height }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const timer = setTimeout(() => {
        try {
          if (window.adfit && typeof window.adfit.display === 'function') {
            window.adfit.display();
          }
        } catch (e) {
          console.error("AdFit Display Error:", e);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isClient, unit]);

  if (!isClient) return <div style={{ minHeight: '50px' }} />;

  return (
    <div className="flex justify-center my-4 overflow-hidden" style={{ minHeight: '50px' }}>
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