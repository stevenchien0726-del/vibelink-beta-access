import Link from 'next/link'

export default function BetaHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#7c3aed] via-[#a855f7] to-[#ec4899] px-5 pb-12 pt-14 text-white">
      <div className="mx-auto max-w-[960px]">
        

        <h1 className="max-w-[720px] text-4xl font-black leading-tight tracking-tight sm:text-5xl">
          成為 Vibelink 第一批種子用戶
        </h1>

        <p className="mt-5 max-w-[680px] text-base leading-7 text-white/85 sm:text-lg">
          這是一個以 AI 雷達、真實社交互動為核心的新型社群 App。
          目前正在招募早期測試者，一起測試初版體驗，我們誠摯邀請您的加入!
        </p>

      </div>

      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-fuchsia-300/30 blur-3xl" />
    </section>
  )
}