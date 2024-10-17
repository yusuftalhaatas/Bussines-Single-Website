"use client";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Startup Studio</h1>
        <p>Turning dreams into startups</p>
      </div>
      <style jsx>{`
        .hero {
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #000; /* Tamamen siyah arka plan */
          color: white;
          text-align: center;
          background: radial-gradient(
            circle at center,
            rgba(255, 255, 255, 0.1),
            rgba(0, 0, 0, 1) 50%
          ); /* İçe doğru hafif beyazlıkla kararan geçiş */
        }

        h1 {
          font-size: 4.5rem;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          font-family: "Poppins", sans-serif;
          letter-spacing: 0.1rem;
          color: #fff;
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* Yazıya siyah gölge */
          animation: fadeInDown 1s ease-in-out;
        }

        p {
          font-size: 1.8rem;
          font-family: "Roboto", sans-serif;
          font-weight: 300;
          letter-spacing: 0.05rem;
          color: rgba(255, 255, 255, 0.9); /* Daha belirgin beyaz */
          text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* Paragrafa siyah gölge */
          animation: fadeInUp 1.2s ease-in-out;
        }

        /* Fade in animasyonları */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 3rem;
          }
          p {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
}
