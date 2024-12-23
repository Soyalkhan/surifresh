// 'use client';

// import { useState } from 'react';
// import { FiDownload, FiEye } from 'react-icons/fi';
// import './InvestorRelations.css';

// // Define menu items with corresponding PDF files
// const menuItems = [
//   { name: 'DRHP', file: 'DRHP_Surifresh.pdf' },
//   { name: 'Final Prospectus', file: 'Final_Prospectus.pdf' },
//   {
//     name: 'Policies',
//     files: [
//       { name: 'Code of Conduct for Directors and Senior Management', file: '1.-Code-of-Conduct-for-Directors-and-Senior-Management.pdf' },
//       { name: 'CODE FOR INDEPENDENT DIRECTORS', file: '2.-CODE-FOR-INDEPENDENT-DIRECTORS.pdf' },
//       { name: 'Criteria for making payment to NED', file: '3.-Criteria-for-making-payment-to-NED.pdf' },
//       { name: 'Criteria for determining materiality of events', file: '4.-Criteria-for-determining-materiality-of-events.pdf' },
//       { name: 'Policies for Preservation of Documents', file: '5.-Policies-for-Preservation-of-Documents.pdf' },
//       { name: 'Policy on Familiarization of independent directors', file: '6.-Policy-on-Familirization-of-independent-directors.pdf' },
//       { name: 'MATERIAL LITIGATION AND MATERIAL CREDITORS', file: '7.-MATERIAL-LITIGATION-AND-MATERIAL-CREDIOTRS.pdf' },
//       { name: 'Policy on Determining Material Subsidiary', file: '8.-Policy-on-Determininng-Material-Subsidiary.pdf' },
//       { name: 'Code of Conduct for Insider Trading', file: '9.-Code-of-Conduct-for-Insider-Trading.pdf' },
//       { name: 'Policy on Prevention of Sexual Harassment', file: '10.-Policy-on-Prevention-of-Sexual-Harassment.pdf' },
//       { name: 'Policy on dealing with Related Party Transaction', file: '11.-Policy-on-dealing-with-Related-Party-Transaction.pdf' },
//       { name: 'Terms and condition of ID appointment', file: '12.-Terms-and-condition-of-ID-appointment.pdf' },
//       { name: 'Whistle Blower Policy', file: '13.-Whistle-Blower-Policy.pdf' },
//       { name: 'Composition of committee of Board of Directors', file: '13A.-Composition-of-committee-of-Board-of-Directors.pdf' },
//       { name: 'DIVIDEND DISTRIBUTION POLICY', file: '14.-DIVIDEND-DISTRIBUTION-POLICY.pdf' }
//     ]
//   },
//   { name: 'Committees', file: 'Committees.pdf' },
//   { name: 'Director' },
//   { name: 'Key Managerial Personnel' },
//   { name: 'Management', file: 'Management.pdf' },
//   { name: 'Financial Result' },
//   { name: 'Stock Exchange Intimation' },
//   { name: 'Investor Grievances' },
// ];

// export default function InvestorRelations() {
//   const [activeTab, setActiveTab] = useState(menuItems[0].name);

//   const renderContent = () => {
//     if (activeTab === 'Policies') {
//       const policies = menuItems.find((item) => item.name === 'Policies').files;
//       return (
//         <div>
//           <h2 className="content-title">Policies</h2>
//           <div className="policy-list">
//             {policies.map((policy, index) => (
//               <div className="policy-item" key={index}>
//                 <div className="policy-name">{policy.name}</div>
//                 <div className="button-group">
//                   <a
//                     href={`/assets/${policy.file}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="view-button"
//                   >
//                     View <FiEye className="button-icon" />
//                   </a>
//                   <a
//                     href={`/assets/${policy.file}`}
//                     download
//                     className="download-button"
//                   >
//                     Download <FiDownload className="button-icon" />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       );
//     }

//     if (activeTab === 'Director') {
//       return (
//         <div>
//           <h2 className="content-title">Directors</h2>
//           <table className="directors-table">
//             <thead>
//               <tr>
//                 <th>S. No.</th>
//                 <th>Name</th>
//                 <th>Category</th>
//                 <th>Designation</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>1.</td>
//                 <td>Sudhir Suri</td>
//                 <td>Executive Director</td>
//                 <td>Chairman & Director</td>
//               </tr>
//               <tr>
//                 <td>2.</td>
//                 <td>Manav Suri</td>
//                 <td>Executive Director</td>
//                 <td>Managing Director</td>
//               </tr>
//               <tr>
//                 <td>3.</td>
//                 <td>Hitin Suri</td>
//                 <td>Executive Director</td>
//                 <td>Whole-time Director</td>
//               </tr>
//               <tr>
//                 <td>4.</td>
//                 <td>Siddhaarth Suri</td>
//                 <td>Non-Executive Director</td>
//                 <td>Non-Executive Director</td>
//               </tr>
//               <tr>
//                 <td>5.</td>
//                 <td>Sidhantt Suri</td>
//                 <td>Non-Executive Director</td>
//                 <td>Non-Executive Director</td>
//               </tr>
//               <tr>
//                 <td>6.</td>
//                 <td>Puneeta Johar</td>
//                 <td>Non-Executive Independent Director</td>
//                 <td>Independent Director</td>
//               </tr>
//               <tr>
//                 <td>7.</td>
//                 <td>Ashoo Sethi</td>
//                 <td>Non-Executive Independent Director</td>
//                 <td>Independent Director</td>
//               </tr>
//               <tr>
//                 <td>8.</td>
//                 <td>Piyushi Jindal</td>
//                 <td>Non-Executive Independent Director</td>
//                 <td>Independent Director</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       );
//     }

//     if (activeTab === 'Key Managerial Personnel') {
//       return (
//         <div>
//           <h2 className="content-title">Key Managerial Personnel</h2>
//           <table className="directors-table">
//             <thead>
//               <tr>
//                 <th>Name of KMP</th>
//                 <th>Designation</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Manav Suri</td>
//                 <td>Managing Director</td>
//               </tr>
//               <tr>
//                 <td>Hitin Suri</td>
//                 <td>Whole Time Director</td>
//               </tr>
//               <tr>
//                 <td>Kunjbihari Yadav</td>
//                 <td>Company Secretary & Compliance Officer</td>
//               </tr>
//               <tr>
//                 <td>Kapil Kapoor</td>
//                 <td>Chief Financial Officer</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       );
//     }

//     const currentItem = menuItems.find((item) => item.name === activeTab);
//     if (currentItem?.file) {
//       return (
//         <div>
//           <h2 className="content-title">{currentItem.name}</h2>
//           <div className="content-container">
//             <div className="content-box">{currentItem.name}</div>
//             <div className="button-group">
//               <a
//                 href={`/assets/${currentItem.file}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="view-button"
//               >
//                 View <FiEye className="button-icon" />
//               </a>
//               <a
//                 href={`/assets/${currentItem.file}`}
//                 download
//                 className="download-button"
//               >
//                 Download <FiDownload className="button-icon" />
//               </a>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     return <div className="content-title">{activeTab}</div>;
//   };

//   return (
//     <div className="investor-relations">
//       <h1 className="main-title">Investor Relations</h1>
//       <hr />
//       <div className="layout">
//         <nav className="menu">
//           <div className="menu-items">
//             {menuItems.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => setActiveTab(item.name)}
//                 className={`menu-item ${
//                   activeTab === item.name ? 'menu-item-active' : ''
//                 }`}
//               >
//                 {item.name}
//                 <span className="menu-item-icon">›</span>
//               </button>
//             ))}
//           </div>
//         </nav>
//         <main className="content">{renderContent()}</main>
//       </div>
//     </div>
//   );  
// }


import { useState } from 'react';
import { FiDownload, FiEye } from 'react-icons/fi';
import './InvestorRelations.css';

// Define menu items with corresponding PDF files
const menuItems = [
  { name: 'DRHP', file: 'DRHP_Surifresh.pdf' },
  // { name: 'Final Prospectus', file: null },
  {
    name: 'Policies',
    files: [
      { name: 'Code of Conduct for Directors and Senior Management', file: '1.-Code-of-Conduct-for-Directors-and-Senior-Management.pdf' },
      { name: 'CODE FOR INDEPENDENT DIRECTORS', file: '2.-CODE-FOR-INDEPENDENT-DIRECTORS.pdf' },
      { name: 'Criteria for making payment to NED', file: '3.-Criteria-for-making-payment-to-NED.pdf' },
      { name: 'Criteria for determining materiality of events', file: '4.-Criteria-for-determining-materiality-of-events.pdf' },
      { name: 'Policies for Preservation of Documents', file: '5.-Policies-for-Preservation-of-Documents.pdf' },
      { name: 'Policy on Familiarization of independent directors', file: '6.-Policy-on-Familirization-of-independent-directors.pdf' },
      { name: 'MATERIAL LITIGATION AND MATERIAL CREDITORS', file: '7.-MATERIAL-LITIGATION-AND-MATERIAL-CREDIOTRS.pdf' },
      { name: 'Policy on Determining Material Subsidiary', file: '8.-Policy-on-Determininng-Material-Subsidiary.pdf' },
      { name: 'Code of Conduct for Insider Trading', file: '9.-Code-of-Conduct-for-Insider-Trading.pdf' },
      { name: 'Policy on Prevention of Sexual Harassment', file: '10.-Policy-on-Prevention-of-Sexual-Harassment.pdf' },
      { name: 'Policy on dealing with Related Party Transaction', file: '11.-Policy-on-dealing-with-Related-Party-Transaction.pdf' },
      { name: 'Terms and condition of ID appointment', file: '12.-Terms-and-condition-of-ID-appointment.pdf' },
      { name: 'Whistle Blower Policy', file: '13.-Whistle-Blower-Policy.pdf' },
      { name: 'Composition of committee of Board of Directors', file: '13A.-Composition-of-committee-of-Board-of-Directors.pdf' },
      { name: 'DIVIDEND DISTRIBUTION POLICY', file: '14.-DIVIDEND-DISTRIBUTION-POLICY.pdf' }
    ],
  },
  { name: 'Committees', file: null },
  { name: 'Director' },
  { name: 'Key Managerial Personnel' },
  { name: 'Management', file: 'Management.pdf' },
  // { name: 'Financial Result', file: null },
  // { name: 'Stock Exchange Intimation', file: null },
  { name: 'Investor Grievances', file: null },
];

export default function InvestorRelations() {
  const [activeTab, setActiveTab] = useState(menuItems[0].name);

  const renderContent = () => {
    if (activeTab === 'Policies') {
      const policies = menuItems.find((item) => item.name === 'Policies').files;
      return (
        <div>
          <h2 className="content-title">Policies</h2>
          <div className="policy-list">
            {policies.map((policy, index) => (
              <div className="policy-item" key={index}>
                <div className="policy-name">{policy.name}</div>
                {policy.file ? (
                  <div className="button-group">
                    <a
                      href={`/assets/${policy.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-button"
                    >
                      View <FiEye className="button-icon" />
                    </a>
                    <a
                      href={`/assets/${policy.file}`}
                      download
                      className="download-button"
                    >
                      Download <FiDownload className="button-icon" />
                    </a>
                  </div>
                ) : (
                  <div className="no-file">No file available</div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }
  
    if (activeTab === 'Director') {
      return (
        <div>
          <h2 className="content-title">Directors</h2>
          <table className="directors-table">
            <thead>
              <tr>
                <th>S. No.</th>
                <th>Name</th>
                <th>Category</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Sudhir Suri</td>
                <td>Executive Director</td>
                <td>Chairman & Director</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Manav Suri</td>
                <td>Executive Director</td>
                <td>Managing Director</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Hitin Suri</td>
                <td>Executive Director</td>
                <td>Whole-time Director</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Siddhaarth Suri</td>
                <td>Non-Executive Director</td>
                <td>Non-Executive Director</td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Sidhantt Suri</td>
                <td>Non-Executive Director</td>
                <td>Non-Executive Director</td>
              </tr>
              <tr>
                <td>6.</td>
                <td>Puneeta Johar</td>
                <td>Non-Executive Independent Director</td>
                <td>Independent Director</td>
              </tr>
              <tr>
                <td>7.</td>
                <td>Ashoo Sethi</td>
                <td>Non-Executive Independent Director</td>
                <td>Independent Director</td>
              </tr>
              <tr>
                <td>8.</td>
                <td>Piyushi Jindal</td>
                <td>Non-Executive Independent Director</td>
                <td>Independent Director</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  
    if (activeTab === 'Key Managerial Personnel') {
      return (
        <div>
          <h2 className="content-title">Key Managerial Personnel</h2>
          <table className="directors-table">
            <thead>
              <tr>
                <th>Name of KMP</th>
                <th>Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Manav Suri</td>
                <td>Managing Director</td>
              </tr>
              <tr>
                <td>Hitin Suri</td>
                <td>Whole Time Director</td>
              </tr>
              <tr>
                <td>Kunjbihari Yadav</td>
                <td>Company Secretary & Compliance Officer</td>
              </tr>
              <tr>
                <td>Kapil Kapoor</td>
                <td>Chief Financial Officer</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  
    if (activeTab === 'Investor Grievances') {
      return (
        <div>
          <h2 className="content-title">Investor Grievances</h2>
          <p>
            Investors may e-mail their queries/grievances to the Company Secretary & Compliance Officer of the company.
            The Shareholders are requested to quote the DP & Client ID in all their correspondences.
          </p>
          <p>Email: <a href="mailto:cs@surifreshextract.com">cs@surifreshextract.com</a></p>
        </div>
      );
    }

    
    if (activeTab === 'Committees') {
      return (
        <div className="scrollable-section">
          <h2 className="content-title">Committees</h2>
    
          {/* Audit Committee */}
          <h3>Audit Committee</h3>
      
          <table className="committee-table">
            <thead>
              <tr>
                <th>Name of the Director</th>
                <th>Designation in the Committee</th>
                <th>Nature of Directorship</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Piyushi Jindal</td>
                <td>Chairman</td>
                <td>Independent Director</td>
              </tr>
              <tr>
                <td>Puneeta Johar</td>
                <td>Member</td>
                <td>Independent Director</td>
              </tr>
              <tr>
                <td>Aashoo Sethi</td>
                <td>Member</td>
                <td>Independent Director</td>
              </tr>
              <tr>
                <td>Sudhir Suri</td>
                <td>Member</td>
                <td>Whole Time Director</td>
              </tr>
            </tbody>
          </table>
        
    
          {/* Nomination and Remuneration Committee */}
          <h3>Nomination and Remuneration Committee</h3>
         
          <table className="committee-table">
            <thead>
              <tr>
                <th>Name of the Director</th>
                <th>Designation in the Committee</th>
                <th>Nature of Directorship</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Aashoo Sethi</td>
                <td>Chairman</td>
                <td>Independent Director</td>
              </tr>
              <tr>
                <td>Piyushi Jindal</td>
                <td>Member</td>
                <td>Independent Director</td>
              </tr>
              <tr>
                <td>Sidhantt Suri</td>
                <td>Member</td>
                <td>Non-Executive Director</td>
              </tr>
            </tbody>
          </table>
          
    
          {/* Stakeholders’ Relationship Committee */}
          <h3>Stakeholders’ Relationship Committee</h3>
          
          <table className="committee-table">
            <thead>
              <tr>
                <th>Name of the Director</th>
                <th>Designation in the Committee</th>
                <th>Nature of Directorship</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sidhantt Suri</td>
                <td>Chairman</td>
                <td>Non-Executive Director</td>
              </tr>
              <tr>
                <td>Puneeta Johar</td>
                <td>Member</td>
                <td>Independent Director</td>
              </tr>
              <tr>
                <td>Hitin Suri</td>
                <td>Member</td>
                <td>Whole Time Director</td>
              </tr>
            </tbody>
          </table>
        
    
          {/* Corporate Social Responsibility Committee */}
          <h3>Corporate Social Responsibility Committee</h3>
         
          <table className="committee-table">
            <thead>
              <tr>
                <th>Name of the Director</th>
                <th>Designation in the Committee</th>
                <th>Nature of Directorship</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Puneeta Johar</td>
                <td>Chairman</td>
                <td>Independent Director</td>
              </tr>
              <tr>
                <td>Sidhantt Suri</td>
                <td>Member</td>
                <td>Non-Executive Director</td>
              </tr>
              <tr>
                <td>Hitin Suri</td>
                <td>Member</td>
                <td>Whole Time Director</td>
              </tr>
            </tbody>
          </table>
        
    
          {/* Initial Public Offer Committee */}
          <h3>Initial Public Offer Committee</h3>
         
          <table className="committee-table">
            <thead>
              <tr>
                <th>Name of the Director</th>
                <th>Designation in the Committee</th>
                <th>Nature of Directorship</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Hitin Suri</td>
                <td>Chairman</td>
                <td>Whole Time Director</td>
              </tr>
              <tr>
                <td>Sidhantt Suri</td>
                <td>Member</td>
                <td>Non-Executive Director</td>
              </tr>
              <tr>
                <td>Siddhaarth Suri</td>
                <td>Member</td>
                <td>Non-Executive Director</td>
              </tr>
            </tbody>
          </table>
  
        </div>
      );
    }
    
    const currentItem = menuItems.find((item) => item.name === activeTab);
    if (currentItem?.file) {
      return (
        <div>
          <h2 className="content-title">{currentItem.name}</h2>
          <div className="content-container">
            <div className="content-box">{currentItem.name}</div>
            <div className="button-group">
              <a
                href={`/assets/${currentItem.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="view-button"
              >
                View <FiEye className="button-icon" />
              </a>
              <a
                href={`/assets/${currentItem.file}`}
                download
                className="download-button"
              >
                Download <FiDownload className="button-icon" />
              </a>
            </div>
          </div>
        </div>
      );
    }
  
    return <div className="content-title">{activeTab}</div>;
  };
  

  return (
    <div className="investor-relations">
      <h1 className="main-title">Investor Relations</h1>
      <hr />
      <div className="layout">
        <nav className="menu">
          <div className="menu-items">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`menu-item ${
                  activeTab === item.name ? 'menu-item-active' : ''
                }`}
              >
                {item.name}
                <span className="menu-item-icon">›</span>
              </button>
            ))}
          </div>
        </nav>
        <main className="content">{renderContent()}</main>
      </div>
    </div>
  );
}
