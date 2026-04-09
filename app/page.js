"use client";
import Link from "next/link";
import { Map, Instagram, MousePointer2, ExternalLink } from "lucide-react";
import AdFit from "../components/AdFit"; // 공통 광고 컴포넌트 불러오기

export default function HubPage() {
  const COMMUNITY_URL = "https://www.instagram.com/the.pt.map";

  const contents = [
    {
      id: "balance",
      title: "물치 성향 밸런스 게임",
      desc: "나의 임상 스타일은? 10가지 밸런스 대결!",
      url: "/balance",
      emoji: "⚖️",
      tag: "NEW",
      tagStyle: "bg-indigo-100 text-indigo-600"
    },
    {
      id: "ssacksu",
      title: "물치 진로 성향 테스트",
      desc: "나는 어떤 물리치료사가 될까? 진로 성향 진단!",
      url: "/ssacksu",
      emoji: "🌱",
      tag: "HOT",
      tagStyle: "bg-emerald-100 text-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-jua">
      {/* 상단 헤더 */}
      <div className="bg-indigo-900 pt-20 pb-28 px-6 text-center relative overflow-hidden">
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-[2rem] mb-8 shadow-2xl rotate-3">
            <Map className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-5xl font-black text-white mb-4 italic">PT MAP <span className="text-sky-300">HUB</span></h1>
          <p className="text-indigo-100 text-xl max-w-sm mx-auto opacity-90 leading-relaxed">함께 움직이고 함께 성장하는 피티맵(PT MAP)</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        {/* 콘텐츠 카드 그리드 */}
        <div className="flex flex-wrap justify-center gap-8">
          {contents.map((item) => (
            <Link
              key={item.id}
              href={item.url}
              className="group bg-white rounded-[2.5rem] p-7 shadow-xl border border-white hover:translate-y-[-5px] transition-all w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm flex flex-col cursor-pointer"
            >
              <div className="flex justify-between items-start mb-5">
                <div className="w-16 h-16 rounded-3xl bg-white border-2 border-slate-100 flex items-center justify-center text-4xl shadow-lg">{item.emoji}</div>
                <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase ${item.tagStyle}`}>{item.tag}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 flex items-center gap-2">
                {item.title} <ExternalLink className="w-5 h-5 text-slate-200 group-hover:text-indigo-400 transition-colors" />
              </h3>
              <p className="text-slate-500 text-lg mb-8 opacity-80 h-12 leading-snug">{item.desc}</p>
              <div className="mt-auto flex items-center justify-between text-indigo-600 font-black text-sm">
                시작하기 <MousePointer2 className="w-5 h-5 animate-bounce" />
              </div>
            </Link>
          ))}
        </div>

        {/* --- 메인 허브 전용 광고 섹션 (300x250) --- */}
        <div className="mt-12 py-4">
          <AdFit unit="DAN-qhPnziozp8CBV7X7" width="300" height="250" />
        </div>

        {/* 커뮤니티 배너 */}
        <div className="mt-12 max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-10 text-center shadow-2xl">
          <p className="text-indigo-400 text-lg font-black mb-4 uppercase italic tracking-widest">💡 NEXT STEP</p>
          <div className="text-white text-lg mb-10 leading-relaxed font-medium">놓치면 손해인 물리치료사 커리어 로드맵!<br /><span className="text-4xl font-black block mt-3 italic">PT MAP</span></div>
          <button onClick={(e) => { e.preventDefault(); window.open(COMMUNITY_URL, '_blank'); }} className="w-full max-w-sm mx-auto py-6 bg-indigo-600 text-white rounded-3xl font-black text-2xl flex items-center justify-center gap-3 active:scale-95 transition-all shadow-lg">
            <Instagram className="w-7 h-7" /> 공식 인스타 가기
          </button>
        </div>
      </div>
    </div>
  );
}