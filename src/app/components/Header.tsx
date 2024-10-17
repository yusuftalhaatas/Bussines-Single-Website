"use client";

import Image from "next/image"; // Import the Image component

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Image
          src="/logo.png"
          alt="Appticos Logo"
          width={50} // Genişlik değeri
          height={50} // Yükseklik değeri
          className="logo-icon"
        />
        <span className="brand-name">Appticos</span>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#apps">Our Apps</a>
          </li>
          <li>
            <a href="#team">Our Team</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="language-switch">
        <button>EN</button>
        <button>TR</button>
      </div>

      <style jsx>{`
        header {
          background: black;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
        }

        .logo-icon {
          margin-right: 0.5rem; /* İkon ile yazı arasında boşluk */
        }

        .brand-name {
          font-size: 1.8rem;
          font-weight: 600;
          color: white;
          font-family: "Poppins", sans-serif; /* Poppins fontu */
        }

        nav {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        nav ul {
          display: flex;
          gap: 2rem;
          list-style: none;
        }

        nav a {
          color: white;
          text-decoration: none;
          font-size: 1.2rem;
        }

        .language-switch {
          display: flex;
          gap: 1rem;
        }

        button {
          background: none;
          color: white;
          border: 1px solid white;
          padding: 0.5rem 1rem;
        }
      `}</style>
    </header>
  );
}
