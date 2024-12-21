import React from "react";
import "./AboutUs.css";
import ImageBanner from "../ImageBanner/ImageBanner";

const milestones = [
  {
    id: 1,
    text: "In 1947, amidst the bustling energy of Azadpur, Delhi, Bansi Lal Guru Charan Suri, laid the foundation for our family business. Back then, it was just a humble start, but little did we know, it would be the beginning of an extraordinary journey. Fast forward to 1980, and the next generation, Mr. Sudhir Suri and Mr. Hitin Suri, joined the fray, injecting new life and fresh ideas into our enterprise. Their arrival sparked a wave of expansion and modernization that would shape our future.",
  },
  {
    id: 2,
    text: "By 1990, we reached a pivotal moment with the establishment of our first Cold Storage and Distribution Centre in Kundli, Haryana. It was a game-changer, allowing us to provide fresher produce and better services to our cherished customers. As the years rolled on, we continued to evolve. In 1995, the installation of Grading and Packing Lines in our Distribution Centre gave rise to our brand, Enjoy – a name synonymous with quality and reliability in the industry.",
  },
  {
    id: 3,
    text: "In 1998, we embarked on an exciting international journey, importing fruits and initiating Controlled Atmosphere trials with Air Liquide, France. It was a bold step towards global collaboration and innovation. The year 2006 marked a significant milestone as we partnered with Total Produce PLC, the largest fresh produce distribution company worldwide. This alliance opened doors to new opportunities and expanded our reach across the globe.",
  },
  {
    id: 4,
    text: "With each passing year, we reached new heights – from expanding our operations into Mumbai and Ahmedabad to venturing into grape exports in 2013, catering to discerning markets in Europe, UAE, and Asia. In 2010, the fourth generation joined the family business, bringing with them a renewed vision for the future. The opening of a Modern Distribution Centre and CA Facility for Fresh Produce in the same year reflected our commitment to innovation and sustainability.",
  },
  {
    id: 5,
    text: "By 2019, we embraced automation with the inauguration of a fully automated facility in Mumbai, setting new standards for efficiency and technological advancement. As we entered 2020, we ventured into retail, delivering directly to small shop owners, further solidifying our presence in local communities.",
  },
  {
    id: 6,
    text: "The years that followed saw us expand even further, with Wholesale Cash & Carry outlets opening in Bengaluru in 2021 and Kolkata in 2022. Alongside this growth, we launched the SAF Green App, a testament to our dedication to sustainability.",
  },
  {
    id: 7,
    text: "And now, here we stand, at the forefront of innovation, pioneering the B2B channel for cold-pressed fresh juices. It's a journey that's been filled with challenges and triumphs, but through it all, our commitment to quality, excellence, and progress has remained unwavering.",
  },
];

const AboutUs = () => {
  return (
    <>
    <ImageBanner/>
    <div className="about-us-container">
      <h1 className="about-us-title">Our Story</h1>

      <div className="factory-image">
        <img src="src/assets/factoryimagesuri.avif" alt="" />
      </div>
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <div key={milestone.id} className="timeline-row">
            {/* Conditional rendering for empty box */}
            {index % 2 === 0 ? (
              <div className="timeline-box left">
                <p>{milestone.text}</p>
              </div>
            ) : (
              <div className="timeline-empty"></div>
            )}

            {/* Timeline pointer */}
            <div className="timeline-pointer"></div>

            {/* Conditional rendering for filled box */}
            {index % 2 === 0 ? (
              <div className="timeline-empty"></div>
            ) : (
              <div className="timeline-box right">
                <p>{milestone.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    
    </>
  
  );
};

export default AboutUs;
