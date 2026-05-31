export default function TrustSection() {
  return (
    <section
      id="trust"
      className="rounded-[32px] border border-[#e9ddff] bg-white p-6 shadow-[0_10px_40px_rgba(124,58,237,0.08)]"
    >

      <h2 className="text-2xl font-black text-[#1c1630]">
        為什麼這是安全網站？
      </h2>


      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-[#faf7ff] p-5">

          <div className="text-[15px] font-bold text-[#241b3d]">
            不需要信用卡
          </div>

          <p className="mt-2 text-sm leading-6 text-[#6a6485]">
            Beta 測試期間不需付款，也不需綁定信用卡。
          </p>
        </div>

        <div className="rounded-2xl bg-[#faf7ff] p-5">

          <div className="text-[15px] font-bold text-[#241b3d]">
            不會要求轉帳
          </div>

          <p className="mt-2 text-sm leading-6 text-[#6a6485]">
            官方不會私訊要求任何金錢交易或投資。
          </p>
        </div>

        <div className="rounded-2xl bg-[#faf7ff] p-5">

          <div className="text-[15px] font-bold text-[#241b3d]">
            Google登入
          </div>

          <p className="mt-2 text-sm leading-6 text-[#6a6485]">
            只需google登入，不強迫留任何個人敏感資訊
          </p>
        </div>
      </div>
    </section>
  )
}