export default function HowItWorks() {
  return (
    <section className="rounded-[32px] border border-[#e9ddff] bg-white p-6 shadow-[0_10px_40px_rgba(124,58,237,0.08)]">

      <h2 className="text-2xl font-black text-[#1c1630]">
        如何參與 Vibelink Beta？
      </h2>

      <div className="mt-8 flex flex-col gap-5">
        <div className="flex gap-4 rounded-2xl bg-[#faf7ff] p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#a855f7] text-sm font-black text-white">
            1
          </div>

          <div>
            <div className="text-[15px] font-bold text-[#241b3d]">
              進入 Beta Website
            </div>

            <p className="mt-1 text-sm leading-6 text-[#6a6485]">
              點擊加入按鈕後，即可進入目前的 Vibelink Beta 測試網站。
            </p>
          </div>
        </div>

        <div className="flex gap-4 rounded-2xl bg-[#faf7ff] p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#a855f7] text-sm font-black text-white">
            2
          </div>

          <div>
            <div className="text-[15px] font-bold text-[#241b3d]">
              建立你的 Profile
            </div>

            <p className="mt-1 text-sm leading-6 text-[#6a6485]">
              上傳頭像、簡單介紹自己，建立屬於你的 Vibe Profile。
            </p>
          </div>
        </div>

        <div className="flex gap-4 rounded-2xl bg-[#faf7ff] p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#a855f7] text-sm font-black text-white">
            3
          </div>

          <div>
            <div className="text-[15px] font-bold text-[#241b3d]">
              發布第一篇內容
            </div>

            <p className="mt-1 text-sm leading-6 text-[#6a6485]">
              你可以發照片、短影片、生活內容，開始體驗社群互動。
            </p>
          </div>
        </div>

        <div className="flex gap-4 rounded-2xl bg-[#faf7ff] p-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#a855f7] text-sm font-black text-white">
            4
          </div>

          <div>
            <div className="text-[15px] font-bold text-[#241b3d]">
              測試 AI 雷達
            </div>

            <p className="mt-1 text-sm leading-6 text-[#6a6485]">
              使用 AI Radar 嘗試搜尋你感興趣的人與社交氛圍。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}