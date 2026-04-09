"use client";

import { useEffect, useState } from "react";

export default function AdFit({ unit, width, height }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div style={{ width: `${width}px`, height: `${height}px`, margin: '0 auto' }} />;

  const iframeHtml = `
    <!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; background-color: transparent; overflow: hidden; }
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
    // 부모 여백을 뚫고 나가기 위해 너비를 충분히 확보하고 중앙 정렬합니다.
    <div className="flex justify-center my-4 w-full overflow-visible">
      <iframe
        title={`kakao-ad-${unit}`}
        srcDoc={iframeHtml}
        width={width}
        height={height}
        frameBorder="0"
        scrolling="no"
        style={{
          border: "none",
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: "transparent",
          display: "block"
        }}
      />
    </div>
  );
}