import React from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css";

const images: string[] = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
];

const ImageCarousel: React.FC = () => {
  return (
    <Carousel autoplay>
      {images.map((src, index) => (
        <div key={index}>
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            style={{ width: "100%", height: "400px", objectFit: "cover" }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
