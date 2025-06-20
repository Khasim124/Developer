import React from "react";
import Carousel from "react-bootstrap/Carousel";

const imageUrls = [
  "https://img.freepik.com/free-photo/silhouette-group-people-have-fun-top-mountain-near-tent-sunset_146671-18472.jpg?semt=ais_hybrid&w=740",
  "https://parade.com/.image/t_share/MTkwNTgwOTY1ODExMTY4Mzgx/how-to-make-friends-jpg.jpg",
  "https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40175491-stock-photo-hikers.jpg",
  "https://thumbs.dreamstime.com/b/mountaineer-help-determination-accomplishment-together-268642249.jpg",
];

const title = "Travelling App";
const caption =
  "Meet people from all over the world and make lasting relationships";

const CarouselSection = () => {
  return (
    <Carousel className="w-100 h-100">
      {imageUrls.map((url, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src={url}
            alt={`Travel slide ${index + 1}`}
          />
          <Carousel.Caption style={{ textAlign: "left" }}>
            <h6>{title}</h6>
            <h3>{caption}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselSection;
