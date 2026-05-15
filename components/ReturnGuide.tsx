export default function ReturnGuide() {
  return (
    <section className="rounded-[32px] border border-[#e9ddff] bg-white p-6 shadow-[0_10px_40px_rgba(124,58,237,0.08)]">

      <h2 className="text-2xl font-black text-[#1c1630]">
        如何記得重新回來 Vibelink？
      </h2>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-[#faf7ff] p-5">
          <div className="mb-3 text-2xl">📲</div>

          <div className="text-[15px] font-bold text-[#241b3d]">
            加入手機主畫面
          </div>

          <p className="mt-2 text-sm leading-6 text-[#6a6485]">
            iPhone 或 Android 都可以把 Vibelink Beta 加到主畫面，像 App
            一樣快速開啟。
          </p>
        </div>


        <div className="rounded-2xl bg-[#faf7ff] p-5">
          <div className="mb-3 text-2xl">📸</div>

          <div className="text-[15px] font-bold text-[#241b3d]">
            追蹤官方社群
          </div>

          <p className="mt-2 text-sm leading-6 text-[#6a6485]">
            未來 Beta 更新、活動與功能開放資訊，會在官方社群同步公告。
          </p>
        </div>

      </div>
    </section>
  )
}