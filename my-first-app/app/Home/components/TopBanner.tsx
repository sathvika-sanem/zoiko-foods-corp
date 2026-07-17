import Image from "next/image";

export default function TopBanner() {
  return (
    <section className="bg-black h-20 w-full overflow-hidden flex items-center justify-center">
      <div className="flex items-center gap-3">
        <Image
          src="/images/firstimage.png"
          alt="Women's Day"
          width={32}
          height={32}
        />

        <p className="font-poppins text-white text-[18px] font-normal leading-[24px]">
          Happy International Women's Day — Honouring Women Who Feed Communities |
        </p>

        <a
          href="#"
          className="font-poppins text-white text-[18px] font-normal leading-[24px] underline"
        >
          Discover Our Brands
        </a>
      </div>
    </section>
  );
}