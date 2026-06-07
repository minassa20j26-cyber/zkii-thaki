import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════
   BRAND COLORS  (from uploaded poster)
   Primary Blue  : #1B3A8A  /  #2356C8
   Accent Green  : #22B573
   Gold          : #F5A623
   Light BG      : #EEF4FF
═══════════════════════════════════════════════════ */

const C = {
  blue:   "#1B3A8A",
  blue2:  "#2356C8",
  green:  "#22B573",
  gold:   "#F5A623",
  light:  "#EEF4FF",
  white:  "#FFFFFF",
  dark:   "#0D1F4E",
  text:   "#2C3E6B",
  soft:   "#F0F7FF",
};

/* ── SVG Characters ─────────────────────────────── */

function ThakiRobot({ size = 90 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 130">
      {/* Body */}
      <rect x="28" y="62" width="64" height="50" rx="14" fill={C.blue2} />
      {/* Head */}
      <rect x="24" y="22" width="72" height="46" rx="16" fill="white" stroke={C.blue2} strokeWidth="3" />
      {/* Screen face */}
      <rect x="30" y="28" width="60" height="34" rx="10" fill={C.dark} />
      {/* Eyes */}
      <circle cx="48" cy="42" r="9" fill="#00D4FF" opacity="0.9">
        <animate attributeName="r" values="9;11;9" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="72" cy="42" r="9" fill="#00D4FF" opacity="0.9">
        <animate attributeName="r" values="9;11;9" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="48" cy="42" r="5" fill="white" />
      <circle cx="72" cy="42" r="5" fill="white" />
      <circle cx="50" cy="40" r="2" fill={C.dark} />
      <circle cx="74" cy="40" r="2" fill={C.dark} />
      {/* Smile */}
      <path d="M44 54 Q60 62 76 54" stroke="#00D4FF" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Antenna */}
      <rect x="57" y="10" width="6" height="14" rx="3" fill={C.blue2} />
      <circle cx="60" cy="8" r="7" fill={C.gold}>
        <animate attributeName="opacity" values="1;0.4;1" dur="1.2s" repeatCount="indefinite" />
      </circle>
      {/* Name plate */}
      <rect x="38" y="76" width="44" height="18" rx="6" fill={C.dark} />
      <text x="60" y="89" textAnchor="middle" fill="#00D4FF" fontSize="11" fontWeight="bold" fontFamily="Tajawal">ذكيّ</text>
      {/* Arms */}
      <rect x="8"  y="66" width="22" height="10" rx="5" fill={C.blue2} />
      <circle cx="8"  cy="71" r="6" fill={C.blue} />
      <rect x="90" y="66" width="22" height="10" rx="5" fill={C.blue2} />
      <circle cx="112" cy="71" r="6" fill={C.blue} />
      {/* Finger pointing up on left arm */}
      <rect x="5" y="56" width="5" height="14" rx="2.5" fill="white" />
      {/* Legs */}
      <rect x="36" y="110" width="18" height="14" rx="5" fill={C.blue} />
      <rect x="66" y="110" width="18" height="14" rx="5" fill={C.blue} />
      <rect x="33" y="120" width="24" height="8" rx="4" fill={C.blue2} />
      <rect x="63" y="120" width="24" height="8" rx="4" fill={C.blue2} />
    </svg>
  );
}

function ZakiBoy({ size = 90 }) {
  return (
    <svg width={size} height={size * 1.1} viewBox="0 0 120 140">
      {/* Body / hoodie */}
      <rect x="22" y="72" width="76" height="54" rx="18" fill={C.blue2} />
      {/* Hoodie pocket */}
      <rect x="42" y="100" width="36" height="18" rx="8" fill={C.blue} opacity="0.5" />
      {/* زكي text on hoodie */}
      <text x="60" y="113" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Tajawal">زكيّ</text>
      {/* Neck */}
      <rect x="50" y="64" width="20" height="14" rx="6" fill="#FDBCB4" />
      {/* Head */}
      <circle cx="60" cy="48" r="30" fill="#FDBCB4" />
      {/* Hair */}
      <ellipse cx="60" cy="22" rx="28" ry="12" fill="#4A2C0A" />
      <ellipse cx="35" cy="32" rx="10" ry="14" fill="#4A2C0A" />
      <ellipse cx="85" cy="32" rx="10" ry="14" fill="#4A2C0A" />
      {/* Hair tufts */}
      <ellipse cx="50" cy="18" rx="8" ry="6" fill="#5C3710" />
      <ellipse cx="70" cy="18" rx="8" ry="6" fill="#5C3710" />
      <ellipse cx="60" cy="16" rx="6" ry="5" fill="#6B4423" />
      {/* Eyes */}
      <ellipse cx="47" cy="48" rx="7" ry="8" fill="white" />
      <ellipse cx="73" cy="48" rx="7" ry="8" fill="white" />
      <circle cx="47" cy="49" r="4.5" fill="#5C3710" />
      <circle cx="73" cy="49" r="4.5" fill="#5C3710" />
      <circle cx="48" cy="47" r="1.5" fill="white" />
      <circle cx="74" cy="47" r="1.5" fill="white" />
      {/* Eyebrows */}
      <path d="M41 39 Q47 36 53 39" stroke="#4A2C0A" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M67 39 Q73 36 79 39" stroke="#4A2C0A" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <ellipse cx="60" cy="55" rx="3" ry="2" fill="#F0A090" />
      {/* Smile */}
      <path d="M50 62 Q60 70 70 62" stroke="#E07060" strokeWidth="2" fill="#FF8A80" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="38" cy="56" r="7" fill="#FFB3A7" opacity="0.5" />
      <circle cx="82" cy="56" r="7" fill="#FFB3A7" opacity="0.5" />
      {/* Arms */}
      <rect x="2"  y="76" width="22" height="38" rx="11" fill={C.blue2} />
      <rect x="96" y="76" width="22" height="38" rx="11" fill={C.blue2} />
      {/* Hands */}
      <circle cx="13" cy="118" r="9" fill="#FDBCB4" />
      <circle cx="107" cy="118" r="9" fill="#FDBCB4" />
      {/* Pencil in right hand */}
      <rect x="102" y="96" width="5" height="28" rx="2" fill="#FFD700" transform="rotate(-15,107,110)" />
      <polygon points="107,124 102,130 112,130" fill="#FF6B35" transform="rotate(-15,107,124)" />
      {/* Legs */}
      <rect x="36" y="122" width="20" height="16" rx="8" fill="#1B3A8A" />
      <rect x="64" y="122" width="20" height="16" rx="8" fill="#1B3A8A" />
    </svg>
  );
}

function LightBulb({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60">
      <circle cx="30" cy="25" r="18" fill={C.gold} opacity="0.9">
        <animate attributeName="opacity" values="0.9;0.6;0.9" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <rect x="22" y="40" width="16" height="5" rx="2" fill={C.gold} />
      <rect x="24" y="46" width="12" height="4" rx="2" fill={C.gold} opacity="0.7" />
      {/* Rays */}
      {[0,45,90,135,180,225,270,315].map((a,i) => (
        <line key={i}
          x1={30 + 22*Math.cos(a*Math.PI/180)}
          y1={25 + 22*Math.sin(a*Math.PI/180)}
          x2={30 + 28*Math.cos(a*Math.PI/180)}
          y2={25 + 28*Math.sin(a*Math.PI/180)}
          stroke={C.gold} strokeWidth="2.5" strokeLinecap="round" opacity="0.6"
        />
      ))}
    </svg>
  );
}

/* ── DATA ────────────────────────────────────────── */

const LESSONS = [
  { id:"l1", icon:"🧠", title:"يفكّر ويحلّل", sub:"قبل أن يعتمد على AI", color:C.blue2, light:"#EEF2FF",
    story:"ذكيّ وزكيّ يعلّماك: فكّر أولاً بنفسك، ثم استخدم AI كمساعد! الذكاء الحقيقي هو تفكيرك أنت.",
    facts:[{i:"🧠",t:"فكّر في المشكلة قبل أن تسأل AI"},{i:"✏️",t:"اكتب أفكارك أولاً ثم استشر ذكيّ"},{i:"💡",t:"AI يساعدك لا يفكر بدلاً عنك"},{i:"🎯",t:"قرارك النهائي هو دائماً الأهم"}],
    quiz:{q:"متى تستخدم ذكيّ بشكل صحيح؟", opts:["بدلاً من التفكير","بعد التفكير كمساعد","دائماً بدون تفكير","فقط للألعاب"], correct:1}},
  { id:"l2", icon:"🎨", title:"يبدع ويبتكر", sub:"مشاريع وأنشطة ممتعة", color:C.green, light:"#EFFFF7",
    story:"زكيّ رسم فكرته أولاً في دفتره، ثم طلب من ذكيّ أن يساعده يطورها. النتيجة كانت مشروعاً إبداعياً رائعاً!",
    facts:[{i:"🎨",t:"إبداعك أصيل — AI يحاكي فقط"},{i:"🚀",t:"استخدم AI لتطوير أفكارك لا لسرقتها"},{i:"📝",t:"ابدأ بفكرتك ثم اطلب المساعدة"},{i:"🌟",t:"الإبداع الحقيقي يخرج منك أنت"}],
    quiz:{q:"كيف تستخدم AI في مشروع إبداعي؟", opts:["أطلب منه كل شيء","أبدأ بفكرتي وأطلب منه تطويرها","أنسخ ما يقوله","لا أستخدمه أبداً"], correct:1}},
  { id:"l3", icon:"🛡️", title:"يستخدم بأمان", sub:"في بيئة آمنة ومناسبة", color:C.blue, light:"#EEF4FF",
    story:"تعلّم زكيّ من ذكيّ: لا تشارك أبداً معلوماتك الشخصية مع AI. اسمك الكامل وعنوانك وصورك — كلها معلومات خاصة بك!",
    facts:[{i:"🚫",t:"لا تشارك اسمك الكامل أو عنوانك"},{i:"📸",t:"لا ترسل صورك الشخصية لـ AI"},{i:"👨‍👩‍👧",t:"أخبر والديك إذا شعرت بشيء غريب"},{i:"✅",t:"استخدم AI للتعلم فقط"}],
    quiz:{q:"ماذا تفعل إذا طلب AI معلوماتك الشخصية؟", opts:["أخبره بكل شيء","أرفض وأخبر والديّ فوراً","أعطيه معلومات خاطئة","أتجاهله"], correct:1}},
  { id:"l4", icon:"🤝", title:"يشارك ويتعاون", sub:"مع أصدقائه ومعلميه", color:C.gold, light:"#FFFBF0",
    story:"شارك زكيّ ما تعلّمه مع أصدقائه في المدرسة. عندما تعلّم شيئاً مفيداً — شاركه! التعلم يتضاعف عندما نتشاركه.",
    facts:[{i:"👥",t:"علّم أصدقاءك كيف يستخدمون AI بأمان"},{i:"👨‍🏫",t:"أخبر معلمك عن ما تعلمته"},{i:"💬",t:"ناقش مع عائلتك فوائد AI"},{i:"🌍",t:"كن سفيراً للتكنولوجيا الآمنة"}],
    quiz:{q:"ما أفضل طريقة لاستخدام AI في المدرسة؟", opts:["أنجز الواجبات كاملاً بـ AI","أتعلم وأشارك زملائي","أخفي استخدامي عن المعلم","لا أستخدمه في المدرسة"], correct:1}},
];

const CHALLENGES = [
  { id:1, emoji:"📚", title:"واجب الديناصورات", sit:"لديك واجب عن الديناصورات. كيف تسأل ذكيّ؟",
    opts:[{t:"اكتب لي الواجب كاملاً",s:0,f:"هذا غش! افهم المعلومات بنفسك 🚫"},{t:"واجب ديناصورات",s:0,f:"قصير جداً! وضّح أكثر 😅"},{t:"معلومات عن الديناصورات",s:1,f:"جيد لكن يمكن أن تكون أدق 👍"},{t:"اشرح لي ٣ حقائق عن الديناصورات بأسلوب بسيط لطفل ١٠ سنوات",s:3,f:"ممتاز! سؤال واضح ومفصّل 🌟"}]},
  { id:2, emoji:"🔒", title:"طلب غريب!", sit:"طلب شخص عبر AI عنوان بيتك 'لإرسال هدية'. ماذا تفعل؟",
    opts:[{t:"أخبره بالعنوان، هدايا!",s:0,f:"خطر! لا تشارك عنوانك أبداً 🚨"},{t:"أعطيه عنواناً خاطئاً",s:1,f:"أفضل، لكن الأصح إخبار والديك 🤔"},{t:"تجاهل وواصل",s:2,f:"جيد، لكن أخبر والديك أيضاً 👨‍👩‍👧"},{t:"أوقف وأخبر والديّ فوراً",s:3,f:"ممتاز! هذا هو القرار الصحيح تماماً 🛡️"}]},
  { id:3, emoji:"🌍", title:"معلومة خاطئة!", sit:"قال لك ذكيّ أن الشمس تدور حول الأرض. ماذا تفعل؟",
    opts:[{t:"أصدّقه فوراً",s:0,f:"AI يخطئ أحياناً! الأرض هي التي تدور 🌍"},{t:"أنشر المعلومة للأصدقاء",s:0,f:"خطأ! تحقق أولاً قبل النشر ❌"},{t:"أتحقق من كتابي أو معلمي",s:3,f:"رائع! دائماً تحقق من المعلومات 🌟"},{t:"أخبر ذكيّ أنه مخطئ وأتحقق",s:3,f:"ممتاز! يمكنك تصحيح AI 💪"}]},
];

const SYSTEM = `أنت "ذكيّ" — المساعد التعليمي لمنصة "ذكيّ وزكيّ" للأطفال.
شعارك: "فكّر أنت أولاً ثم أنا أساعدك!"
تعلّم الأطفال (٧-١٣ سنة) كيف يستخدمون AI بأمان وذكاء مع الحفاظ على تفكيرهم الإبداعي.
قواعد صارمة:
- ردود قصيرة وممتعة مع إيموجي مناسبة
- لا تطلب أي معلومات شخصية أبداً
- شجّع الطفل يفكر بنفسه أولاً
- إذا طُلب منك إنجاز واجب كاملاً — وجّه الطفل للتفكير بنفسه
- في نهاية كل رد اطرح سؤالاً يحفز التفكير النقدي`;

/* ═══════════════════════════════════════════════════
   MAIN APP
═══════════════════════════════════════════════════ */
export default function ZakiThakii() {
  const [screen, setScreen] = useState("splash");
  const [lesson, setLesson] = useState(null);
  const [step, setStep]     = useState(0);
  const [qAns, setQAns]     = useState(null);
  const [done, setDone]     = useState(new Set());
  const [stars, setStars]   = useState(0);
  const [cIdx, setCIdx]     = useState(0);
  const [cAns, setCAns]     = useState(null);
  const [cScore, setCScore] = useState(0);
  const [cDone, setCDone]   = useState(false);
  const [msgs, setMsgs]     = useState([]);
  const [inp, setInp]       = useState("");
  const [busy, setBusy]     = useState(false);
  const [party, setParty]   = useState(false);
  const endRef = useRef(null);

  useEffect(() => { setTimeout(() => setScreen("home"), 3000); }, []);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior:"smooth" }); }, [msgs]);

  const pop = () => { setParty(true); setTimeout(() => setParty(false), 2500); };

  const openLesson = (l) => { setLesson(l); setStep(0); setQAns(null); setScreen("lesson"); };

  const answerQ = (i) => {
    if (qAns !== null) return;
    setQAns(i);
    if (i === lesson.quiz.correct) { setStars(s=>s+2); setDone(d=>new Set([...d,lesson.id])); pop(); }
  };

  const startChal = () => { setCIdx(0); setCAns(null); setCScore(0); setCDone(false); setScreen("challenge"); };

  const answerC = (i) => {
    if (cAns !== null) return;
    setCAns(i);
    const sc = CHALLENGES[cIdx].opts[i].s;
    setCScore(s=>s+sc);
    if (sc===3) { setStars(s=>s+3); pop(); } else if (sc>0) setStars(s=>s+1);
    setTimeout(() => {
      if (cIdx+1 >= CHALLENGES.length) setCDone(true);
      else { setCIdx(c=>c+1); setCAns(null); }
    }, 1800);
  };

  const openChat = () => {
    setMsgs([{r:"ai", t:'أهلاً! أنا ذكيّ 🤖 وصديقي زكيّ 👦 تذكر شعارنا: "فكّر أنت أولاً ثم أنا أساعدك!" اسألني أي شيء تعليمي 💡'}]);
    setScreen("chat");
  };

  const send = async () => {
    if (!inp.trim() || busy) return;
    const m = inp.trim(); setInp("");
    setMsgs(p=>[...p,{r:"user",t:m}]); setBusy(true);
    try {
      const hist = msgs.map(x=>({role:x.r==="ai"?"assistant":"user", content:x.t}));
      const res = await fetch("https://api.anthropic.com/v1/messages",{
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:1000, system:SYSTEM,
          messages:[...hist,{role:"user",content:m}] }),
      });
      const data = await res.json();
      const reply = data.content?.find(b=>b.type==="text")?.text || "عذراً، جرب مرة أخرى! 🌈";
      setMsgs(p=>[...p,{r:"ai",t:reply}]); setStars(s=>s+1);
    } catch { setMsgs(p=>[...p,{r:"ai",t:"حدث خطأ، جرب مرة أخرى! 🔄"}]); }
    finally { setBusy(false); }
  };

  const allDone = done.size >= LESSONS.length;

  /* ── SPLASH ─────────────────────────────────── */
  if (screen === "splash") return (
    <div style={sp.wrap}>
      <div style={sp.bg} />
      <div style={sp.content}>
        <div style={sp.chars}>
          <div style={{animation:"floatL 2.5s ease-in-out infinite"}}><ThakiRobot size={100} /></div>
          <div style={sp.center}>
            <div style={sp.brand}>ذكيّ وزكيّ</div>
            <div style={sp.tagline}>منصة تعليم الذكاء الاصطناعي للأطفال</div>
            <div style={sp.dots}>{[0,1,2].map(i=><div key={i} style={{...sp.dot, animationDelay:`${i*0.3}s`}} />)}</div>
          </div>
          <div style={{animation:"floatR 2.5s ease-in-out infinite"}}><ZakiBoy size={100} /></div>
        </div>
        <div style={sp.motto}>
          <span style={sp.mottoBlue}>فكّر أنت أولاً</span>
          <span style={sp.mottoGold}> ثم أنا أساعدك!</span>
        </div>
      </div>
      <style>{`
        @keyframes floatL{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-14px) rotate(4deg)}}
        @keyframes floatR{0%,100%{transform:translateY(-8px) rotate(4deg)}50%{transform:translateY(8px) rotate(-4deg)}}
        @keyframes dotBounce{0%,100%{transform:scale(1);opacity:.4}50%{transform:scale(1.6);opacity:1}}
      `}</style>
    </div>
  );

  return (
    <div style={S.root}>
      {party && (
        <div style={S.partyOverlay}>
          <div style={S.partyBox}>
            <div style={{display:"flex",justifyContent:"center",gap:20,marginBottom:10}}>
              <ThakiRobot size={60} /><ZakiBoy size={60} />
            </div>
            <div style={S.partyMsg}>رائع جداً! 🌟</div>
            <div style={S.partySub}>+نجوم جديدة ⭐</div>
          </div>
        </div>
      )}

      {/* HEADER */}
      <header style={S.header}>
        <div style={{display:"flex",alignItems:"center",gap:10}}>
          {screen!=="home" && <button style={S.backBtn} onClick={()=>setScreen("home")}>← رجوع</button>}
          <div style={S.headerBrand}>
            <div style={{lineHeight:0}}><ThakiRobot size={38} /></div>
            <div>
              <div style={S.headerTitle}>ذكيّ وزكيّ</div>
              <div style={S.headerSub}>آمنة • ممتعة • تنمّي العقول</div>
            </div>
          </div>
        </div>
        <div style={S.starsChip}>⭐ {stars} نجمة</div>
      </header>

      {/* ══ HOME ══════════════════════════════════ */}
      {screen==="home" && (
        <main style={S.main}>

          {/* Hero Banner */}
          <div style={S.heroBanner}>
            <div style={S.heroLeft}>
              <div style={{lineHeight:0,animation:"floatL 3s ease-in-out infinite"}}><ThakiRobot size={110} /></div>
            </div>
            <div style={S.heroCenter}>
              <div style={S.heroMotto}>
                <div style={S.mottoLine1}>فكّر أنت أولاً</div>
                <div style={S.mottoLine2}>ثم أنا أساعدك!</div>
              </div>
              <p style={S.heroDesc}>نعلّم الأطفال كيف يستخدمون الذكاء الاصطناعي بذكاء... دون أن يفقدوا قدرتهم على التفكير والإبداع.</p>
              <div style={S.heroBadges}>
                <span style={S.heroBadge}>🛡️ آمنة</span>
                <span style={S.heroBadge}>🎮 ممتعة</span>
                <span style={S.heroBadge}>🧠 تنمّي العقول</span>
              </div>
            </div>
            <div style={S.heroRight}>
              <div style={{lineHeight:0,animation:"floatR 3s ease-in-out infinite"}}><ZakiBoy size={110} /></div>
              <div style={S.bulbFloat}><LightBulb size={50} /></div>
            </div>
          </div>

          {/* Progress */}
          <div style={S.progressCard}>
            <span style={S.progressLabel}>تقدّمك 📊</span>
            <div style={S.progressTrack}>
              <div style={{...S.progressFill, width:`${(done.size/LESSONS.length)*100}%`}} />
            </div>
            <span style={S.progressCount}>{done.size}/{LESSONS.length}</span>
          </div>

          {/* What your child learns */}
          <div style={S.sectionHead}>
            <span style={S.sectionIcon}>📚</span>
            <span>ماذا يتعلم طفلك معنا؟</span>
          </div>
          <div style={S.lessonsGrid}>
            {LESSONS.map(l=>(
              <button key={l.id} onClick={()=>openLesson(l)}
                style={{...S.lessonCard, borderColor: done.has(l.id)?l.color:"#DDE6F5", background: done.has(l.id)?l.light:"#FFF"}}>
                {done.has(l.id) && <span style={S.checkMark}>✅</span>}
                <span style={{fontSize:34}}>{l.icon}</span>
                <span style={{...S.lessonTitle2, color:l.color}}>{l.title}</span>
                <span style={S.lessonSub2}>{l.sub}</span>
              </button>
            ))}
          </div>

          {/* Who is it for */}
          <div style={S.sectionHead}>
            <span style={S.sectionIcon}>🎯</span>
            <span>مناسب لـ:</span>
          </div>
          <div style={S.forGrid}>
            <div style={S.forCard}>
              <span style={{fontSize:32}}>🏫</span>
              <div style={{...S.forTitle, color:C.blue2}}>المدارس</div>
              <div style={S.forSub}>مناهج وأنشطة جاهزة للحصة والأنشطة</div>
            </div>
            <div style={S.forCard}>
              <span style={{fontSize:32}}>👨‍👩‍👧</span>
              <div style={{...S.forTitle, color:C.green}}>الأولياء</div>
              <div style={S.forSub}>متابعة وتقارير ونصائح لدعم نمو الطفل</div>
            </div>
          </div>

         
           {/* Lesson 1 Button */}
<div style={{textAlign:"center", marginBottom:16}}>
  <button
    onClick={onStartLesson}
    style={{background:`linear-gradient(135deg,${C.gold},${C.green})`, border:"none", borderRadius:18, padding:"16px 40px", fontSize:18, fontWeight:800, color:"#fff", cursor:"pointer", width:"100%", boxShadow:"0 4px 20px rgba(0,0,0,0.15)"}}>
    <span style={{fontSize:28}}>🎓 </span>
    <span>ابدأ الدرس الأول — ما هو الذكاء الاصطناعي ؟</span>
  </button>
</div>

          <div style={S.actionsGrid}>
            <button style={{...S.actionBtn, background:`linear-gradient(135deg,${C.blue2},${C.dark})`}} onClick={startChal}>
              <span style={{fontSize:36}}>🎯</span>
              <span style={S.actionT}>تحديات زكيّ</span>
              <span style={S.actionS}>اتخذ القرار الصحيح</span>
            </button>
            <button style={{...S.actionBtn, background:`linear-gradient(135deg,${C.green},#00695C)`}} onClick={openChat}>
              <span style={{fontSize:36}}>💬</span>
              <span style={S.actionT}>تحدّث مع ذكيّ</span>
              <span style={S.actionS}>طبّق ما تعلمته</span>
            </button>
          </div>

          {allDone && (
            <button style={S.certBtn} onClick={()=>setScreen("cert")}>🏆 احصل على شهادتك الآن!</button>
          )}

          {/* Footer badges */}
          <div style={S.footerBadges}>
            {[["🛡️","بيئة آمنة","خصوصية وحماية"],["⏰","وقت متوازن","شاشة أقل وقيمة أكبر"],["🎓","محتوى تربوي","من خبراء التربية والتقنية"],["🏆","تحفيز ومكافآت","شارات وإنجازات"],["📊","تقارير ذكية","متابعة تقدم طفلك"]].map(([e,t,s],i)=>(
              <div key={i} style={S.footerBadge}>
                <span style={{fontSize:22}}>{e}</span>
                <div style={S.footerBadgeTitle}>{t}</div>
                <div style={S.footerBadgeSub}>{s}</div>
              </div>
            ))}
          </div>

          <div style={S.safeNote}>نوازن بين الذكاء الاصطناعي والذكاء الإنساني • لنصنع جيلاً مفكراً... مبدعاً... آمناً 🌟</div>
        </main>
      )}

      {/* ══ LESSON ════════════════════════════════ */}
      {screen==="lesson" && lesson && (
        <main style={S.main}>
          <div style={{...S.lessonHeader, background:lesson.light, borderColor:lesson.color}}>
            <span style={{fontSize:46}}>{lesson.icon}</span>
            <div>
              <div style={{...S.lhTitle, color:lesson.color}}>{lesson.title}</div>
              <div style={S.lhSub}>{lesson.sub}</div>
            </div>
          </div>

          {step===0 && (
            <div style={S.card}>
              <div style={S.storyRow}>
                <ZakiBoy size={65} />
                <div style={S.storyBubble}>{lesson.story}</div>
              </div>
              <div style={S.motto2}>
                <LightBulb size={28} />
                <span style={S.mottoText}>"فكّر أنت أولاً ثم أنا أساعدك!"</span>
              </div>
              <button style={{...S.nextBtn, background:lesson.color}} onClick={()=>setStep(1)}>التالي →</button>
            </div>
          )}

          {step===1 && (
            <div>
              <div style={S.factsGrid}>
                {lesson.facts.map((f,i)=>(
                  <div key={i} style={{...S.factCard, borderColor:lesson.color+"33"}}>
                    <span style={{fontSize:28}}>{f.i}</span>
                    <span style={S.factTxt}>{f.t}</span>
                  </div>
                ))}
              </div>
              <button style={{...S.nextBtn, background:lesson.color, marginTop:16}} onClick={()=>setStep(2)}>الاختبار →</button>
            </div>
          )}

          {step===2 && (
            <div style={S.card}>
              <div style={S.quizRow}>
                <ThakiRobot size={58} />
                <div style={{...S.quizBubble, borderColor:lesson.color}}>{lesson.quiz.q}</div>
              </div>
              <div style={S.quizOpts}>
                {lesson.quiz.opts.map((o,i)=>{
                  let bg="#F8F9FF", bc="#DDE6F5";
                  if (qAns!==null) {
                    if (i===lesson.quiz.correct){bg="#E8F5E9";bc="#4CAF50";}
                    else if (i===qAns){bg="#FFEBEE";bc="#EF5350";}
                  }
                  return <button key={i} style={{...S.quizOpt,background:bg,borderColor:bc}} onClick={()=>answerQ(i)} disabled={qAns!==null}>{o}</button>;
                })}
              </div>
              {qAns!==null && (
                <div style={{textAlign:"center",marginTop:16}}>
                  {qAns===lesson.quiz.correct
                    ? <div style={S.correctMsg}>🎉 ممتاز! +٢ نجمة</div>
                    : <div style={S.wrongMsg}>❌ راجع الدرس وحاول مرة أخرى!</div>}
                  <button style={{...S.nextBtn, background:lesson.color, marginTop:14}} onClick={()=>setScreen("home")}>🏠 الرئيسية</button>
                </div>
              )}
            </div>
          )}
        </main>
      )}

      {/* ══ CHALLENGE ═════════════════════════════ */}
      {screen==="challenge" && (
        <main style={S.main}>
          {!cDone ? (
            <>
              <div style={S.chalHeader}>
                <ZakiBoy size={55} />
                <div style={S.chalInfo}>
                  <div style={S.chalNum}>تحدي {cIdx+1} / {CHALLENGES.length}</div>
                  <div style={S.chalT}>{CHALLENGES[cIdx].title}</div>
                </div>
                <ThakiRobot size={55} />
              </div>
              <div style={S.chalCard}>
                <div style={S.chalEmoji}>{CHALLENGES[cIdx].emoji}</div>
                <div style={S.chalSit}>{CHALLENGES[cIdx].sit}</div>
                <div style={S.chalOpts}>
                  {CHALLENGES[cIdx].opts.map((o,i)=>{
                    let bg="#F8F9FF",bc="#DDE6F5",col="#333";
                    if (cAns===i){
                      if(o.s===3){bg="#E8F5E9";bc="#4CAF50";col="#2E7D32";}
                      else if(o.s>0){bg="#FFF8E1";bc="#FFC107";col="#E65100";}
                      else{bg="#FFEBEE";bc="#EF5350";col="#C62828";}
                    }
                    return (
                      <div key={i}>
                        <button style={{...S.chalOpt,background:bg,borderColor:bc,color:col}} onClick={()=>answerC(i)} disabled={cAns!==null}>{o.t}</button>
                        {cAns===i && <div style={{...S.feedback,color:col}}>{o.f}</div>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <div style={S.resultCard}>
              <div style={{display:"flex",justifyContent:"center",gap:20,marginBottom:14}}>
                <ThakiRobot size={72} /><ZakiBoy size={72} />
              </div>
              <div style={S.resultTitle}>{cScore>=8?"بطل ذكيّ! 🏆":cScore>=5?"جيد جداً! 💪":"واصل التعلم! 📚"}</div>
              <div style={S.resultScore}>{cScore} / 9 نقطة</div>
              <div style={S.resultBtns}>
                <button style={{...S.nextBtn, background:C.blue2}} onClick={startChal}>🔄 مجدداً</button>
                <button style={{...S.nextBtn, background:C.green}} onClick={openChat}>💬 تحدّث مع ذكيّ</button>
              </div>
            </div>
          )}
        </main>
      )}

      {/* ══ CHAT ══════════════════════════════════ */}
      {screen==="chat" && (
        <div style={S.chatWrap}>
          <div style={S.chatHint}>
            <ThakiRobot size={30} />
            <span style={{color:C.blue2, fontWeight:700, fontSize:13}}>"فكّر أنت أولاً ثم أنا أساعدك!" 🛡️ لا تشارك معلوماتك الشخصية</span>
          </div>
          <div style={S.chatMsgs}>
            {msgs.map((m,i)=>(
              <div key={i} style={{display:"flex", flexDirection:m.r==="user"?"row-reverse":"row", alignItems:"flex-end", gap:10}}>
                <div style={S.chatAvatar}>
                  {m.r==="ai" ? <ThakiRobot size={36} /> : <ZakiBoy size={36} />}
                </div>
                <div style={{...S.bubble, background:m.r==="ai"?"#FFF":C.blue2, color:m.r==="ai"?"#333":"#FFF", borderRadius:m.r==="ai"?"4px 18px 18px 18px":"18px 4px 18px 18px"}}>
                  {m.t}
                </div>
              </div>
            ))}
            {busy && (
              <div style={{display:"flex",gap:10,alignItems:"flex-end"}}>
                <div style={S.chatAvatar}><ThakiRobot size={36} /></div>
                <div style={S.loadDots}>
                  {[0,200,400].map((d,i)=><span key={i} style={{...S.dot,animationDelay:`${d}ms`}} />)}
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>
          <div style={S.chatBar}>
            <input style={S.chatInp} value={inp} onChange={e=>setInp(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} placeholder="اسأل ذكيّ... 💬" disabled={busy} maxLength={300} />
            <button style={{...S.sendBtn,opacity:busy||!inp.trim()?0.5:1}} onClick={send} disabled={busy||!inp.trim()}>🚀</button>
          </div>
        </div>
      )}

      {/* ══ CERTIFICATE ═══════════════════════════ */}
      {screen==="cert" && (
        <main style={S.main}>
          <div style={S.certCard}>
            <div style={{display:"flex",justifyContent:"center",gap:24,marginBottom:16}}>
              <ThakiRobot size={85} /><ZakiBoy size={85} />
            </div>
            <div style={S.certTitle}>🏆 شهادة إتمام</div>
            <div style={S.certSub}>منصة ذكيّ وزكيّ التعليمية</div>
            <div style={S.certBody}>
              <p>يُشهد بأن الطالب المتميز أتمّ بنجاح جميع دروس</p>
              <p style={{fontWeight:900, color:C.blue2, fontSize:18}}>"كيف أتعامل مع الذكاء الاصطناعي بأمان وذكاء"</p>
              <p>وحصل على {stars} نجمة ⭐</p>
            </div>
            <div style={S.certBadges}>
              {["🛡️ أمان AI","❓ أسئلة ذكية","🔍 تفكير نقدي","💡 وعي رقمي","🎨 إبداع"].map((b,i)=>(
                <span key={i} style={S.certBadge}>{b}</span>
              ))}
            </div>
            <div style={S.certMotto}>"فكّر أنت أولاً ثم أنا أساعدك!"</div>
            <button style={{...S.nextBtn, background:C.blue2, marginTop:20}} onClick={()=>setScreen("home")}>🏠 الرئيسية</button>
          </div>
        </main>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;600;700;800;900&display=swap');
        * { box-sizing:border-box; font-family:'Tajawal',sans-serif; }
        body { margin:0; }
        button { cursor:pointer; transition:all 0.2s; }
        button:hover { filter:brightness(0.94); transform:translateY(-1px); }
        button:active { transform:translateY(0); }
        @keyframes floatL{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-14px) rotate(4deg)}}
        @keyframes floatR{0%,100%{transform:translateY(-8px) rotate(4deg)}50%{transform:translateY(8px) rotate(-4deg)}}
        @keyframes pop{0%{transform:scale(0);opacity:0}80%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}
        @keyframes dotP{0%,100%{opacity:.3;transform:scale(1)}50%{opacity:1;transform:scale(1.5)}}
        @keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}
        @keyframes dotBounce{0%,100%{transform:scale(1);opacity:.4}50%{transform:scale(1.6);opacity:1}}
      `}</style>
    </div>
  );
}

/* ── Splash Styles ─────────────────────────────── */
const sp = {
  wrap:    { minHeight:"100vh", position:"relative", display:"flex", alignItems:"center", justifyContent:"center", direction:"rtl", overflow:"hidden" },
  bg:      { position:"absolute", inset:0, background:`linear-gradient(160deg, ${C.dark} 0%, ${C.blue2} 45%, ${C.green} 100%)` },
  content: { position:"relative", zIndex:1, textAlign:"center", padding:"20px" },
  chars:   { display:"flex", alignItems:"center", justifyContent:"center", gap:20, marginBottom:24 },
  center:  { textAlign:"center" },
  brand:   { fontSize:52, fontWeight:900, color:"white", textShadow:"0 4px 20px rgba(0,0,0,0.4)", lineHeight:1 },
  tagline: { fontSize:16, color:"rgba(255,255,255,0.85)", marginTop:6 },
  dots:    { display:"flex", justifyContent:"center", gap:8, marginTop:16 },
  dot:     { width:10, height:10, borderRadius:"50%", background:"white", animation:"dotBounce 1s ease-in-out infinite" },
  motto:   { fontSize:22, fontWeight:800, marginTop:10 },
  mottoBlue: { color:"white" },
  mottoGold: { color:C.gold },
};

/* ── App Styles ────────────────────────────────── */
const S = {
  root:         { minHeight:"100vh", background:`linear-gradient(160deg,${C.light} 0%,#E8FFF6 50%,${C.light} 100%)`, direction:"rtl" },
  partyOverlay: { position:"fixed", inset:0, background:"rgba(0,0,0,0.5)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:999 },
  partyBox:     { background:"#FFF", borderRadius:24, padding:"30px 48px", textAlign:"center", animation:"pop 0.35s ease", boxShadow:"0 20px 60px rgba(0,0,0,0.25)" },
  partyMsg:     { fontSize:26, fontWeight:900, color:C.blue2, marginTop:8 },
  partySub:     { fontSize:16, color:C.gold, marginTop:4 },
  header:       { display:"flex", alignItems:"center", justifyContent:"space-between", padding:"10px 16px", background:"rgba(255,255,255,0.92)", backdropFilter:"blur(14px)", boxShadow:`0 2px 18px rgba(27,58,138,0.1)`, position:"sticky", top:0, zIndex:50 },
  backBtn:      { background:C.light, border:"none", borderRadius:10, padding:"6px 14px", fontWeight:800, fontSize:14, fontFamily:"Tajawal", color:C.blue2, cursor:"pointer" },
  headerBrand:  { display:"flex", alignItems:"center", gap:10 },
  headerTitle:  { fontSize:20, fontWeight:900, color:C.blue2, lineHeight:1 },
  headerSub:    { fontSize:11, color:"#888" },
  starsChip:    { background:"#FFF9E0", border:`2px solid ${C.gold}`, borderRadius:20, padding:"5px 14px", fontWeight:800, color:"#B8860B", fontSize:15 },
  main:         { maxWidth:720, margin:"0 auto", padding:"18px 14px", animation:"fadeUp 0.4s ease" },
  // Hero
  heroBanner:   { background:`linear-gradient(135deg, ${C.dark} 0%, ${C.blue2} 60%, ${C.green} 100%)`, borderRadius:24, padding:"20px 16px", marginBottom:20, display:"flex", alignItems:"center", gap:8, position:"relative", overflow:"hidden" },
  heroLeft:     { flexShrink:0 },
  heroCenter:   { flex:1, textAlign:"center" },
  heroRight:    { flexShrink:0, position:"relative" },
  heroMotto:    { marginBottom:10 },
  mottoLine1:   { fontSize:22, fontWeight:900, color:"white", lineHeight:1.2 },
  mottoLine2:   { fontSize:18, fontWeight:800, color:C.gold },
  heroDesc:     { fontSize:13, color:"rgba(255,255,255,0.85)", lineHeight:1.7, margin:"8px 0" },
  heroBadges:   { display:"flex", flexWrap:"wrap", gap:6, justifyContent:"center" },
  heroBadge:    { background:"rgba(255,255,255,0.2)", color:"white", fontSize:12, fontWeight:700, padding:"4px 10px", borderRadius:12 },
  bulbFloat:    { position:"absolute", top:-10, right:-10, animation:"floatR 2s ease-in-out infinite" },
  // Progress
  progressCard: { display:"flex", alignItems:"center", gap:12, background:"white", borderRadius:14, padding:"12px 16px", marginBottom:20, boxShadow:"0 2px 12px rgba(27,58,138,0.07)" },
  progressLabel:{ fontWeight:700, color:C.text, fontSize:14, whiteSpace:"nowrap" },
  progressTrack:{ flex:1, height:10, background:"#E0E8F0", borderRadius:5, overflow:"hidden" },
  progressFill: { height:"100%", background:`linear-gradient(90deg,${C.blue2},${C.green})`, borderRadius:5, transition:"width 0.5s ease" },
  progressCount:{ fontWeight:800, color:C.blue2, fontSize:14, whiteSpace:"nowrap" },
  // Sections
  sectionHead:  { display:"flex", alignItems:"center", gap:8, fontSize:18, fontWeight:900, color:C.dark, margin:"0 0 12px" },
  sectionIcon:  { fontSize:20 },
  lessonsGrid:  { display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:20 },
  lessonCard:   { border:"3px solid", borderRadius:18, padding:"18px 14px", display:"flex", flexDirection:"column", alignItems:"center", gap:7, cursor:"pointer", background:"#FFF", boxShadow:"0 3px 12px rgba(0,0,0,0.05)", position:"relative" },
  checkMark:    { position:"absolute", top:10, left:10, fontSize:16 },
  lessonTitle2: { fontSize:15, fontWeight:800 },
  lessonSub2:   { fontSize:12, color:"#888", textAlign:"center" },
  forGrid:      { display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:20 },
  forCard:      { background:"white", borderRadius:16, padding:"18px 14px", textAlign:"center", boxShadow:"0 3px 12px rgba(0,0,0,0.05)" },
  forTitle:     { fontSize:16, fontWeight:800, marginTop:6 },
  forSub:       { fontSize:12, color:"#888", marginTop:4, lineHeight:1.5 },
  actionsGrid:  { display:"grid", gridTemplateColumns:"1fr 1fr", gap:14, marginBottom:18 },
  actionBtn:    { border:"none", borderRadius:18, padding:"20px 12px", color:"white", display:"flex", flexDirection:"column", alignItems:"center", gap:6, cursor:"pointer", boxShadow:"0 6px 20px rgba(0,0,0,0.15)" },
  actionT:      { fontSize:16, fontWeight:800 },
  actionS:      { fontSize:12, opacity:.85 },
  certBtn:      { width:"100%", background:`linear-gradient(135deg,${C.gold},#E67E00)`, border:"none", borderRadius:16, padding:"16px", fontSize:18, fontWeight:900, color:"white", cursor:"pointer", marginBottom:16, fontFamily:"Tajawal", boxShadow:`0 4px 16px rgba(245,166,35,0.4)` },
  footerBadges: { display:"flex", flexWrap:"wrap", gap:8, justifyContent:"center", marginBottom:12 },
  footerBadge:  { background:"white", borderRadius:12, padding:"10px 12px", textAlign:"center", boxShadow:"0 2px 8px rgba(0,0,0,0.06)", minWidth:90 },
  footerBadgeTitle:{ fontSize:12, fontWeight:800, color:C.blue2, marginTop:4 },
  footerBadgeSub:  { fontSize:10, color:"#888", marginTop:2 },
  safeNote:     { textAlign:"center", fontSize:12, color:"#888", background:"rgba(255,255,255,0.7)", borderRadius:10, padding:"10px 14px" },
  // Lesson
  lessonHeader: { display:"flex", alignItems:"center", gap:14, border:"3px solid", borderRadius:18, padding:"16px", marginBottom:18 },
  lhTitle:      { fontSize:22, fontWeight:900 },
  lhSub:        { fontSize:14, color:"#888" },
  card:         { background:"#FFF", borderRadius:20, padding:24, boxShadow:"0 4px 16px rgba(0,0,0,0.07)" },
  storyRow:     { display:"flex", alignItems:"flex-start", gap:14, marginBottom:16 },
  storyBubble:  { background:C.light, borderRadius:"4px 18px 18px 18px", padding:"14px 16px", fontSize:15, lineHeight:1.7, color:C.text, flex:1 },
  motto2:       { display:"flex", alignItems:"center", gap:8, background:`${C.gold}22`, borderRadius:12, padding:"10px 14px", marginBottom:18 },
  mottoText:    { fontSize:14, fontWeight:700, color:C.dark },
  nextBtn:      { border:"none", borderRadius:14, padding:"12px 28px", color:"white", fontSize:16, fontWeight:800, fontFamily:"Tajawal", cursor:"pointer", display:"inline-block" },
  factsGrid:    { display:"grid", gridTemplateColumns:"1fr 1fr", gap:12 },
  factCard:     { background:"#FFF", borderRadius:16, padding:"16px 14px", display:"flex", flexDirection:"column", gap:8, boxShadow:"0 3px 10px rgba(0,0,0,0.06)", border:"2px solid" },
  factTxt:      { fontSize:14, fontWeight:600, color:C.text, lineHeight:1.5 },
  quizRow:      { display:"flex", alignItems:"flex-start", gap:14, marginBottom:20 },
  quizBubble:   { background:C.light, borderRadius:"18px 4px 18px 18px", padding:"14px 16px", fontSize:16, fontWeight:700, color:C.blue2, flex:1, border:"2px solid" },
  quizOpts:     { display:"flex", flexDirection:"column", gap:10 },
  quizOpt:      { border:"2px solid", borderRadius:14, padding:"13px 16px", fontSize:14, fontWeight:600, fontFamily:"Tajawal", textAlign:"right", cursor:"pointer" },
  correctMsg:   { color:"#2E7D32", fontWeight:800, fontSize:18 },
  wrongMsg:     { color:"#C62828", fontWeight:700, fontSize:15 },
  // Challenge
  chalHeader:   { display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16 },
  chalInfo:     { textAlign:"center" },
  chalNum:      { fontSize:13, fontWeight:700, color:C.blue2 },
  chalT:        { fontSize:18, fontWeight:900, color:C.dark },
  chalCard:     { background:"#FFF", borderRadius:22, padding:24, boxShadow:"0 4px 16px rgba(0,0,0,0.07)" },
  chalEmoji:    { fontSize:50, textAlign:"center", marginBottom:10 },
  chalSit:      { fontSize:16, fontWeight:700, color:C.text, marginBottom:20, lineHeight:1.6, textAlign:"center" },
  chalOpts:     { display:"flex", flexDirection:"column", gap:10 },
  chalOpt:      { border:"2px solid", borderRadius:14, padding:"13px 16px", fontSize:14, fontWeight:600, fontFamily:"Tajawal", textAlign:"right", width:"100%" },
  feedback:     { fontSize:13, fontWeight:700, padding:"5px 14px" },
  resultCard:   { background:"#FFF", borderRadius:24, padding:36, textAlign:"center", boxShadow:"0 6px 24px rgba(0,0,0,0.1)" },
  resultTitle:  { fontSize:26, fontWeight:900, color:C.dark, marginTop:12 },
  resultScore:  { fontSize:18, color:"#888", margin:"8px 0 20px" },
  resultBtns:   { display:"flex", gap:12 },
  // Chat
  chatWrap:     { display:"flex", flexDirection:"column", height:"calc(100vh - 68px)" },
  chatHint:     { display:"flex", alignItems:"center", gap:10, background:C.light, padding:"8px 16px", borderBottom:`2px solid ${C.blue2}22` },
  chatMsgs:     { flex:1, overflowY:"auto", padding:"16px", display:"flex", flexDirection:"column", gap:14, maxWidth:720, width:"100%", margin:"0 auto" },
  chatAvatar:   { flexShrink:0, lineHeight:0 },
  bubble:       { maxWidth:"70%", padding:"12px 16px", boxShadow:"0 2px 8px rgba(0,0,0,0.07)", fontSize:15, lineHeight:1.7, fontWeight:500 },
  loadDots:     { background:"#FFF", borderRadius:"4px 18px 18px 18px", padding:"12px 18px", display:"flex", gap:6, alignItems:"center" },
  dot:          { width:8, height:8, borderRadius:"50%", background:C.blue2, display:"inline-block", animation:"dotP 1s ease-in-out infinite" },
  chatBar:      { display:"flex", gap:10, padding:"12px 14px", background:"rgba(255,255,255,0.95)", borderTop:`2px solid ${C.blue2}22`, maxWidth:720, width:"100%", margin:"0 auto" },
  chatInp:      { flex:1, border:"2px solid #DDE6F5", borderRadius:14, padding:"11px 14px", fontSize:15, fontFamily:"Tajawal", outline:"none", direction:"rtl", background:"#FAFBFF" },
  sendBtn:      { background:C.blue2, border:"none", borderRadius:14, padding:"0 18px", fontSize:22, cursor:"pointer" },
  // Certificate
  certCard:     { background:"#FFF", borderRadius:28, padding:36, textAlign:"center", boxShadow:`0 8px 32px rgba(27,58,138,0.15)`, border:`3px solid ${C.blue2}` },
  certTitle:    { fontSize:30, fontWeight:900, color:C.blue2, marginTop:8 },
  certSub:      { fontSize:15, color:"#888", marginBottom:20 },
  certBody:     { background:C.light, borderRadius:16, padding:"18px 20px", marginBottom:18, lineHeight:2, color:C.text, fontSize:15 },
  certBadges:   { display:"flex", flexWrap:"wrap", gap:8, justifyContent:"center", marginBottom:14 },
  certBadge:    { background:C.light, color:C.blue2, fontWeight:700, padding:"6px 14px", borderRadius:20, fontSize:13 },
  certMotto:    { fontSize:16, fontWeight:800, color:C.gold, fontStyle:"italic" },
};
