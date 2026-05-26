'use client'

import { LINKS, openExternalLink } from '@/lib/links'

export default function JoinCTA() {
  return (
    <section
      id="join"
      className="overflow-hidden rounded-[36px] bg-gradient-to-br from-[#7c3aed] via-[#9333ea] to-[#ec4899] p-7 text-white shadow-[0_25px_60px_rgba(124,58,237,0.28)]"
    >
      <div className="mx-auto max-w-[720px] text-center">
        <div className="mb-4 text-base font-semibold tracking-[0.22em] text-white/70">
          VIBELINK BETA ACCESS
        </div>

        <h2 className="text-2xl font-black leading-tight sm:text-2xl">
          成為 Vibelink 種子用戶
        </h2>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={() => openExternalLink(LINKS.vibelinkBeta)}
            className="rounded-full bg-white px-16 py-6 text-3xl font-black text-[#7c3aed] shadow-lg transition hover:scale-[1.03]"
          >
            立即加入
          </button>

          
        </div>

        
      </div>
    </section>
  )
}