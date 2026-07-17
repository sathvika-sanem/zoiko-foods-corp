export default function Footer() {
  const columns = [
    {
      title: "About Zoiko Foods",
      links: [
        "About Us",
        "Heritage & Roots",
        "Our Brands",
        "Exclusive Distributorships",
        "Culinary Journal",
      ],
    },
    {
      title: "Business & Partnerships",
      links: [
        "Investor Relations",
        "Partnership Opportunities",
        "Become a Distributor",
        "Global Suppliers & Farmers",
        "Corporate Governance Portal",
        "Whistleblower Policy",
      ],
    },
    {
      title: "Sustainability & Responsibility",
      links: [
        "Sustainability Commitments",
        "2028 Packaging Roadmap",
        "Supplier code of ethics",
        "Net zero 2040",
        "ESG Hub",
      ],
    },
    {
      title: "Support & Contact",
      links: [
        "Contact Us",
        "Careers",
        "FAQ & Consumer Care",
        "Media & Press Inquiries",
      ],
    },
  ];

  const locations = [
    "Sacramento (HQ)",
    "London",
    "Paris",
    "Madrid",
    "Brussels",
    "Toronto",
    "Bangalore",
    "Lagos",
    "Shenzhen",
    "Kingston",
  ];


  return (
    <footer className="bg-[#2D5A3D] text-white">


      {/* Top Links Section */}
      <div className="max-w-[1160px] mx-auto grid grid-cols-4 gap-10 py-12">

        {columns.map((col,index)=>(
          <div key={index}>

            <h3 className="text-[#D79247] text-lg font-bold font-[Georgia] border-b-2 border-[#D79247] pb-3 mb-6">
              {col.title}
            </h3>


            <ul className="space-y-5">

              {col.links.map((link,i)=>(
                <li 
                key={i}
                className="text-white text-base font-normal font-[Inter]"
                >
                  {link}
                </li>
              ))}

            </ul>

          </div>
        ))}

      </div>



      {/* Newsletter Section */}

      <div className="bg-[#396A4B] py-12">

        <div className="max-w-[1160px] mx-auto flex justify-between">


          <div>

            <h2 className="text-white text-xl font-bold font-[Georgia]">
              Stay Inspired | Subscribe to the Zoiko Culinary Journal
            </h2>


            <div className="flex mt-8">

              <input
              placeholder="Enter your email address"
              className="w-80 h-12 rounded-lg px-4 text-gray-500"
              />

              <button className="ml-6 w-36 h-12 bg-[#D79247] rounded-lg text-white font-bold">
                Subscribe
              </button>

            </div>

          </div>



          <div>

          <h2 className="text-white text-xl font-bold font-[Georgia]">
              Connect with us
          </h2>


          <div className="flex gap-5 mt-8">

            {[1,2,3,4].map((i)=>(
              <div
              key={i}
              className="w-12 h-12 rounded-full bg-white"
              >

              </div>
            ))}

          </div>

          </div>


        </div>

      </div>





      {/* Company Info */}

      <div className="bg-[#396A4B] py-10 text-center">


        <h2 className="text-white text-3xl font-bold font-[Georgia]">
          Zoiko Foods Corp
        </h2>


        <p className="text-[#D79247] mt-4">
          Feeding the Future — One Culture. One Table.
        </p>


        <div className="flex justify-center gap-4 mt-10 flex-wrap">


          {locations.map((location,index)=>(
            <button
            key={index}
            className={`px-5 py-3 rounded-lg 
            ${
              index===0
              ?"bg-[#D79247]"
              :"bg-white/10"
            }`}
            >
              {location}
            </button>
          ))}


        </div>


        <p className="mt-8 font-bold text-sm">
          HACCP | BRCGS | FDA | FSSAI | ISO 22000 | ISO 9001 | Fair Trade | Rainforest Alliance | ESG
        </p>


      </div>






      {/* Description */}

      <div className="bg-[#396A4B] border-t border-white/30 py-8 text-center">


        <p className="max-w-5xl mx-auto text-white text-lg font-[Georgia]">
          Zoiko Foods Corp. — A proud member of Zoiko Group Inc., delivering
          world-class foods, beverages, and culinary innovation across continents.
          Rooted in heritage. Committed to sustainability. Driven by excellence.
        </p>


        <div className="border-t border-white mt-8 pt-5 text-sm">
          © 2025 Zoiko Foods Corp. All rights reserved.
        </div>


      </div>





      {/* Bottom Policies */}

      <div className="bg-[#396A4B] py-6 flex justify-center gap-10 flex-wrap text-sm underline">

        <span>Privacy Policy (GDPR + CCPA)</span>
        <span>Terms & Conditions</span>
        <span>Cookie Policy & Preferences</span>
        <span>Accessibility Statement (ADA/WCAG)</span>
        <span>Modern Slavery & Human Rights</span>
        <span>Anti-Bribery & Anti-Corruption</span>

      </div>


    </footer>
  );
}