import React from "react";
import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

const policies = [
  { name: "Code of Conduct for Directors and Senior Management" },
  { name: "Code for Independent Directors" },
  { name: "Criteria for making payment to NED" },
  { name: "Criteria for determining materiality of events" },
  { name: "Policies for Preservation of Documents" },
  { name: "Policy on Familiarization of Independent Directors" },
  { name: "Material Litigation and Material Creditors" },
  { name: "Policy on Determining Material Subsidiary" },
  { name: "Code of Conduct for Insider Trading" },
  { name: "Policy on Prevention of Sexual Harassment" },
  { name: "Policy on dealing with Related Party Transactions" },
  { name: "Terms and conditions of ID appointment" },
  { name: "Whistle Blower Policy" },
  { name: "Composition of Committee of Board of Directors" },
  { name: "Dividend Distribution Policy" },
];

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <div className="privacy-policy-content">
        <p>
          At Surifresh Extract Ltd CIN No. U15400DL2018PTC332666, we are
          committed to protecting your privacy. This policy outlines how we
          collect, use, and safeguard your personal information.
        </p>

        <h2>Information We Collect</h2>
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, contact details, and
            payment information when you make a purchase or contact us.
          </li>
          <li>
            <strong>Usage Data:</strong> Information like IP address, browser
            type, and interactions on our website to improve your experience.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To process orders and deliver products.</li>
          <li>To improve customer service and address inquiries.</li>
          <li>To send promotional offers or updates if you opt-in.</li>
          <li>For analytics to enhance our website and offerings.</li>
        </ul>

        <h2>Data Sharing</h2>
        <ul>
          <li>We do not sell or rent your information to third parties.</li>
          <li>Data may be shared with:</li>
          <ul>
            <li>Payment processors for transaction purposes.</li>
            <li>Shipping partners to fulfill orders.</li>
            <li>Legal entities, if required by law.</li>
          </ul>
        </ul>

        <h2>Your Rights</h2>
        <ul>
          <li>Access and review your personal data.</li>
          <li>Request corrections or deletions of your data.</li>
          <li>Opt-out of promotional communications anytime.</li>
        </ul>

        <h2>Cookies</h2>
        <p>
          We use cookies to improve your browsing experience and tailor
          services. You can adjust your browser settings to refuse cookies if
          preferred.
        </p>

        <h2>Data Security</h2>
        <p>
          We implement stringent measures to protect your data from
          unauthorized access, including encryption and secure servers.
        </p>

        <h2>Policy Updates</h2>
        <p>
          This privacy policy may be updated periodically. We encourage you to
          review it regularly.
        </p>

        <h2>Contact Us</h2>
        <p>
          For questions about this policy, email us at{" "}
          <a href="mailto:cs@surifreshextract.com">cs@surifreshextract.com</a>
        </p>
        <p>Contact: 9555720000</p>

        <h2>Related Policies</h2>
        <div className="policy-list">
          {policies.map((policy, index) => (
            <div className="policy-item-new" key={index}>
              <span>{policy.name}</span>
              <Link to="/investor-relations" className="read-button">
                Read
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
