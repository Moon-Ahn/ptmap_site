"use client";
import { useState } from "react";
import Link from "next/link";
import { Brain, Activity, BookOpen, Dumbbell, Building2, Coffee, ChevronRight, RefreshCcw, Share2 } from "lucide-react";
import AdFit from "../../components/AdFit";

export default function SsacksuTest() {
  const [step, setStep] = useState("start");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scores, setScores] = useState({ ns: 0, os: 0, research: 0, sports: 0, industry: 0, routine: 0 });
  const AD_UNIT = "DAN-759Dqui0igvOIbst";

  const questions = [
    { id: 1, q: "지하철 앞 사람 걸음걸이가 이상하다면?", options: [{ text: "어떤 신경계 손상 기전일까 분석해본다", types: ['ns'] }, { text: "골반 불균형인가? 내가 교정해주고 싶다", types: ['os'] }, { text: "'아, 나도 다리 아픈데...' 하며 핸드폰을 본다", types: ['routine'] }, { text: "저런 보행을 교정해주는 보조기 사업은 어떨까?", types: ['industry'] }] },
    { id: 2, q: "동기 엠티에서 친구가 \"어깨 아파\"라고 한다면?", options: [{ text: "\"연관통인가? 일단 기전부터...\"", types: ['research'] }, { text: "\"야, 일로와 봐.\" 일단 한 번 꺾어준다", types: ['sports'] }, { text: "\"파스 붙여. 내일 병원 가.\"", types: ['routine'] }, { text: "\"너 같은 애들 많지? 예방 운동 영상 있는데.\"", types: ['industry'] }] },
    { id: 3, q: "시험 기간, 도서관에서 내 책상 모습은?", options: [{ text: "전공 서적과 학술 자료가 가득하다", types: ['ns'] }, { text: "해부학 앱과 실습 소도구가 놓여있다", types: ['os'] }, { text: "깔끔하게 정리된 족보 한 권뿐이다", types: ['research'] }, { text: "아이패드에 진로/취업 뉴스 창이 떠 있다", types: ['industry'] }] },
    { id: 4, q: "실습 첫날, 선생님의 현란한 치료를 봤을 때?", options: [{ text: "'동작의 이론적 근거는 뭘까?' 궁금하다", types: ['research'] }, { text: "'와, 나도 저 테크닉 배우고 싶다'", types: ['sports'] }, { text: "'선생님 진짜 힘드시겠다...'", types: ['ns'] }, { text: "'이 병원은 시스템이 잘 갖춰져 있네'", types: ['industry'] }] },
    { id: 5, q: "유튜브 알고리즘에 뜬 영상 중 클릭하고 싶은 것은?", options: [{ text: "[임상] 편마비 환자의 보행 패턴 분석", types: ['ns'] }, { text: "[도수] 단 5분 만에 거북목 교정하기", types: ['os', 'sports'] }, { text: "[로그] 워라밸 최강, 칼퇴 물치사", types: ['routine'] }, { text: "[비즈] 병원을 탈출해 연봉 1억 번 물치사", types: ['research'] }] },
    { id: 6, q: "해부학 시험 공부 중 내 머릿속 생각은?", options: [{ text: "근육의 기시/정지를 외우며 감탄한다", types: ['research'] }, { text: "이걸 나중에 치료할 때 써먹을 생각에 설렌다", types: ['os'] }, { text: "\"하... 이걸 다 외워야 국시 붙겠지?\"", types: ['routine'] }, { text: "\"이런 걸 쉽게 배우는 앱은 안 나오나?\"", types: ['industry'] }] },
    { id: 7, q: "방학 때 하고 싶은 알바나 대외활동은?", options: [{ text: "재활병원 보조 알바 (현장 경험)", types: ['ns'] }, { text: "스포츠 구단 의무팀 보조 (현장감)", types: ['sports'] }, { text: "카페 알바나 여행 (일단 힐링)", types: ['os'] }, { text: "헬스케어 마케팅 인턴 (스펙 확장)", types: ['research'] }] },
    { id: 8, q: "환자와 대화할 때 나의 스타일은?", options: [{ text: "신체 구조와 회복 기전을 상세히 설명한다", types: ['research'] }, { text: "당장 좋아질 부분에 대해 확신을 준다", types: ['os', 'sports'] }, { text: "따뜻하게 공감하며 일상 이야기를 나눈다", types: ['routine'] }, { text: "환자의 생활 습관 개선을 조언한다", types: ['industry'] }] },
    { id: 9, q: "만약 나만의 '치료 공간'을 딱 하나만 꾸민다면?", options: [{ text: "넓은 매트와 치료 베드", types: ['ns'] }, { text: "슬링, 바벨이 가득한 트레이닝 짐", types: ['sports'] }, { text: "표준화된 물리치료실", types: ['routine'] }, { text: "동작 분석 센서와 고사양 PC", types: ['research'] }] },
    { id: 10, q: "물치과를 견디게 하는 원동력은?", options: [{ text: "한 분야의 '장인'이 되고 싶다는 학구열", types: ['ns'] }, { text: "내 손기술로 누군가를 낫게 하겠다는 보람", types: ['os', 'sports'] }, { text: "면허증 따서 안정적으로 먹고살겠다는 현실감", types: ['routine'] }, { text: "이 전공을 발판 삼아 넓은 세상으로 나가는 야망", types: ['industry'] }] }
  ];

  const results = {
    ns: { title: "뇌와 소통하는 마법사", type: "NS (신경계)", icon: <Brain className="w-16 h-16 text-indigo-600" />, color: "bg-indigo-50", desc: "복잡한 신경망을 이해하고 작은 변화에서도 보람을 찾는 섬세한 탐구자 스타일!" },
    os: { title: "근육 연금술사", type: "OS (정형계)", icon: <Activity className="w-16 h-16 text-blue-600" />, color: "bg-blue-50", desc: "확실한 테크닉과 빠른 피드백을 선호하는 실전 해결사! '손맛' 좋은 치료사가 될 상입니다." },
    research: { title: "논문 읽는 전략가", type: "연구원/교수", icon: <BookOpen className="w-16 h-16 text-emerald-600" />, color: "bg-emerald-50", desc: "근거 중심의 완벽주의자! 미래의 물리치료학계를 이끌 교수의 싹이 보입니다." },
    sports: { title: "필드의 에너자이저", type: "스포츠 트레이너", icon: <Dumbbell className="w-16 h-16 text-rose-600" />, color: "bg-rose-50", desc: "푸른 잔디 위 선수들과 호흡하며 부상을 관리하는 의무팀 트레이너가 당신의 천직!" },
    industry: { title: "갓생 보건관리자", type: "산업체 물치사", icon: <Building2 className="w-16 h-16 text-slate-600" />, color: "bg-slate-50", desc: "병원이라는 틀을 벗어나 헬스케어 비즈니스를 기획하는 야망가 무대!" },
    routine: { title: "일상의 지킴이", type: "안정형 물치사", icon: <Coffee className="w-16 h-16 text-cyan-600" />, color: "bg-cyan-50", desc: "성실하게 환자들의 삶의 질을 유지해주는 수호자! 실속 있는 프로 치료사의 길입니다." }
  };

  const handleAnswer = (option) => {
    const nextScores = { ...scores };
    option.types.forEach(t => nextScores[t]++);
    setScores(nextScores);
    if (currentIdx < questions.length - 1) setCurrentIdx(currentIdx + 1);
    else setStep("result");
  };

  const getWinner = () => {
    let max = -1, winner = 'ns';
    Object.entries(scores).forEach(([k, v]) => { if (v > max) { max = v; winner = k; } });
    return winner;
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-jua">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[600px] flex flex-col relative">
        {step === "start" && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-indigo-50 to-white">
            <Link href="/" className="absolute top-6 left-6 text-slate-400 hover:text-indigo-600 font-bold text-sm uppercase">← HUB</Link>
            <div className="w-24 h-24 bg-indigo-100 rounded-3xl rotate-12 flex items-center justify-center mb-8 shadow-xl"><Activity className="w-12 h-12 text-indigo-700 -rotate-12" /></div>
            <h1 className="text-3xl font-black mb-4 text-slate-900 leading-tight">물리치료사<br/>진로 성향 테스트</h1>
            <button onClick={() => setStep("quiz")} className="w-full py-5 bg-indigo-800 text-white rounded-2xl font-bold text-xl mb-8 active:scale-95 transition-all">테스트 시작하기</button>
            <AdFit unit={AD_UNIT} width="320" height="50" />
          </div>
        )}

        {step === "quiz" && (
          <div className="flex-1 flex flex-col p-6">
            <div className="mb-10 text-center">
              <div className="flex justify-between items-end mb-2">
                <span className="text-indigo-700 font-black text-xl italic uppercase">Question {currentIdx + 1}</span>
                <span className="text-slate-400 text-sm font-bold">{currentIdx + 1} / {questions.length}</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-indigo-700 transition-all duration-300" style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }} />
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-4">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 leading-snug">{questions[currentIdx].q}</h2>
              {questions[currentIdx].options.map((opt, i) => (
                <button key={i} onClick={() => handleAnswer(opt)} className="w-full p-5 text-left border-2 border-slate-100 hover:border-indigo-400 hover:bg-indigo-50 bg-white rounded-2xl transition-all flex items-center justify-between active:scale-95">
                  <span className="text-lg font-semibold text-slate-700 leading-tight">{opt.text}</span>
                  <ChevronRight className="w-5 h-5 text-slate-200" />
                </button>
              ))}
            </div>
            <div className="mt-6"><AdFit unit={AD_UNIT} width="320" height="50" /></div>
          </div>
        )}

        {step === "result" && (
          <div className="flex-1 flex flex-col p-6 overflow-y-auto bg-white text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-6 leading-tight">{results[getWinner()].title}</h2>
            <div className={`rounded-[32px] ${results[getWinner()].color} p-8 mb-8 flex flex-col items-center border shadow-xl`}>
              <div className="mb-6 bg-white p-5 rounded-3xl shadow-md transform -rotate-3">{results[getWinner()].icon}</div>
              <span className="inline-block px-6 py-2 bg-indigo-800 rounded-full text-xs font-black text-white shadow-md mb-4 uppercase tracking-widest">{results[getWinner()].type}</span>
              <p className="text-slate-700 leading-relaxed font-bold text-lg">{results[getWinner()].desc}</p>
            </div>
            <AdFit unit={AD_UNIT} width="320" height="50" />
            <button onClick={() => setStep("start")} className="w-full py-4 bg-white border-2 border-slate-200 text-slate-500 rounded-2xl font-bold flex items-center justify-center gap-3 mt-4 active:scale-95 transition-all"><RefreshCcw className="w-5 h-5" /> 다시 테스트하기</button>
          </div>
        )}
      </div>
    </div>
  );
}