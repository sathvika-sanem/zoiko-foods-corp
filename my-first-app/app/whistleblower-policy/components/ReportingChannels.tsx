const channels = [
  {
    title: "Encrypted Portal",
    description: "24/7, multilingual access",
  },
  {
    title: "Hotline Numbers",
    description: "Toll-free by region",
  },
  {
    title: "Independent Ombudsman",
    description: "Third-party review",
  },
];

export default function ReportingChannels() {
  return (
    <section className="bg-[#F8F9FA] py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="mb-8 text-center font-[Georgia] text-2xl font-bold leading-[52px] text-[#2D5A3D] md:mb-12">
          Reporting Channels
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {channels.map((channel) => (
            <div
              key={channel.title}
              className="flex min-h-44 flex-col items-center justify-center rounded-lg bg-white px-6 py-8 text-center shadow-[0px_4px_6px_rgba(0,0,0,0.10)]"
            >
              <h3 className="font-[Georgia] text-xl font-bold leading-10 text-[#2D5A3D]">
                {channel.title}
              </h3>

              <p className="mt-2 font-[Inter] text-base font-normal leading-6 text-[#333333]">
                {channel.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
