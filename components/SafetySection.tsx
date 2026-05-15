export default function SafetySection() {
  return (
    <section className="rounded-[32px] border border-[#e9ddff] bg-white p-6 shadow-[0_10px_40px_rgba(124,58,237,0.08)]">
      
      <h2 className="text-2xl font-black text-[#1c1630]">
        如果瀏覽器被Google 阻擋怎麼辦？
      </h2>

      <div className="mt-7 flex flex-col gap-4">

        <div className="rounded-2xl border border-[#efe7ff] bg-[#faf7ff] p-5">
          <div className="mb-2 text-[15px] font-bold text-[#241b3d]">
            建議改使用其他瀏覽器 (Chrome / Safari) 開啟
          </div>

          <p className="text-sm leading-6 text-[#6a6485]">
            某些舊版瀏覽器可能對新網站有較高安全限制。
          </p>
        </div>

      </div>
    </section>
  )
}