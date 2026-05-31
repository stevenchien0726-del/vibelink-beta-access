'use client'

const benefits = [
  {
    icon: '🚀',
    title: '成為第一批種子用戶',
    text: '搶先加入 Vibelink Beta，成為最早體驗與參與產品成長的一群人。',
  },
  {
    icon: '🤖',
    title: '搶先免費使用 AI 雷達功能',
    text: '優先體驗 AI Radar，尋找你感興趣的人與社交氛圍。',
  },
  {
    icon: '💬',
    title: '參與官方 Line 群討論與投票',
    text: '一起討論功能方向、提出回饋，參與 Vibelink 的早期打造過程。',
  },
]

export default function BetaBenefits() {
  return (
    <section className="rounded-[32px] border border-[#eadcff] bg-white p-6 shadow-sm">
      <p className="text-[12px] font-semibold tracking-[0.28em] text-[#8b5cf6]">
        BETA BENEFITS
      </p>

      <h2 className="mt-3 text-[28px] font-black text-[#17121f]">
        加入 Vibelink Beta 有什麼好處？
      </h2>

      <div className="mt-6 grid gap-4">
        {benefits.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 rounded-[26px] bg-[#f8f3ff] p-5"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#a855f7] to-[#7c3aed] text-[24px]">
              {item.icon}
            </div>

            <div>
              <h3 className="text-[18px] font-bold text-[#241b35]">
                {item.title}
              </h3>
              <p className="mt-1 text-[15px] leading-relaxed text-[#6f6f85]">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}