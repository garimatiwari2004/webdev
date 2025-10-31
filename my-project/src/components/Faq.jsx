import React, { useState } from "react";
import {  Minus, Phone, Plus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I schedule an interview?",
      answer:
        "You can schedule an interview by logging into your dashboard, selecting your preferred time slot, and confirming your booking.",
    },
    {
      question: "Will I be charged for the interview?",
      answer:
        "No, the interview scheduling is completely free. You only pay if you opt for premium career guidance sessions.",
    },
    {
      question: "Can I get a trial for On-demand interview?",
      answer:
        "Yes! We offer a free one-time trial for our on-demand interview feature so you can experience the process before committing.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="font-sora bg-pink-100 md:pt-20 p-5 mt-5 md:px-24 md:mt-20 pb-6 md:pb-20">
      <div className="flex flex-col gap-5 md:flex-row justify-between ">
        {/* Left Section - FAQ Info */}
        
          <div className="flex flex-col gap-3 w-full md:w-1/2">
            <h1 className="font-bold text-2xl text-black">FAQs</h1>
            <p className="font-light text-gray-600 mb-2">
              Here are the frequently asked questions to clear all your doubts.
            </p>

            {/* Support Section */}
            <div className="mt-4">
              <h3 className="font-medium text-gray-700">Still have doubts?</h3>
              <div className="flex items-center gap-2 text-blue-700 font-semibold mt-1">
                <Phone className="w-4 h-4" />
                <span>Talk to our representative</span>
              </div>
            </div>
          </div>

          {/* FAQ Dropdown Section */}
          <div className="space-y-4 ">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 py-3">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left focus:outline-none border-b-2 border-gray-900"
                >
                  <h3 className="text-base md:text-lg font-md text-gray-800 ">
                    {faq.question}
                  </h3>
                  
                  {openIndex === index ? (
                    <Minus className=" cursor-pointer font-bold text-gray-500 transition-transform duration-300" />
                  ) : (
                    <Plus className=" cursor-pointer font-bold text-gray-500 transition-transform duration-300" />
                  )}
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index
                      ? "max-h-40 opacity-100 mt-2"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        

      </div>
    </div>
  );
};

export default FAQ;
