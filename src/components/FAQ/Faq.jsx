import React, { useState, useRef } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the current FAQ
    } else {
      setOpenIndex(index); // Open the clicked FAQ
    }
  };


  const faqData = [
    {
      question: 'Where is this juice available, and how can one get it?',
      answer:
        'It is available on Swiggy Instamart, Blinkit, Bigbasket, Fresho and you can also get it by directly contacting the facility.',
    },
    {
      question: 'How is it different from other cold pressed juices?',
      answer:
        'It’s not just a juice. It’s 100% fruit. It is never heated or cooked, as the process is believed to destroy vitamins, minerals, and essential enzymes. We retain the original taste of fruits and stay away from the complicated mixing of many ingredients.',
    },
    {
      question: 'Why thirty3 over other brands?',
      answer:
        'Choose our brand for superior quality, freshness, and health benefits. With premium ingredients, advanced cold-pressed technology and eco-friendly packaging. We prioritize taste, nutrition and sustainability.',
    },
    {
      question: 'Your juice seems to settle down and separate. Is it something to be worried about?',
      answer:
        'Separation, grains and pulp settling at the bottom are great signs of purity and freshness. Since we have no added chemicals, stabilisers, food colours or preservatives, the pulp and fibres settle down if the bottle is kept for a longer duration.',
    },
    {
      question: 'What is the shelf life of the juices?',
      answer:
        'Shelf life of chilled juices is for up to 28 days and frozen juices is for up to 6 months.',
    },
    {
      question: 'What is the difference between cold pressed, packaged and home made juices?',
      answer:
        'Existing packaged juices on the market contain preservatives, chemicals, growth hormones, stabilizers, and added sugar. While our juices are made up of 100% raw fruits and vegetables, Tetra packs of juices on the market contain 90% sugar. While juices you drink from your local juice bar, restaurant, or home are most likely made with a centrifugal juicer, which is for immediate consumption due to pulp remaining in the juice as well as heat and oxidation during the juicing process. Our juices contain naturally occurring sugar obtained from the fruits. Hence our juices are the perfect choice for you anytime and anywhere.',
    },
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-title">FAQs</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              {openIndex === index ? <FiMinus className="icon" /> : <FiPlus className="icon" />}
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: openIndex === index ? `${contentRefs.current[index]?.scrollHeight}px` : "0",
              }}
              ref={(el) => (contentRefs.current[index] = el)}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
