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
          <div className="gallery-overlay" style={{ display: "flex" }} onClick={() => setSelectedImage(null)} />
          <div className="gallery-focus" style={{ display: "block" }}>
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
  )
}
