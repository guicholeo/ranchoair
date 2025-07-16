"use client"

import { useState } from "react"
import Image from "next/image"

const projectImages = [
  "commercial.jpg",
  "finance.jpeg",
  "inside.jpeg",
  "inside1.jpeg",
  "inside2.jpeg",
  "inside3.jpg",
  "inside4.jpeg",
  "inside5.jpeg",
  "insideroof.jpeg",
  "insideroof2.jpg",
  "insidework.jpg",
  "installation.jpg",
  "landing.jpeg",
  "maintance.jpg",
  "newconstruction.jpg",
  "outside1.jpeg",
  "outside2.jpeg",
  "outside3.jpeg",
  "outside4.jpg",
  "outside6.jpg",
  "outsiderepair.jpg",
  "outsidework2.jpg",
  "repair.jpeg",
  "repair2.jpg",
  "repair3.jpeg",
  "sales.jpg",
  "sales2.jpeg",
]

export default function ProjectsGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <>
      <style jsx>{`
        .gallery-section {
          background-color: var(--black);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding: 80px 0;
        }

        .gallery-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          column-count: 4;
          column-gap: 20px;
          position: relative;
        }

        .gallery-image {
          break-inside: avoid;
          margin-bottom: 20px;
          border-radius: 8px;
          overflow: hidden;
          position: relative;
          transition: all 0.3s ease;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          opacity: 0.9;
          display: inline-block;
          width: 100%;
        }

        .gallery-image:hover {
          opacity: 1;
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
        }

        .gallery-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.9);
          z-index: 1000;
          display: ${selectedImage ? "flex" : "none"};
          align-items: center;
          justify-content: center;
        }

        .gallery-focus {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1001;
          display: ${selectedImage ? "block" : "none"};
          text-align: center;
          max-width: 90vw;
          max-height: 90vh;
        }

        .gallery-focus-close {
          position: absolute;
          top: -15px;
          right: -15px;
          width: 30px;
          height: 30px;
          background-color: rgba(47, 160, 172, 0.8);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          color: white;
          cursor: pointer;
          z-index: 1002;
          transition: background-color 0.3s ease;
        }

        .gallery-focus-close:hover {
          background-color: var(--red);
        }

        @media (max-width: 1200px) {
          .gallery-container {
            column-count: 3;
          }
        }

        @media (max-width: 992px) {
          .gallery-container {
            column-count: 2;
          }
        }

        @media (max-width: 576px) {
          .gallery-container {
            column-count: 1;
          }
        }
      `}</style>

      <section className="gallery-section">
        <div className="gallery-container">
          {projectImages.map((image, index) => (
            <div key={index} className="gallery-image" onClick={() => setSelectedImage(image)}>
              <Image
                src={`/pics/${image}`}
                alt={`Project Image ${index + 1}`}
                width={400}
                height={300}
                style={{ width: "100%", height: "auto" }}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <>
            <div className="gallery-overlay" onClick={() => setSelectedImage(null)} />
            <div className="gallery-focus">
              <div className="gallery-focus-close" onClick={() => setSelectedImage(null)}>
                &times;
              </div>
              <Image
                src={`/pics/${selectedImage}`}
                alt="Focused Project Image"
                width={800}
                height={600}
                style={{
                  maxWidth: "90vw",
                  maxHeight: "80vh",
                  width: "auto",
                  height: "auto",
                  borderRadius: "4px",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
                }}
              />
            </div>
          </>
        )}
      </section>
    </>
  )
}
