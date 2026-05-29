'use client'

export default function OfficialIGCard() {
  return (
    <a
      href="https://instagram.com/vibe_city_official"
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
            bg-gradient-to-br
            from-[#833ab4]
            via-[#fd1d1d]
            to-[#fcb045]
            text-[30px]
          "
        >
          📷
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
            OFFICIAL INSTAGRAM
          </p>

          <h3
            className="
              mt-1
              text-[22px]
              font-bold
              text-[#17121f]
            "
          >
            追蹤 Vibe City 官方 IG
          </h3>

          <p className="mt-1 text-[14px] font-medium text-[#8c54ff]">
  @vibe_city_official
</p>

          <p
            className="
              mt-2
              text-[15px]
              leading-relaxed
              text-[#6f6785]
            "
          >
            查看最新開發進度、Beta 消息、
            Vibelink 功能更新與未來計畫。
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
            前往 Instagram →
          </div>
        </div>
      </div>
    </a>
  )
}