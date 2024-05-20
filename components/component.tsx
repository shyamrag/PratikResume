
'use client';
import React, { useState } from 'react';

export function Component() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    { id: 1, title: "Measure Square Mobile", src: "/pdfs/measure-square.pdf", description: "Measure estimate for retail flooring" },
    { id: 2, title: "Design Thinking + Entrepreneurship", src: "/pdfs/design-thinking.pdf", description: "My 8 step launch program" },
    { id: 3, title: "Sales Skills", src: "/pdfs/sales-skills.pdf", description: "Complete sales training to increase sales" },
    { id: 4, title: "20 Min Business Plan", src: "/pdfs/business-plan.pdf", description: "29 mins of the 20 min business plan" }
  ];

  return (
    <div key="1" className="w-full min-h-screen bg-gray-900 text-white">
      <header className="bg-opacity-50 backdrop-blur-sm py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          <a className="text-xl font-semibold hover:text-gray-300 transition-colors" href="#">
            Pratik Dhamale
          </a>
          <nav className="hidden md:flex items-center space-x-6">
            <a className="hover:text-gray-300 transition-colors font-medium" href="#">Home</a>
            <a className="hover:text-gray-300 transition-colors font-medium" href="#">About</a>
            <a className="hover:text-gray-300 transition-colors font-medium" href="#">Portfolio</a>
            <a className="hover:text-gray-300 transition-colors font-medium" href="#">Contact</a>
          </nav>
          <button className="md:hidden hover:text-gray-300 transition-colors">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      <main className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <section className="mt-12 md:mt-16 lg:mt-24 bg-gray-800 bg-opacity-90 backdrop-blur-lg rounded-lg p-6 md:p-8 lg:p-10 shadow-lg">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-3/5">
                <h2 className="text-3xl font-bold mb-4">Professional Profile and Resume</h2>
                <p className="mb-6 text-lg leading-relaxed">
                  I am a dedicated and proactive BBA graduate, currently pursuing a Master&apos;s in Supply Chain Logistics from TU Dublin University. 
                  With a strong foundation in supply chain management and a demonstrated history of working in the petrol pump industry, 
                  my expertise includes operations management, staff supervision, inventory control, and logistics optimization.
                </p>
                <p className="mb-6 text-lg leading-relaxed">
                  Over my career, I have managed diverse functions within supply chain processes, ensuring efficient customer service 
                  and compliance with safety standards. My role has allowed me to develop strong problem-solving skills and an aptitude 
                  for managing multiple tasks efficiently. Motivated by a desire to drive business growth and operational excellence, 
                  I am eager to apply my skills in a challenging new role.
                </p>
                <a
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium shadow transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-600 disabled:pointer-events-none disabled:opacity-50"
                  href="/pratikdhamale.pdf"
                  download="PratikDhamale_CV.pdf"
                >
                  Download CV
                </a>
              </div>
              <div className="md:w-2/5 flex justify-center mt-6 md:mt-0">
                <img
                  alt="Profile Image"
                  className="max-w-full h-auto rounded-lg object-cover shadow-lg"
                  src="/pratik.jpg"
                  style={{ maxWidth: '300px' }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mt-12 md:mt-16 lg:mt-24 bg-gray-800 bg-opacity-90 backdrop-blur-lg rounded-lg p-6 md:p-8 lg:p-10 shadow-lg">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
    <div>
      <img
        alt="Case Study"
        className="w-full h-auto rounded-lg object-cover shadow-lg cursor-pointer"
        src="/bodywash.jpg" // Update the path as necessary
        onClick={() => setModalOpen(true)}
      />
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-4">
        Unilever&apos;s Approach to Sustainable Business Practices
      </h3>
      <p className="mb-6 text-lg leading-relaxed">
        This case study explores Unilever&apos;s comprehensive sustainability strategies, illustrating how the company integrates these practices across its entire business model. The focus on the Dove Refillable Body Wash exemplifies Unilever&apos;s innovative approach to reducing plastic waste and promoting a circular economy. By adopting sustainable packaging solutions and implementing life cycle thinking in product design, Unilever not only reduces its environmental impact but also establishes a benchmark for the industry.
      </p>
      <button
        className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium shadow transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-600"
        onClick={() => setModalOpen(true)}
      >
        Read Case Study
      </button>
    </div>
  </div>
  {isModalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 md:p-8 lg:p-10 max-w-4xl mx-auto text-black overflow-auto" style={{ maxHeight: '90vh' }}>
        <h2 className="text-xl font-bold mb-4">Sustainable Business Practices at Unilever</h2>
        <p className="text-lg leading-relaxed">
          Explore Unilever&apos;s commitment to sustainable development through its Dove Refillable Body Wash initiative. This case study outlines the process from raw material extraction to the end consumer, showcasing Unilever&apos;s strategies to reduce environmental impact and promote sustainable consumption.
        </p>
        <a
          href="/casestudy.doc"
          download="Unilever_Case_Study.doc"
          className="inline-flex items-center justify-center mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
        >
          Download Full Case Study
        </a>
        <button
          className="mt-4 ml-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition-colors"
          onClick={() => setModalOpen(false)}
        >
          Close
        </button>
      </div>
    </div>
  )}
</section>

        <section className="mt-12 md:mt-16 lg:mt-24 bg-gray-800 bg-opacity-90 backdrop-blur-lg rounded-lg p-6 md:p-8 lg:p-10 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Sulitest Results</h3>
              <p className="mb-6 text-lg leading-relaxed">
                I recently completed the Sulitest, a comprehensive assessment of my knowledge and understanding of the
                United Nations Sustainable Development Goals (SDGs). The test covered a wide range of topics, from
                environmental sustainability to social justice and economic development.
              </p>
              <p className="mb-6 text-lg leading-relaxed">
                I am proud to share that I scored in the top 90th percentile, demonstrating my deep commitment to
                sustainable development and my ability to think critically about global challenges.
              </p>
              <a
                className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-medium shadow transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-600 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                View Sulitest Certificate
              </a>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Reflective Piece</h3>
              <p className="mb-6 text-lg leading-relaxed">
                Completing the Sulitest has been a transformative experience for me. It has not only deepened my
                understanding of the SDGs but also inspired me to further integrate sustainable practices into my daily
                life and professional work.
              </p>
              <p className="mb-6 text-lg leading-relaxed">
                Through this process, I have gained a greater appreciation for the interconnectedness of global
                challenges and the importance of taking a holistic approach to problem-solving. I am committed to using
                my skills and expertise as a web developer to contribute to the achievement of the SDGs, whether it&apos;s
                through building eco-friendly websites, advocating for digital accessibility, or collaborating with
                organizations that are making a positive impact on the world.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-12 md:mt-16 lg:mt-24 bg-gray-800 bg-opacity-90 backdrop-blur-lg rounded-lg p-6 md:p-8 lg:p-10 shadow-lg">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <video 
              controls 
              style={{ width: '100%', height: 'auto' }}  // Corrected style object
              allowFullScreen  // Corrected attribute for full screen
            >
              <source src="/Sustainable_development.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
        <section className="mt-12 md:mt-16 lg:mt-24 bg-gray-800 bg-opacity-90 backdrop-blur-lg rounded-lg p-6 md:p-8 lg:p-10 shadow-lg">
  <h2 className="text-3xl font-bold text-center mb-8 text-white">My Certificates</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
    {certificates.map((certificate) => (
      <div key={certificate.id} className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl cursor-pointer">
        <div className="bg-white bg-opacity-90 rounded-lg p-6 flex flex-col items-center justify-center shadow-lg" style={{ minHeight: '250px' }}>
          <p className="text-lg font-medium text-gray-800 text-center">{certificate.title}</p>
        </div>
      </div>
    ))}
  </div>

  {selectedCertificate && (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-3/4 max-w-4xl p-8 text-black overflow-auto shadow-lg animate-fade-in">
        <h3 className="text-xl font-bold mb-4">{selectedCertificate.title} Certificate</h3>
        <object data={selectedCertificate.src} type="application/pdf" width="100%" style={{ minHeight: '500px' }}>
          <p>Your browser does not support PDFs. <a href={selectedCertificate.src}>Download the PDF</a> to view it.</p>
        </object>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          onClick={() => setSelectedCertificate(null)}
        >
          Close
        </button>
      </div>
    </div>
  )}
</section>

      </main>
      <footer className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          <p className="text-sm">© 2024 Pratik Dhamale. All rights reserved.</p>
          <nav className="flex items-center space-x-6">
            <a className="hover:text-white transition-colors" href="#">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" />
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
