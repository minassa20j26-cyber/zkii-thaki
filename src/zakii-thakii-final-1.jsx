import { useState } from "react";

// ─── بيانات الدروس السبعة ───────────────────────────────────────────────────
const LESSONS = [
  {
    id: 1,
    stage: 1,
    title: "ما هو الذكاء الاصطناعي؟",
    emoji: "🤖",
    color: "#7C3AED",
    description: "اكتشف ما هو الذكاء الاصطناعي وكيف يعمل!",
    content:
      "الذكاء الاصطناعي هو تقنية تتيح للحواسيب التعلم واتخاذ القرارات مثل البشر. المساعدون الصوتيون، توصيات الفيديو، التعرف على الوجوه — كل هذا ذكاء اصطناعي! 🎉",
    quiz: {
      question: "هل يستطيع الذكاء الاصطناعي التعلم بمفرده؟",
      options: ["نعم، باستخدام البيانات", "لا، أبداً", "فقط إذا أخبرناه بكل شيء"],
      answer: 0,
    },
  },
  {
    id: 2,
    stage: 2,
    title: "البيانات",
    emoji: "📊",
    color: "#059669",
    description: "افهم لماذا البيانات هي غذاء الذكاء الاصطناعي!",
    content:
      "البيانات هي المعلومات التي يستخدمها الذكاء الاصطناعي للتعلم. كلما زادت البيانات، كلما أصبح أذكى! تخيل أنك تريد تعلم التعرف على القطط: تحتاج إلى رؤية آلاف صور القطط. 🐱",
    quiz: {
      question: "لماذا يحتاج الذكاء الاصطناعي إلى البيانات؟",
      options: ["للزينة فقط", "للتعلم والتحسن", "للعب"],
      answer: 1,
    },
  },
  {
    id: 3,
    stage: 3,
    title: "الخوارزميات",
    emoji: "⚙️",
    color: "#D97706",
    description: "تعلم كيف يتخذ الذكاء الاصطناعي قراراته خطوة بخطوة!",
    content:
      "الخوارزمية هي سلسلة من التعليمات الدقيقة، مثل وصفة الطبخ! يتبع الذكاء الاصطناعي الخوارزميات لتحليل البيانات وإيجاد الأنماط. إنه مثل المحقق الذي يبحث عن الأدلة. 🔍",
    quiz: {
      question: "بماذا تشبه الخوارزمية؟",
      options: ["رسمة", "وصفة تعليمات", "لعبة فيديو"],
      answer: 1,
    },
  },
  {
    id: 4,
    stage: 4,
    title: "التعلم الآلي",
    emoji: "🧠",
    color: "#DC2626",
    description: "اكتشف كيف يتحسن الذكاء الاصطناعي بالخبرة!",
    content:
      "التعلم الآلي يسمح للذكاء الاصطناعي بالتحسن وحده من خلال التدريب على الأمثلة. مثلك تماماً عندما تتدرب على رياضة — كلما مارست أكثر، كلما أصبحت أقوى! 💪",
    quiz: {
      question: "ماذا يتيح التعلم الآلي للذكاء الاصطناعي؟",
      options: ["التحسن بالتدريب", "تذكر كل شيء", "التحدث بكل اللغات"],
      answer: 0,
    },
  },
  {
    id: 5,
    stage: 5,
    title: "الشبكات العصبية",
    emoji: "🕸️",
    color: "#2563EB",
    description: "استكشف الدماغ الاصطناعي المستوحى من الدماغ البشري!",
    content:
      "الشبكات العصبية الاصطناعية مستوحاة من الدماغ البشري. تتكون من عقد (خلايا عصبية) مترابطة. يمكن لهذه الشبكات التعرف على الصور، وترجمة النصوص، وحتى إنشاء الموسيقى! 🎵",
    quiz: {
      question: "من أين استُلهمت الشبكات العصبية؟",
      options: ["من النجوم", "من الدماغ البشري", "من النمل"],
      answer: 1,
    },
  },
  {
    id: 6,
    stage: 6,
    title: "الذكاء الاصطناعي في حياتنا",
    emoji: "🌍",
    color: "#0891B2",
    description: "اكتشف كل الطرق التي يساعدك بها الذكاء الاصطناعي كل يوم!",
    content:
      "الذكاء الاصطناعي موجود في كل مكان حولك! نتفليكس يوصي لك بالأفلام، خرائط جوجل تجد أفضل طريق، الأطباء يستخدمونه لاكتشاف الأمراض. الذكاء الاصطناعي يساعدنا في حل المشكلات المعقدة! 🏥",
    quiz: {
      question: "أي من هذه التطبيقات يستخدم الذكاء الاصطناعي؟",
      options: ["آلة حاسبة بسيطة", "نتفليكس (التوصيات)", "دفتر ملاحظات"],
      answer: 1,
    },
  },
  {
    id: 7,
    stage: 7,
    title: "أخلاقيات الذكاء الاصطناعي",
    emoji: "⚖️",
    color: "#7C3AED",
    description: "فكر في كيفية استخدام الذكاء الاصطناعي بعدالة ومسؤولية!",
    content:
      "الذكاء الاصطناعي قوي جداً، لكن يجب استخدامه بعدالة ومسؤولية. يجب تجنب التحيز، وحماية الخصوصية، والتأكد من أن الذكاء الاصطناعي يساعد الجميع بالتساوي. أنت أيضاً يمكنك المساهمة في ذكاء اصطناعي أخلاقي! ✨",
    quiz: {
      question: "لماذا تعتبر الأخلاقيات مهمة في الذكاء الاصطناعي؟",
      options: ["لجعله أسرع", "لجعله عادلاً وآمناً للجميع", "لجعله أجمل"],
      answer: 1,
    },
  },
];

function StarRating({ count }) {
  return (
    <div style={{ display: "flex", gap: 4, justifyContent: "flex-end" }}>
      {[3, 2, 1].map((s) => (
        <span key={s} style={{ fontSize: 22, color: s <= count ? "#FBBF24" : "#E5E7EB" }}>★</span>
      ))}
    </div>
  );
}

function ProgressBar({ value, max, color }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div style={{ background: "rgba(255,255,255,0.3)", borderRadius: 999, height: 14, overflow: "hidden" }}>
      <div style={{ width: pct + "%", height: "100%", background: color, borderRadius: 999, transition: "width 0.7s ease" }} />
    </div>
  );
}

function LessonModal({ lesson, onClose, onComplete }) {
  const [step, setStep] = useState("learn");
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  function handleAnswer(idx) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
  }

  function handleFinish() {
    const correct = selected === lesson.quiz.answer;
    onComplete(lesson.stage, correct);
  }

  const isCorrect = selected === lesson.quiz.answer;

  return (
    <div
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.65)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: 16 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{ background: "#FFFFFF", borderRadius: 24, width: "100%", maxWidth: 520, overflow: "hidden", boxShadow: "0 25px 80px rgba(0,0,0,0.4)", direction: "rtl" }}>
        <div style={{ background: lesson.color, padding: "24px 28px", display: "flex", alignItems: "center", gap: 16 }}>
          <button
            onClick={onClose}
            style={{ background: "rgba(255,255,255,0.2)", border: "none", borderRadius: "50%", width: 36, height: 36, cursor: "pointer", color: "#FFF", fontSize: 22, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
          >×</button>
          <div style={{ flex: 1 }}>
            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 600 }}>المرحلة {lesson.stage} من 7</div>
            <div style={{ color: "#FFF", fontSize: 20, fontWeight: 700 }}>{lesson.title}</div>
          </div>
          <span style={{ fontSize: 44 }}>{lesson.emoji}</span>
        </div>

        <div style={{ padding: "28px" }}>
          {step === "learn" ? (
            <>
              <p style={{ fontSize: 16, lineHeight: 2, color: "#374151", margin: "0 0 28px", textAlign: "right" }}>{lesson.content}</p>
              <button
                onClick={() => setStep("quiz")}
                style={{ width: "100%", padding: "14px 24px", background: lesson.color, color: "#FFF", border: "none", borderRadius: 14, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}
              >ابدأ الاختبار ←</button>
            </>
          ) : (
            <>
              <p style={{ fontSize: 16, fontWeight: 700, color: "#111827", margin: "0 0 20px", textAlign: "right" }}>{lesson.quiz.question}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                {lesson.quiz.options.map((opt, idx) => {
                  let bg = "#F9FAFB";
                  let border = "2px solid #E5E7EB";
                  if (answered) {
                    if (idx === lesson.quiz.answer) { bg = "#D1FAE5"; border = "2px solid #059669"; }
                    else if (idx === selected) { bg = "#FEE2E2"; border = "2px solid #DC2626"; }
                  }
                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      style={{ padding: "14px 18px", background: bg, border, borderRadius: 12, fontSize: 15, textAlign: "right", cursor: answered ? "default" : "pointer", color: "#111827", fontFamily: "inherit" }}
                    >{opt}</button>
                  );
                })}
              </div>
              {answered && (
                <>
                  <div style={{ padding: "14px 18px", borderRadius: 12, background: isCorrect ? "#D1FAE5" : "#FEF3C7", color: isCorrect ? "#065F46" : "#92400E", fontSize: 15, fontWeight: 700, marginBottom: 16, textAlign: "right" }}>
                    {isCorrect ? "🎉 أحسنت! إجابة صحيحة تماماً!" : "🤔 ليس تماماً — لكنك تتعلم، وهذا هو الأهم!"}
                  </div>
                  <button
                    onClick={handleFinish}
                    style={{ width: "100%", padding: "14px 24px", background: lesson.color, color: "#FFF", border: "none", borderRadius: 14, fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}
                  >إنهاء الدرس ✓</button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ZakiiThakii() {
  const [completedLessons, setCompletedLessons] = useState({});
  const [stars, setStars] = useState({});
  const [activeLesson, setActiveLesson] = useState(null);

  const totalCompleted = Object.keys(completedLessons).length;
  const totalStars = Object.values(stars).reduce((a, b) => a + b, 0);

  function isUnlocked(lesson) {
    if (lesson.stage === 1) return true;
    return Boolean(completedLessons[lesson.stage - 1]);
  }

  function handleOpenLesson(lesson) {
    if (!isUnlocked(lesson)) return;
    setActiveLesson(lesson);
  }

  function handleComplete(stage, correct) {
    setCompletedLessons((prev) => ({ ...prev, [stage]: true }));
    setStars((prev) => ({ ...prev, [stage]: correct ? 3 : 2 }));
    setActiveLesson(null);
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #A855F7 100%)", fontFamily: "'Segoe UI', Tahoma, Arial, sans-serif", paddingBottom: 60, direction: "rtl" }}>

      {/* الرأس */}
      <div style={{ background: "rgba(0,0,0,0.2)", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(8px)" }}>
        <div>
          <div style={{ color: "#FFF", fontSize: 28, fontWeight: 800 }}>🤖 زكي وذكي</div>
          <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>تعلّم الذكاء الاصطناعي وأنت تلعب!</div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: 16, padding: "10px 18px", textAlign: "center" }}>
          <div style={{ color: "#FBBF24", fontSize: 24, fontWeight: 800 }}>⭐ {totalStars}</div>
          <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 12 }}>نجوم</div>
        </div>
      </div>

      {/* شريط التقدم */}
      <div style={{ margin: "24px 20px 0", background: "rgba(255,255,255,0.15)", borderRadius: 20, padding: "20px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "#FFF", marginBottom: 12 }}>
          <span style={{ fontWeight: 600, fontSize: 15 }}>{totalCompleted} / {LESSONS.length} دروس</span>
          <span style={{ fontWeight: 700, fontSize: 16 }}>مسار التعلم</span>
        </div>
        <ProgressBar value={totalCompleted} max={LESSONS.length} color="#FBBF24" />
        {totalCompleted === LESSONS.length && (
          <div style={{ marginTop: 18, textAlign: "center", color: "#FFF", fontSize: 20, fontWeight: 800 }}>
            🏆 تهانينا! أنت خبير في الذكاء الاصطناعي!
          </div>
        )}
      </div>

      {/* شبكة الدروس */}
      <div style={{ padding: "24px 20px 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
        {LESSONS.map((lesson) => {
          const unlocked = isUnlocked(lesson);
          const completed = Boolean(completedLessons[lesson.stage]);
          const lessonStars = stars[lesson.stage] || 0;

          return (
            <div
              key={lesson.id}
              style={{ background: "#FFFFFF", borderRadius: 20, overflow: "hidden", border: completed ? "3px solid " + lesson.color : "3px solid transparent", boxShadow: completed ? "0 6px 24px " + lesson.color + "50" : "0 4px 16px rgba(0,0,0,0.15)", opacity: unlocked ? 1 : 0.55 }}
            >
              <div style={{ background: lesson.color, padding: "18px 20px", display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 38 }}>{lesson.emoji}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, fontWeight: 600, marginBottom: 2 }}>المرحلة {lesson.stage}</div>
                  <div style={{ color: "#FFF", fontSize: 17, fontWeight: 700 }}>{lesson.title}</div>
                </div>
                {completed && (
                  <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: "#FFF", fontWeight: 700, flexShrink: 0 }}>✓</div>
                )}
                {!unlocked && <span style={{ fontSize: 22, flexShrink: 0 }}>🔒</span>}
              </div>

              <div style={{ padding: "18px 20px" }}>
                <p style={{ color: "#6B7280", fontSize: 14, lineHeight: 1.7, margin: "0 0 14px", textAlign: "right" }}>{lesson.description}</p>
                {completed && lessonStars > 0 && (
                  <div style={{ marginBottom: 14 }}><StarRating count={lessonStars} /></div>
                )}
                <button
                  onClick={() => handleOpenLesson(lesson)}
                  disabled={!unlocked}
                  style={{ width: "100%", padding: "12px 20px", background: unlocked ? lesson.color : "#9CA3AF", color: "#FFF", border: "none", borderRadius: 12, fontSize: 15, fontWeight: 700, cursor: unlocked ? "pointer" : "not-allowed", fontFamily: "inherit" }}
                >
                  {!unlocked ? "🔒 أكمل المرحلة السابقة أولاً" : completed ? "🔄 مراجعة الدرس" : "▶ ابدأ الدرس"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {activeLesson !== null && (
        <LessonModal lesson={activeLesson} onClose={() => setActiveLesson(null)} onComplete={handleComplete} />
      )}
    </div>
  );
}
