import React from "react";

import instagram from "../../Images/Messengers/instagram.png";
import facebook from "../../Images/Messengers/facebook.png";
import telegram from "../../Images/Messengers/telegram.png";
import watsap from "../../Images/Messengers/watsap.png";
import x from "../../Images/Messengers/x.png";
import youtube from "../../Images/Messengers/youtube.png";

const MainLayout = ({ children }) => {
  const information = [
    { id: 1, text: "About us" },
    { id: 2, text: "To partners" },
    { id: 3, text: "FAQ" },
    { id: 4, text: "News" },
    { id: 5, text: "Reviews" },
    { id: 6, text: "Contact" },
  ];

  const Documentation = [
    { id: 1, text: "User Agreement" },
    { id: 2, text: "Company's KYC and AML Policy" },
    { id: 3, text: "Document Verification" },
    { id: 4, text: "Exchange Rules" },
    { id: 5, text: "Complaint Handling Policy" },
    { id: 6, text: "Risk Warning" },
  ];

  const Messengers = [
    { id: 1, image: instagram, href: "https://www.instagram.com/" },
    { id: 2, image: facebook, href: "https://www.facebook.com/" },
    { id: 3, image: telegram, href: "https://web.telegram.org/" },
    { id: 4, image: watsap, href: "" },
    { id: 5, image: x, href: "" },
    { id: 6, image: youtube, href: "https://www.youtube.com/" },
  ];
  return (
    <div>
      <main
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "20px",
          marginTop: "20px",
          padding: "0 200px",
        }}
      >
        <div style={{ flex: 1, maxWidth: "400px", padding: "10px" }}>
          <h2>Information</h2>
          <div>
            {information.map((item) => (
              <button
                key={item.id}
                style={{
                  display: "block",
                  marginBottom: "10px",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, maxWidth: "400px", padding: "10px" }}>
          <h2>Documentation</h2>
          <div>
            {Documentation.map((item) => (
              <button
                key={item.id}
                style={{
                  display: "block",
                  marginBottom: "10px",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, maxWidth: "400px", padding: "10px" }}>
          <h2>Our address</h2>
          <div>
            <p>Tenzor exchange Sp. z o.o.</p>
            <h4>Via Anton Maria Viani Mantovo</h4>
            <p>Registration Number</p>
            <p>KRS: 0001104492</p>
            <p>NIP: 7011204307</p>
          </div>
        </div>
        <div style={{ flex: 1, maxWidth: "400px", padding: "10px" }}>
          <h2>Working Hours</h2>
          <div>
            <p>Service operates 24/7</p>
            <p>Technical Support</p>
            <h4>from 08:00 to 20:00 (UTC+2)</h4>
            <p>nikitaknutarev6@gmail.com</p>
          </div>
        </div>
      </main>
      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 200px",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          {Messengers.map((item) => (
            <a
              href={item.href}
              key={item.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={item.image}
                alt={`Messenger ${item.id}`}
                style={{ width: "46px", height: "46px" }}
              />
            </a>
          ))}
        </div>
        <div>
          <p>©2024 All rights reserved Tenzor</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
