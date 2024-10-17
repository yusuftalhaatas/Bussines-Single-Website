"use client";

import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Yusuf Talha Atas",
      role: "Founder",
      linkedin: "https://www.linkedin.com/in/yusuftalhaatas/",
      image: "yusuf-talha-atas.jpeg",
    },
  ];

  return (
    <section className="team-section" id="team">
      <h2>Our Team</h2>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <Image
              src={`/team/${member.image}`}
              alt={member.name}
              width={150}
              height={150}
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        ))}
      </div>
      <style jsx>{`
        .team-section {
          padding: 4rem 0;
          background-color: #f8f9fa;
          text-align: center;
        }

        h2 {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-weight: 700;
          color: #333;
        }

        .team-members {
          display: flex;
          justify-content: center;
          gap: 2rem;
        }

        .team-member {
          background-color: #ffffff;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
          max-width: 250px;
        }

        .team-member:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }

        img {
          border-radius: 50%;
          width: 150px;
          height: 150px;
          object-fit: cover;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        h3 {
          margin-top: 1rem;
          font-size: 1.5rem;
          font-weight: 600;
          color: #333;
        }

        p {
          font-size: 1rem;
          color: #666;
          margin-bottom: 1rem;
        }

        a {
          color: #007bff;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        a:hover {
          color: #0056b3;
        }

        @media (max-width: 768px) {
          .team-members {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
