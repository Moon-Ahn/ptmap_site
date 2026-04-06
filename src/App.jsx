import React, { useEffect } from 'react';
import { ExternalLink, Rocket, Map, Instagram, Share2, MousePointer2, LayoutGrid, HeartPulse } from 'lucide-react';

const App = () => {
  const COMMUNITY_URL = "https://www.instagram.com/the.pt.map?igsh=MWIwOTV2OTY1Y2loaw==";

  // 카카오 광고 스크립트 로드 및 광고 실행
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//t1.daumcdn.net/kas/static/ba.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // 컴포넌트 언마운트 시 스크립트 제거 (선택 사항)
      const existingScript = document.querySelector('script[src="//t1.daumcdn.net/kas/static/ba.min.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  // 허브에 노출될 콘텐츠 리스트
  const contents = [
    {
      id: 1,
      title: "물치 성향 밸런스 게임",
      desc: "나는 어떤 유형의 치료사일까? 10가지 밸런스 대결로 알아보는 나의 임상 MBTI!",
      url: "https://pt-balance-game.vercel.app/",
      emoji: "⚖️",
      tag: "NEW",
      tagStyle: "bg-indigo-100 text-indigo-600",
      iconBg: "bg-white",
    },
    {
      id: 2,
      title: "물치 진로 성향 테스트",
      desc: "나는 어떤 물리치료사가 될까? 예비/신입 물치사를 위한 성향 진단!",
      url: "https://pt-ssacksu.vercel.app/",
      emoji: "🌱",
      tag: "HOT",
      tagStyle: "bg-emerald-100 text-emerald-600",
      iconBg: "bg-white",
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 pb-20">
      {/* 귀여운 폰트 및 전역 스타일 */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
          * {
            font-family: 'Jua', sans-serif !important;
            word-break: keep-all;
          }
          .custom-shadow {
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1);
          }
        `}
      </style>

      {/* 상단 헤더 섹션 */}
      <div className="bg-indigo-900 pt-20 pb-28 px-6 text-center relative overflow-hidden">
        {/* 배경 장식 원 */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-white rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-400 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-[2rem] mb-8 shadow-2xl rotate-3 border-4 border-indigo-500/30">
            <Map className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-5xl font-black text-white mb-4 tracking-tight">
            PT MAP <span className="text-sky-300">HUB</span>
          </h1>
          <p className="text-indigo-100 text-xl font-medium opacity-90 max-w-sm mx-auto leading-relaxed">
            물리치료사들의 성장을 위한<br/>재미있는 놀이터에 오신걸 환영해요!
          </p>
        </div>
      </div>

      {/* 콘텐츠 카드 그리드 */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="flex flex-wrap justify-center gap-8">
          {contents.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-[2.5rem] p-7 custom-shadow border border-white hover:translate-y-[-5px] active:scale-95 transition-all flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
            >
              <div className="flex justify-between items-start mb-5">
                <div className="w-16 h-16 rounded-3xl bg-white border-2 border-slate-100 flex items-center justify-center text-4xl shadow-lg transform group-hover:rotate-6 transition-transform">
                  {item.emoji}
                </div>
                <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm ${item.tagStyle}`}>
                  {item.tag}
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                {item.title}
                <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-colors" />
              </h3>

              <p className="text-slate-500 text-lg font-medium leading-snug mb-8 opacity-80 h-12">
                {item.desc}
              </p>

              <div className="mt-auto flex items-center justify-between">
                <span className="font-black flex items-center gap-2 text-sm text-indigo-600">
                  시작하기 <MousePointer2 className="w-5 h-5 animate-bounce" />
                </span>
                <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center group-hover:bg-indigo-50 transition-colors">
                  <LayoutGrid className="w-5 h-5 text-slate-300 group-hover:text-indigo-400" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* 광고 섹션: 콘텐츠 카드와 하단 배너 사이에 배치 */}
        <div className="mt-12 flex justify-center overflow-hidden">
          <ins className="kakao_ad_area" style={{ display: 'none' }}
            data-ad-unit="DAN-yFTIi0bFetiem8FB"
            data-ad-width="300"
            data-ad-height="250"></ins>
        </div>

        {/* 하단 인스타그램 커뮤니티 섹션 */}
        <div className="mt-12 max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-10 text-center shadow-2xl border border-slate-800">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-indigo-500/10 rounded-full">
              <HeartPulse className="w-8 h-8 text-indigo-400 animate-pulse" />
            </div>
          </div>
          <p className="text-indigo-400 text-lg font-black mb-4 tracking-[0.2em] uppercase italic">💡 NEXT STEP</p>
          <div className="text-slate-200 text-lg mb-10 leading-relaxed">
            더 많은 정보와 동료들이 필요하다면?<br />
            <span className="text-white text-4xl font-black block mt-3 mb-2 italic">PT MAP</span>
            <span className="text-slate-400 text-sm font-bold opacity-80">물리치료사 커리어를 위한 최고의 커뮤니티</span>
          </div>
          <button
            onClick={() => window.open(COMMUNITY_URL, '_blank')}
            className="w-full max-w-sm mx-auto py-6 bg-indigo-600 text-white rounded-3xl font-black text-2xl hover:bg-indigo-500 transition-all active:scale-95 shadow-[0_15px_30px_rgba(79,70,229,0.4)] flex items-center justify-center gap-3"
          >
            <Instagram className="w-7 h-7" /> 공식 인스타 가기
          </button>
        </div>

        {/* 푸터 영역 */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm font-black tracking-widest uppercase mb-4 opacity-50">© 2026 PT MAP contents hub</p>
          <div className="flex justify-center gap-6 text-slate-300">
            <Share2 className="w-6 h-6 hover:text-indigo-400 cursor-pointer transition-colors" />
            <Rocket className="w-6 h-6 hover:text-indigo-400 cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;