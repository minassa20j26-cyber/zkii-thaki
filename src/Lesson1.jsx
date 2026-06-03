import { useState } from "react";

const COLORS = {
  blue: "#1B3A8A",
  blue2: "#2356C8",
  green: "#22B573",
  gold: "#F5A623",
  light: "#EEF4FF",
  white: "#FFFFFF",
  dark: "#0D1F4E",
  text: "#2C3E6B",
};

const stars = ["⭐", "🌟", "✨"];

// ======= نشاط 1: صح أم خطأ =======
const quiz1 = [
  {
    q: "الذكاء الاصطناعي برنامج صنعه الإنسان.",
    answer: true,
  },
  {
    q: "الذكاء الاصطناعي يشعر بالحزن والفرح مثل الإنسان.",
    answer: false,
  },
  {
    q: "الذكاء الاصطناعي يتعلم من البيانات والأمثلة.",
    answer: true,
  },
];

// ======= نشاط 2: تصنيف =======
const cards = [
  { id: 1, label: "ChatGPT", isAI: true },
  { id: 2, label: "دراجة هوائية", isAI: false },
  { id: 3, label: "Canva الذكي", isAI: true },
  { id: 4, label: "قلم رصاص", isAI: false },
  { id: 5, label: "Siri", isAI: true },
  { id: 6, label: "كتاب ورقي", isAI: false },
];

export default function Lesson1() {
  const [step, setStep] = useState(0); // 0=intro, 1=quiz1, 2=activity2, 3=activity3, 4=result
  const [points, setPoints] = useState(0);
  const [q1Answers, setQ1Answers] = useState({});
  const [q1Done, setQ1Done] = useState(false);
  const [classified, setClassified] = useState({});
  const [act2Done, setAct2Done] = useState(false);
  const [openAnswer, setOpenAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // ---- نشاط 1 ----
  const handleQ1 = (idx, val) => {
    if (q1Done) return;
    const updated = { ...q1Answers, [idx]: val };
    setQ1Answers(updated);
    if (Object.keys(updated).length === quiz1.length) {
      let pts = 0;
      quiz1.forEach((q, i) => { if (updated[i] === q.answer) pts += 10; });
      setPoints((p) => p + pts);
      setQ1Done(true);
    }
  };

  // ---- نشاط 2 ----
  const handleClassify = (cardId, isAI) => {
    if (act2Done) return;
    const updated = { ...classified, [cardId]: isAI };
    setClassified(updated);
    if (Object.keys(updated).length === cards.length) {
      let pts = 0;
      cards.forEach((c) => { if (updated[c.id] === c.isAI) pts += 10; });
      setPoints((p) => p + pts);
      setAct2Done(true);
    }
  };

  // ---- نشاط 3 ----
  const handleSubmitOpen = () => {
    if (openAnswer.trim().length > 10) {
      setPoints((p) => p + 20);
      setSubmitted(true);
    }
  };

  const totalPossible = quiz1.length * 10 + cards.length * 10 + 20;
  const percent = Math.round((points / totalPossible) * 100);

  const s = {
    page: {
      minHeight: "100vh",
      background: `linear-gradient(135deg, ${COLORS.dark} 0%, ${COLORS.blue} 60%, ${COLORS.green} 100%)`,
      fontFamily: "'Tajawal', 'Cairo', Arial, sans-serif",
      direction: "rtl",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    card: {
      background: COLORS.white,
      borderRadius: 24,
      padding: "32px 28px",
      maxWidth: 680,
      width: "100%",
      boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
      marginTop: 12,
    },
    badge: {
      display: "inline-block",
      background: COLORS.gold,
      color: COLORS.dark,
      borderRadius: 20,
      padding: "4px 18px",
      fontWeight: 700,
      fontSize: 13,
      marginBottom: 12,
    },
    h1: {
      fontSize: 26,
      fontWeight: 800,
      color: COLORS.blue,
      marginBottom: 6,
    },
    h2: {
      fontSize: 20,
      fontWeight: 700,
      color: COLORS.blue2,
      marginBottom: 14,
    },
    p: {
      fontSize: 16,
      color: COLORS.text,
      lineHeight: 1.9,
      marginBottom: 12,
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: 20,
      fontSize: 14,
    },
    th: {
      background: COLORS.blue,
      color: COLORS.white,
      padding: "10px 14px",
      textAlign: "center",
    },
    td: {
      padding: "10px 14px",
      borderBottom: `1px solid ${COLORS.light}`,
      textAlign: "center",
      color: COLORS.text,
    },
    btn: {
      background: `linear-gradient(135deg, ${COLORS.blue2}, ${COLORS.green})`,
      color: COLORS.white,
      border: "none",
      borderRadius: 14,
      padding: "14px 32px",
      fontSize: 16,
      fontWeight: 700,
      cursor: "pointer",
      marginTop: 16,
      width: "100%",
    },
    btnSmall: (active, correct) => ({
      border: `2px solid ${active ? (correct ? COLORS.green : "#e74c3c") : COLORS.blue2}`,
      background: active ? (correct ? "#e8faf2" : "#fdecea") : COLORS.light,
      color: active ? (correct ? COLORS.green : "#e74c3c") : COLORS.blue2,
      borderRadius: 10,
      padding: "10px 24px",
      fontSize: 15,
      fontWeight: 700,
      cursor: "pointer",
      margin: "0 6px",
      transition: "all 0.2s",
    }),
    pointsBadge: {
      position: "fixed",
      top: 20,
      left: 20,
      background: COLORS.gold,
      color: COLORS.dark,
      borderRadius: 20,
      padding: "8px 18px",
      fontWeight: 800,
      fontSize: 15,
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      zIndex: 100,
    },
    stepIndicator: {
      display: "flex",
      gap: 8,
      justifyContent: "center",
      marginBottom: 20,
    },
    dot: (active, done) => ({
      width: 12,
      height: 12,
      borderRadius: "50%",
      background: done ? COLORS.green : active ? COLORS.gold : "#ddd",
      transition: "background 0.3s",
    }),
    classifyArea: {
      display: "flex",
      gap: 16,
      marginBottom: 20,
      flexWrap: "wrap",
    },
    dropZone: (isAI) => ({
      flex: 1,
      minWidth: 140,
      background: isAI ? "#e8faf2" : "#fdecea",
      border: `2px dashed ${isAI ? COLORS.green : "#e74c3c"}`,
      borderRadius: 16,
      padding: 16,
      minHeight: 100,
      textAlign: "center",
    }),
    cardChip: (cardId, isAI) => {
      const placed = classified[cardId] !== undefined;
      const correct = classified[cardId] === isAI;
      return {
        display: "inline-block",
        background: placed ? (correct ? "#e8faf2" : "#fdecea") : COLORS.light,
        border: `1.5px solid ${placed ? (correct ? COLORS.green : "#e74c3c") : COLORS.blue2}`,
        borderRadius: 10,
        padding: "8px 14px",
        margin: "4px",
        fontSize: 13,
        fontWeight: 700,
        color: COLORS.blue,
        cursor: placed ? "default" : "pointer",
      };
    },
  };

  const steps = ["مقدمة", "نشاط 1", "نشاط 2", "نشاط 3", "النتيجة"];

  return (
    <div style={s.page}>
      {/* نقاط ثابتة */}
      <div style={s.pointsBadge}>⭐ {points} نقطة</div>

      {/* مؤشر الخطوات */}
      <div style={{ maxWidth: 680, width: "100%", marginBottom: 8 }}>
        <div style={s.stepIndicator}>
          {steps.map((st, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={s.dot(i === step, i < step)} />
              <div style={{ fontSize: 10, color: "#fff", marginTop: 4, opacity: i === step ? 1 : 0.6 }}>{st}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={s.card}>

        {/* ======= STEP 0: مقدمة ======= */}
        {step === 0 && (
          <>
            <div style={s.badge}>المرحلة 1 — الدرس 1</div>
            <div style={s.h1}>🧠 ما هو الذكاء الاصطناعي ؟</div>
            <p style={s.p}>
              الذكاء الاصطناعي هو <strong>برنامج حاسوبي صنعه الإنسان</strong> — يتعلم من البيانات والأمثلة لكي يساعد الناس في حل المشكلات، والإجابة عن الأسئلة، وإنجاز المهام المختلفة.
            </p>

            <div style={s.h2}>🌍 أمثلة من حياتك اليومية</div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 20 }}>
              {[
                { icon: "🤖", name: "ChatGPT", desc: "يجيب على أسئلتك" },
                { icon: "🎨", name: "Canva الذكي", desc: "يصمم لك بالذكاء" },
                { icon: "💻", name: "Scratch", desc: "يعلمك البرمجة" },
              ].map((ex) => (
                <div key={ex.name} style={{ flex: 1, minWidth: 140, background: COLORS.light, borderRadius: 14, padding: 14, textAlign: "center" }}>
                  <div style={{ fontSize: 28 }}>{ex.icon}</div>
                  <div style={{ fontWeight: 700, color: COLORS.blue, fontSize: 14 }}>{ex.name}</div>
                  <div style={{ fontSize: 12, color: COLORS.text }}>{ex.desc}</div>
                </div>
              ))}
            </div>

            <div style={s.h2}>⚖️ الذكاء الاصطناعي vs الذكاء البشري</div>
            <table style={s.table}>
              <thead>
                <tr>
                  <th style={s.th}>🤖 الذكاء الاصطناعي</th>
                  <th style={s.th}>👨 الذكاء البشري</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["لا يشعر بأي مشاعر", "يحس ويشعر ويتعاطف"],
                  ["يتعلم من البيانات فقط", "يتعلم من التجربة والحياة"],
                  ["قد يخطئ إذا كانت المعلومات ناقصة", "يفكر حتى بمعلومات ناقصة"],
                  ["لا يتحمل المسؤولية", "يتحمل مسؤولية أفعاله"],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? COLORS.light : COLORS.white }}>
                    <td style={s.td}>{row[0]}</td>
                    <td style={s.td}>{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ background: "#fffbe6", border: `2px solid ${COLORS.gold}`, borderRadius: 14, padding: 16, marginBottom: 16 }}>
              <strong>💡 تذكر دائماً :</strong> الذكاء الاصطناعي أداة صنعها الإنسان — المسؤولية دائماً على الإنسان الذي يستخدمه.
            </div>

            <button style={s.btn} onClick={() => setStep(1)}>
              🎯 ابدأ النشاط الأول ←
            </button>
          </>
        )}

        {/* ======= STEP 1: صح أم خطأ ======= */}
        {step === 1 && (
          <>
            <div style={s.badge}>نشاط 1 من 3</div>
            <div style={s.h1}>✅ صح أم خطأ ؟</div>
            <p style={s.p}>اقرأ كل جملة واختر الإجابة الصحيحة — كل إجابة صحيحة = 10 نقاط</p>

            {quiz1.map((q, idx) => {
              const answered = q1Answers[idx] !== undefined;
              const isCorrect = q1Answers[idx] === q.answer;
              return (
                <div key={idx} style={{ background: answered ? (isCorrect ? "#e8faf2" : "#fdecea") : COLORS.light, borderRadius: 14, padding: 16, marginBottom: 14 }}>
                  <p style={{ fontWeight: 700, color: COLORS.blue, marginBottom: 10 }}>{idx + 1}. {q.q}</p>
                  <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
                    <button style={s.btnSmall(answered && q1Answers[idx] === true, q.answer === true)} onClick={() => handleQ1(idx, true)}>✅ صح</button>
                    <button style={s.btnSmall(answered && q1Answers[idx] === false, q.answer === false)} onClick={() => handleQ1(idx, false)}>❌ خطأ</button>
                  </div>
                  {answered && (
                    <p style={{ textAlign: "center", color: isCorrect ? COLORS.green : "#e74c3c", fontWeight: 700, marginTop: 8 }}>
                      {isCorrect ? "🎉 ممتاز ! إجابة صحيحة" : `❌ خطأ — الإجابة الصحيحة : ${q.answer ? "صح" : "خطأ"}`}
                    </p>
                  )}
                </div>
              );
            })}

            {q1Done && (
              <button style={s.btn} onClick={() => setStep(2)}>
                🎮 النشاط التالي ←
              </button>
            )}
          </>
        )}

        {/* ======= STEP 2: تصنيف ======= */}
        {step === 2 && (
          <>
            <div style={s.badge}>نشاط 2 من 3</div>
            <div style={s.h1}>🎮 صنّف هذه البطاقات !</div>
            <p style={s.p}>اضغط على كل بطاقة واختر : هل هي ذكاء اصطناعي أم لا ؟ — كل إجابة صحيحة = 10 نقاط</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24, justifyContent: "center" }}>
              {cards.map((c) => (
                <div key={c.id} style={{ textAlign: "center" }}>
                  <div style={s.cardChip(c.id, c.isAI)}>{c.label}</div>
                  {classified[c.id] === undefined && (
                    <div style={{ display: "flex", gap: 6, marginTop: 4, justifyContent: "center" }}>
                      <button
                        onClick={() => handleClassify(c.id, true)}
                        style={{ background: "#e8faf2", border: `1.5px solid ${COLORS.green}`, borderRadius: 8, padding: "4px 10px", fontSize: 12, cursor: "pointer", color: COLORS.green, fontWeight: 700 }}
                      >🤖 ذكاء اصطناعي</button>
                      <button
                        onClick={() => handleClassify(c.id, false)}
                        style={{ background: "#fdecea", border: "1.5px solid #e74c3c", borderRadius: 8, padding: "4px 10px", fontSize: 12, cursor: "pointer", color: "#e74c3c", fontWeight: 700 }}
                      >❌ ليس ذكاء اصطناعي</button>
                    </div>
                  )}
                  {classified[c.id] !== undefined && (
                    <div style={{ fontSize: 12, marginTop: 4, color: classified[c.id] === c.isAI ? COLORS.green : "#e74c3c", fontWeight: 700 }}>
                      {classified[c.id] === c.isAI ? "✅ صحيح" : "❌ خطأ"}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {act2Done && (
              <button style={s.btn} onClick={() => setStep(3)}>
                💬 النشاط الأخير ←
              </button>
            )}
          </>
        )}

        {/* ======= STEP 3: سؤال مفتوح ======= */}
        {step === 3 && (
          <>
            <div style={s.badge}>نشاط 3 من 3</div>
            <div style={s.h1}>💬 فكّر وأجب !</div>
            <div style={{ background: "#fffbe6", border: `2px solid ${COLORS.gold}`, borderRadius: 14, padding: 16, marginBottom: 20 }}>
              <p style={{ fontWeight: 700, color: COLORS.dark, fontSize: 17, margin: 0 }}>
                "إذا أخطأ الذكاء الاصطناعي وأعطى معلومة خاطئة — من المسؤول ؟ ولماذا ؟"
              </p>
            </div>
            <p style={s.p}>اكتب إجابتك بكلماتك الخاصة — لا توجد إجابة خاطئة ! ✍️</p>
            <textarea
              value={openAnswer}
              onChange={(e) => setOpenAnswer(e.target.value)}
              disabled={submitted}
              placeholder="اكتب إجابتك هنا..."
              style={{
                width: "100%",
                minHeight: 120,
                borderRadius: 14,
                border: `2px solid ${COLORS.blue2}`,
                padding: 14,
                fontSize: 15,
                fontFamily: "'Tajawal', Arial, sans-serif",
                direction: "rtl",
                resize: "vertical",
                outline: "none",
                boxSizing: "border-box",
              }}
            />
            {!submitted ? (
              <button style={{ ...s.btn, opacity: openAnswer.trim().length > 10 ? 1 : 0.5 }} onClick={handleSubmitOpen}>
                ✅ إرسال الإجابة (+20 نقطة)
              </button>
            ) : (
              <>
                <div style={{ background: "#e8faf2", border: `2px solid ${COLORS.green}`, borderRadius: 14, padding: 14, marginTop: 14, textAlign: "center" }}>
                  <p style={{ color: COLORS.green, fontWeight: 700, margin: 0 }}>🎉 رائع ! لقد أجبت بشجاعة — +20 نقطة !</p>
                  <p style={{ color: COLORS.text, fontSize: 14, marginTop: 8 }}>
                    💡 <strong>الإجابة الصحيحة :</strong> المسؤولية على الإنسان الذي يستخدم الذكاء الاصطناعي — لأنه هو من يقرر كيف يستخدمه ويتحقق من نتائجه.
                  </p>
                </div>
                <button style={s.btn} onClick={() => setStep(4)}>
                  🏆 رؤية النتيجة النهائية ←
                </button>
              </>
            )}
          </>
        )}

        {/* ======= STEP 4: النتيجة ======= */}
        {step === 4 && (
          <>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 64, marginBottom: 12 }}>
                {percent >= 80 ? "🏆" : percent >= 60 ? "🌟" : "💪"}
              </div>
              <div style={s.h1}>
                {percent >= 80 ? "ممتاز ! أنت نجم !" : percent >= 60 ? "جيد جداً ! استمر !" : "لا بأس ! حاول مرة أخرى !"}
              </div>
              <div style={{ fontSize: 48, fontWeight: 800, color: COLORS.gold, margin: "16px 0" }}>
                {points} / {totalPossible}
              </div>
              <div style={{ background: COLORS.light, borderRadius: 20, overflow: "hidden", height: 20, marginBottom: 20 }}>
                <div style={{ height: "100%", width: `${percent}%`, background: `linear-gradient(90deg, ${COLORS.blue2}, ${COLORS.green})`, transition: "width 1s ease", borderRadius: 20 }} />
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 20 }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ fontSize: 28, opacity: i < Math.round(percent / 20) ? 1 : 0.2 }}>⭐</span>
                ))}
              </div>
              <div style={{ background: "#e8faf2", border: `2px solid ${COLORS.green}`, borderRadius: 14, padding: 16, marginBottom: 20 }}>
                <p style={{ color: COLORS.green, fontWeight: 700, margin: 0 }}>✅ لقد أتممت الدرس الأول بنجاح !</p>
                <p style={{ color: COLORS.text, fontSize: 14, marginTop: 8, margin: "8px 0 0" }}>
                  الدرس القادم : <strong>كيف يتعلم الذكاء الاصطناعي ؟</strong>
                </p>
              </div>
              <button style={s.btn} onClick={() => { setStep(0); setPoints(0); setQ1Answers({}); setQ1Done(false); setClassified({}); setAct2Done(false); setOpenAnswer(""); setSubmitted(false); }}>
                🔄 إعادة الدرس
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
