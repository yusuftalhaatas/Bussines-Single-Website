"use client";

import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-content">
        <p className="footer-text">Turning dreams into startups</p>
        <p className="footer-email">
          Mail: <a href="mailto:hey@appictos.com">hey@appticos.com</a>
        </p>
        <address className="footer-address">
          Address: Bahçelievler – İstanbul
        </address>
        <div className="footer-social">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Appticos. All rights reserved.</p>
      </div>
      <style jsx>{`
        footer {
          padding: 4rem 2rem;
          background: linear-gradient(
            135deg,
            #000,
            #1a1a1a
          ); /* Gradient arka plan */
          color: white;
          text-align: center;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        /* Background efekti */
        footer::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: 300px;
          height: 300px;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transform: translateX(-50%);
          filter: blur(80px);
          z-index: 0;
        }

        .footer-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
          padding-bottom: 2rem;
          border-bottom: 1px solid #333;
        }

        .footer-text {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #f1f1f1;
          letter-spacing: 0.1rem;
          text-transform: uppercase;
        }

        .footer-email {
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }

        .footer-email a {
          color: #00aaff;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .footer-email a:hover {
          color: #0088cc;
        }

        .footer-address {
          font-size: 1.1rem;
          color: #ccc;
          margin-bottom: 2rem;
        }

        .footer-social {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .footer-social a {
          color: white;
          font-size: 2rem;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .footer-social a:hover {
          transform: translateY(-5px);
          color: #00aaff;
        }

        .footer-bottom {
          padding-top: 1rem;
          font-size: 1rem;
          color: #666;
        }

        @media (max-width: 768px) {
          footer {
            padding: 2rem 1rem;
          }

          .footer-text {
            font-size: 1.5rem;
          }

          .footer-email,
          .footer-address {
            font-size: 1rem;
          }

          .footer-social a {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </footer>
  );
}
