export default function Hero() {
  return (
    <section
      className="relative w-full h-[960px] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/hero-background.jpg')" }}
    >
      {/* Black Overlays */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Glass Card */}
      <div className="relative z-10 flex items-center justify-center h-full px-8">
        <div className="w-[1100px] h-[520px] rounded-[24px] border border-white/20 bg-white/10 backdrop-blur-[5px] shadow-[0_4px_20px_rgba(17,71,105,0.1)] flex flex-col items-center justify-center text-center px-[48px] py-[40px]">
          {/* Heading */}
          <h1 className="font-georgia text-white text-[60px] font-bold leading-[70x]">
            Celebrating Global Traditions
            <br />
            Elevating Everyday Meals
          </h1>

          {/* Paragraph */}
          <p className="mt-6 font-inter text-white text-[25px] font-light leading-[45px]">
            From African fields and Caribbean kitchens
            <br />
            to family tables worldwide
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-12">
            <button className="bg-[#2D5A3D] rounded-2g px-10 py-6 font-inter text-white text-[20px] font-medium leading-[24px]">
              Discover Our Brands
            </button>

            <button className="bg-[#D79247] rounded-2g px-10 py-6 font-inter text-white text-[20px] font-medium leading-[24px]">
              Explore Rice &amp; Global Staples
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}