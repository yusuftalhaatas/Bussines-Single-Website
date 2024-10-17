"use client";

export default function MissionSection() {
  return (
    <section className="mission-section">
      <div className="mission-container">
        <div className="mission-item">
          <h3>Who We Are</h3>
          <p>
            We are a startup studio that develops digital, global, and creative
            mobile applications with big goals.
          </p>
        </div>
        <div className="mission-item">
          <h3>Our Mission</h3>
          <p>
            We transform talented young people and experienced professionals
            into entrepreneurs.
          </p>
        </div>
        <div className="mission-item">
          <h3>Core Values</h3>
          <p>
            We ensure that every Appictos entrepreneur becomes the CEO of a new
            startup.
          </p>
        </div>
      </div>

      <style jsx>{`
        .mission-section {
          padding: 5rem 1rem;
          background-color: #f8f9fa;
          text-align: center;
        }

        .mission-container {
          display: flex;
          justify-content: space-between;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .mission-item {
          flex: 1;
          padding: 2rem;
          background-color: #fff;
          border-radius: 15px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .mission-item:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        h3 {
          font-size: 2rem; /* Daha büyük başlık */
          margin-bottom: 1rem;
          font-weight: 800; /* Daha kalın başlık */
          color: #000; /* Başlıkları tamamen siyah yaptık */
        }

        p {
          font-size: 1.2rem;
          color: #333;
          font-weight: 600; /* Paragrafları daha koyu hale getirdik */
          line-height: 1.6;
        }

        /* Mobile uyum için */
        @media (max-width: 768px) {
          .mission-container {
            flex-direction: column;
          }

          h3 {
            font-size: 1.5rem;
          }

          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
