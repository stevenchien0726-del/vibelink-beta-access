'use client'

import Image from 'next/image'

export default function VibeCityPortalCard() {
  return (
    <a
      href="https://vibelink-web-puce.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        rounded-[32px]
        border
        border-[#e6dcff]
        bg-white
        p-6
        transition-all
        hover:scale-[1.01]
        active:scale-[0.98]
      "
    >
      <div className="flex items-center gap-4">
        <div
          className="
            flex
            h-16
            w-16
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-black
            shadow-lg
          "
        >
          <Image
            src="/wing-logo.png"
            alt="Vibe City Wing"
            width={38}
            height={38}
            className="h-[38px] w-[38px] object-contain"
          />
        </div>

        <div className="flex-1">
          <p
            className="
              text-[12px]
              font-semibold
              tracking-[0.25em]
              text-[#8c54ff]
            "
          >
            VIBE CITY ECOSYSTEM
          </p>

          <h3
            className="
              mt-1
              text-[22px]
              font-bold
              text-[#17121f]
            "
          >
            探索 Vibe City 生態系
          </h3>

          <p
            className="
              mt-2
              text-[15px]
              leading-relaxed
              text-[#6f6785]
            "
          >
            Vibelink、Vibe TV、會員系統與未來產品藍圖入口。
          </p>

          <div
            className="
              mt-4
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-[#8c54ff]
              px-8
              py-4
              text-[18px]
              font-bold
              text-white
              shadow-lg
              transition-all
              hover:scale-[1.03]
            "
          >
            前往 Vibe City →
          </div>
        </div>
      </div>
    </a>
  )
}