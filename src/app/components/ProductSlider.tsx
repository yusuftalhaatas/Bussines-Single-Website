"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "TechNova",
    description:
      "Innovative solutions for modern tech challenges, leveraging cutting-edge technologies.",
    image: "/product-1.jpg",
    label: "INNOVATION",
    backgroundColor: "#60A5FA", // Canlı açık mavi ton
  },
  {
    id: 2,
    title: "EduSphere",
    description:
      "A comprehensive platform for online education, connecting students and educators worldwide.",
    image: "/product-2.jpg",
    label: "EDUCATION",
    backgroundColor: "#1E3A8A", // Koyu mavi ton
  },
];

export default function ProductSlider() {
  return (
    <section className="product-slider" id="apps">
      <h2>Appictos Startups</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div
              className="product-card"
              style={{ backgroundColor: product.backgroundColor }}
            >
              <div className="product-info">
                <span className="product-label">{product.label}</span>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
              <div className="image-container">
                <div className="image-wrapper">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={400}
                    height={300}
                    className="product-image"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .product-slider {
          text-align: center;
          padding: 4rem 1rem; /* Adjusted padding for mobile */
          background-color: #f8f9fa;
          margin: 0 1rem; /* Adjusted margin for mobile */
        }

        h2 {
          font-size: 2rem; /* Adjusted font size for mobile */
          margin-bottom: 1.5rem; /* Adjusted margin for mobile */
        }

        .product-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #f8f9fa;
          border-radius: 20px; /* Adjusted border radius for mobile */
          padding: 1.5rem; /* Adjusted padding for mobile */
          transition: transform 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          color: #fff; /* Beyaz yazı rengi */
          height: auto; /* Adjusted height for mobile */
          flex-direction: column; /* Stack items vertically on mobile */
        }

        .product-info {
          text-align: center; /* Center text on mobile */
          margin-bottom: 1rem; /* Add margin for spacing */
        }

        .product-label {
          display: inline-block;
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          margin-bottom: 1rem;
        }

        h3 {
          font-size: 1.5rem; /* Adjusted font size for mobile */
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 1rem;
        }

        .image-container {
          display: flex;
          justify-content: center;
          padding: 1rem;
        }

        .image-wrapper {
          position: relative;
          width: 100%; /* Full width on mobile */
          height: auto; /* Auto height on mobile */
          border-radius: 20px; /* Fotoğrafın köşelerini ovalleştiriyoruz */
          overflow: hidden; /* Taşmaları gizlemek için */
        }

        .product-image {
          object-fit: cover; /* Görüntüyü tam olarak alanı dolduracak şekilde yerleştirir */
          width: 100%; /* Full width on mobile */
          height: auto; /* Auto height on mobile */
        }

        @media (min-width: 768px) {
          .product-card {
            flex-direction: row; /* Row direction on larger screens */
            text-align: left; /* Left align text on larger screens */
          }

          .image-wrapper {
            width: 400px; /* Görüntü genişliği */
            height: 300px; /* Görüntü yüksekliği */
          }
        }
      `}</style>
    </section>
  );
}
