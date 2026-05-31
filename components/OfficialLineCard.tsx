'use client'

export default function OfficialLineCard() {
  return (
    <a
      href="https://line.me/ti/g2/28m4pX-dwvdCFuqeuoFb5OdGg0bsZDlhm-T0PQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-[32px] border border-[#dff5e8] bg-white p-6 transition-all hover:scale-[1.01] active:scale-[0.98]"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#06C755] text-[28px]">
          💬
        </div>

        <div className="flex-1">
          <p className="text-[12px] font-semibold tracking-[0.28em] text-[#06C755]">
            OFFICIAL LINE COMMUNITY
          </p>

          <h3 className="mt-2 text-[22px] font-bold text-[#171717]">
            加入 Vibelink 官方社群
          </h3>

          <p className="mt-2 text-[15px] leading-relaxed text-[#6f6f85]">
            搶先獲得 Beta 資格、開發進度、功能更新與未來活動資訊。
          </p>

          <div className="mt-5 inline-flex items-center rounded-full bg-gradient-to-r from-[#06C755] to-[#00B14F] px-8 py-4 text-[20px] font-bold text-white shadow-lg">
            加入 Line 社群 →
          </div>
        </div>
      </div>
    </a>
  )
}