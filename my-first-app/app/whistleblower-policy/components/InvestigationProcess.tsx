import { Fragment } from "react";

export default function InvestigationProcess() {
  const steps = [
    {
      number: "1",
      title: "Report Submitted",
      description: (
        <>
          Via portal/hotline/
          <wbr />
          ombudsman
        </>
      ),
    },
    {
      number: "2",
      title: "Independent Review",
      description: "Panel validates report",
    },
    {
      number: "3",
      title: "Investigation Launched",
      description: "Confidential investigation begins",
    },
    {
      number: "4",
      title: "Action Taken",
      description: "Corrective action or regulatory escalation",
    },
    {
      number: "5",
      title: "Update Provided",
      description: "Whistleblower updated (if not anonymous)",
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5">
        <h2 className="mb-10 text-center font-[Georgia] text-2xl font-bold leading-[52px] text-[#2D5A3D] md:mb-16">
          Investigation Process
        </h2>

        <div className="flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          {steps.map((step, index) => (
            <Fragment key={step.number}>
              {/* Card */}
              <div className="flex min-h-56 w-full flex-col items-center rounded-lg bg-white px-4 pb-8 text-center shadow-[0px_4px_6px_rgba(0,0,0,0.10)] lg:w-44 lg:shrink-0">
                <div className="mt-8 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2D5A3D]">
                  <span className="font-[Inter] text-base font-bold text-white">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-5 font-[Georgia] text-base font-bold leading-5 text-[#2D5A3D]">
                  {step.title}
                </h3>

                <p className="mt-4 font-[Inter] text-sm font-normal leading-6 text-[#333333]">
                  {step.description}
                </p>
              </div>

              {/* Separate fixed-width divider — only rendered between cards */}
              {index !== steps.length - 1 && (
                <div className="hidden h-[2px] w-10 shrink-0 bg-[#C9C9C9] lg:block" />
              )}
            </Fragment>
          ))}
        </div>

        <p className="mt-10 text-center font-[Inter] text-lg font-normal leading-8 text-[#666666] md:mt-16">
          Swift, transparent handling reduces reputational damage and legal
          exposure.
        </p>
      </div>
    </section>
  );
}