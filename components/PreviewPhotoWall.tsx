const previewImages = [
  '/preview/preview-1.png',
  '/preview/preview-2.png',
  '/preview/preview-3.png',
  '/preview/preview-4.png',
  '/preview/preview-5.png',
]

export default function PreviewPhotoWall() {
  return (
    <section className="bg-[#f8f5ff] px-5 py-7">
      <div className="mx-auto max-w-[960px] overflow-hidden">
        <div className="mb-4 flex items-center justify-between">
          <div>
            

            <h2 className="mt-1 text-2xl font-black text-[#1c1630]">
              Vibelink UI預覽
            </h2>
          </div>

        </div>

        <div className="flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {previewImages.map((image, index) => (
            <div
              key={image}
              className="relative h-[400px] w-[250px] shrink-0 overflow-hidden rounded-[32px] bg-white shadow-[0_18px_40px_rgba(124,58,237,0.16)] sm:h-[320px] sm:w-[230px]"
            >
              <img
                src={image}
                alt={`Vibelink beta preview ${index + 1}`}
                className="h-full w-full object-cover"
              />

              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}