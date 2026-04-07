"use client";
import { useState } from "react";
import Link from "next/link";
import { Activity, Heart, Award, Users, Zap, Share2, RefreshCcw } from "lucide-react";
import AdFit from "../../components/AdFit";

export default function BalanceGame() {
  const [step, setStep] = useState("start");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scores, setScores] = useState({ P: 0, E: 0, S: 0, T: 0 });
  const AD_UNIT = "DAN-sPwiKOrdKcuE7clt";

  const questions = [
    { id: 1, title: "퇴근 조건", type: "PE", optionA: { text: "🏃‍♂️ 평생 점심 없이\n1시간 조기 퇴근", value: 'E' }, optionB: { text: "🍱 점심 2시간 보장받고\n1시간 야근", value: 'P' } },
    { id: 2, title: "환자 유형", type: "ST", optionA: { text: "😶 입 꾹 닫고\n한 마디도 안 하는 환자", value: 'T' }, optionB: { text: "🗣️ 1초도 안 쉬고\n자기 얘기만 하는 환자", value: 'S' } },
    { id: 3, title: "병원 조건", type: "PE", optionA: { text: "👿 연봉 5천만 원이지만\n매일 원장님한테 혼남", value: 'P' }, optionB: { text: "👼 연봉 3천만 원이지만\n원장님이 천사표", value: 'E' } },
    { id: 4, title: "치료 스타일", type: "ST", optionA: { text: "😁 치료 효과는 쏘쏘한데\n입담으로 환자가 짱 좋아함", value: 'S' }, optionB: { text: "⚡ 치료 효과는 엄청난데\n환자가 아프다고 욕함", value: 'T' } },
    { id: 5, title: "나의 인기도", type: "PE", optionA: { text: "🔥 모든 환자가 나만 찾아\n화장실 갈 시간도 없음", value: 'P' }, optionB: { text: "👻 내 환자가 한 명도 없어\n하루 종일 눈치 보기", value: 'E' } },
    { id: 6, title: "자기개발", type: "PE", optionA: { text: "📚 내 돈 100만 원 내고\n주말마다 학회 가서 교육 듣기", value: 'P' }, optionB: { text: "🛋️ 교육 절대 안 가고\n집에서 꿀 같은 주말 보내기", value: 'E' } },
    { id: 7, title: "동료 유형", type: "ST", optionA: { text: "👼 일은 못하는데 성격은\n천사여서 분위기 메이커", value: 'S' }, optionB: { text: "😈 일은 완벽하게 잘하는데\n성격이 파탄자인 동료", value: 'T' } },
    { id: 8, title: "보상", type: "PE", optionA: { text: "🤑 인센티브 팍팍 터져 월급 폭발\n(대신 매일 녹초됨)", value: 'P' }, optionB: { text: "🧘 인센티브 0원 기본급만\n(대신 업무 강도 최하)", value: 'E' } },
    { id: 9, title: "점심 시간", type: "ST", optionA: { text: "☕ 선생님들과 카페까지 가서\n시끌벅적 수다 떨기", value: 'S' }, optionB: { text: "🎧 치료실 구석에서 혼자\n조용히 유튜브 보며 먹기", value: 'T' } },
    { id: 10, title: "보호자", type: "ST", optionA: { text: "🕵️ 치료 내내 옆에서\n폭풍 질문하며 참견하는 보호자", value: 'S' }, optionB: { text: "🫥 병실에 환자만 던져두고\n얼굴 한 번 안 비치는 보호자", value: 'T' } }
  ];

  const results = {
    PS: { title: "임상의 열정 우먼/맨", tags: ["#실력파인싸", "#열정물치사"], icon: <Heart className="w-16 h-16 text-rose-500" />, color: "bg-rose-50", desc: "실력 향상에 진심이고 환자와의 라포 형성을 즐기는 타입입니다. 병원에서 가장 인기 많은 에이스 선생님!" },
    PT: { title: "고독한 기술 장인", tags: ["#기술의신", "#장인정신"], icon: <Award className="w-16 h-16 text-indigo-600" />, color: "bg-indigo-50", desc: "화려한 말솜씨보다는 정확한 테크닉과 결과로 증명하는 타입입니다. 환자가 인정하는 진정한 실력파!" },
    ES: { title: "치료실의 인간 비타민", tags: ["#인간비타민", "#분위기메이커"], icon: <Users className="w-16 h-16 text-emerald-500" />, color: "bg-emerald-50", desc: "복잡한 치료보다 효율적인 업무 처리를 선호하며 동료들과의 관계를 중요시하는 타입입니다." },
    ET: { title: "AI급 효율 마스터", tags: ["#칼퇴요정", "#효율마스터"], icon: <Zap className="w-16 h-16 text-blue-500" />, color: "bg-blue-50", desc: "불필요한 감정 소모를 싫어하며, 가장 깔끔하게 할 일만 딱 끝내고 퇴근하는 칼퇴의 정석입니다." }
  };

  const handleAnswer = (val) => {
    const nextScores = { ...scores, [val]: scores[val] + 1 };
    setScores(nextScores);
    if (currentIdx < questions.length - 1) setCurrentIdx(currentIdx + 1);
    else setStep("result");
  };

  const resultKey = (scores.P > scores.E ? "P" : "E") + (scores.S > scores.T ? "S" : "T");

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-jua">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[600px] flex flex-col relative">
        {step === "start" && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-sky-50 to-white">
            <Link href="/" className="absolute top-6 left-6 text-slate-400 hover:text-indigo-600 font-bold text-sm uppercase">← HUB</Link>
            <div className="w-24 h-24 bg-indigo-600 rounded-[2rem] rotate-6 flex items-center justify-center mb-8 shadow-xl"><Activity className="w-12 h-12 text-white -rotate-6" /></div>
            <h1 className="text-3xl font-black mb-3 text-slate-900 leading-tight">물리치료사<br/>성향 밸런스 게임</h1>
            <button onClick={() => setStep("quiz")} className="w-full py-5 bg-indigo-700 text-white rounded-2xl font-black text-xl mb-8 active:scale-95 transition-all">게임 시작하기</button>
            <AdFit unit={AD_UNIT} width="320" height="50" />
            <p className="mt-6 text-sm text-slate-400 font-bold uppercase tracking-widest leading-none">10 Questions | @the.pt.map</p>
          </div>
        )}

        {step === "quiz" && (
          <div className="flex-1 flex flex-col p-4 bg-slate-50">
            <div className="mb-4 text-center px-2">
              <div className="flex justify-between items-end mb-2">
                <span className="text-indigo-600 font-black text-xl italic uppercase tracking-tighter">Question {currentIdx + 1}</span>
                <span className="text-slate-400 text-sm font-bold tracking-widest">{currentIdx + 1} / {questions.length}</span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-600 transition-all duration-300" style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }} />
              </div>
            </div>
            <div className="flex-1 flex flex-col relative gap-4">
              <button onClick={() => handleAnswer(questions[currentIdx].optionA.value)} className="flex-1 bg-sky-100 hover:bg-sky-200 rounded-[2rem] p-6 text-2xl font-black text-sky-900 whitespace-pre-line leading-tight active:scale-95 transition-all">{questions[currentIdx].optionA.text}</button>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl font-black italic text-2xl text-slate-800">VS</div>
              <button onClick={() => handleAnswer(questions[currentIdx].optionB.value)} className="flex-1 bg-indigo-600 hover:bg-indigo-700 rounded-[2rem] p-6 text-2xl font-black text-white whitespace-pre-line leading-tight active:scale-95 transition-all">{questions[currentIdx].optionB.text}</button>
            </div>
            <div className="mt-4"><AdFit unit={AD_UNIT} width="320" height="50" /></div>
          </div>
        )}

        {step === "result" && (
          <div className="flex-1 flex flex-col p-6 overflow-y-auto bg-white">
            <h2 className="text-4xl font-black text-slate-900 text-center mb-6 leading-tight">{results[resultKey].title}</h2>
            <div className={`rounded-[40px] ${results[resultKey].color} p-8 mb-8 flex flex-col items-center border shadow-xl`}>
              <div className="mb-6 bg-white p-5 rounded-3xl shadow-md transform -rotate-3">{results[resultKey].icon}</div>
              <div className="flex flex-wrap justify-center gap-2 mb-8">{results[resultKey].tags.map((tag, i) => (<span key={i} className="text-indigo-700 font-bold text-sm bg-white/70 px-3 py-1 rounded-xl border border-indigo-100">{tag}</span>))}</div>
              <p className="text-slate-700 leading-relaxed text-center font-bold text-lg">{results[resultKey].desc}</p>
            </div>
            <AdFit unit={AD_UNIT} width="320" height="50" />
            <button onClick={() => setStep("start")} className="w-full py-4 bg-white border-2 border-slate-200 text-slate-500 rounded-2xl font-bold flex items-center justify-center gap-3 mt-4 active:scale-95 transition-all"><RefreshCcw className="w-5 h-5" /> 다시 테스트하기</button>
          </div>
        )}
      </div>
    </div>
  );
}