"use client";

import { useEffect, useState } from "react";

export default function AdFit({ unit, width, height }) {
  const [isClient, setIsClient] = useState(false);

  // 서버 사이드 에러 방지용
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div style={{ width: `${width}px`, height: `${height}px`, margin: '0 auto' }} />;

  // iframe 안에 들어갈 카카오 광고 전용 미니 HTML 문서입니다.
  const iframeHtml = `
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          /* 여백을 없애고 광고를 중앙에 딱 맞춥니다 */
          body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background-color: transparent; }
        </style>
      </head>
      <body>
        <ins class="kakao_ad_area" style="display:none;"
          data-ad-unit="${unit}"
          data-ad-width="${width}"
          data-ad-height="${height}"></ins>
        <script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script>
      </body>
    </html>
  `;

  return (
    <div className="flex justify-center my-4 overflow-hidden" style={{ minHeight: `${height}px` }}>
      <iframe
        title={`kakao-ad-${unit}`}
        srcDoc={iframeHtml} // 만들어둔 미니 HTML을 iframe에 주입합니다.
        width={width}
        height={height}
        frameBorder="0"
        scrolling="no"
        style={{
          border: "none",
          overflow: "hidden",
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: "transparent"
        }}
      />
    </div>
  );
}