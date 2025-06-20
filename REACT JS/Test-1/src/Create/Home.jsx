import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div style={{ overflow: "auto", flex: 1, padding: "1rem" }}>
      <h1 className="mb-3">About Home</h1>

      <div className="row align-items-center mb-4">
        <div className="col-md-6">
          <h2 className="fw-bold">Get critical work done faster.</h2>
          <p>
            Hire experienced pros with confidence using the smartest remote
            talent platform.
          </p>
          <Link to="/contact" className="btn btn-primary btn-sm">
            Hire a Pro
          </Link>
        </div>
        <div className="col-md-6 text-center">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/773360140/display_1500/stock-photo-close-up-portrait-of-smiling-successful-woman-in-casual-outfit-looking-at-her-tablet-and-typing-sms-773360140.jpg"
            alt="Professional"
            className="img-fluid"
            style={{ maxHeight: "200px", width: "500px" }}
          />
        </div>
      </div>

      <div className="row text-center">
        {[
          {
            img: "https://png.pngtree.com/element_our/png/20181008/star-logo-design-png_123799.jpg",
            title: "Find a pro in a trusted network",
            text: "Get unmatched quality from proven independent professionals and specialized agencies.",
          },
          {
            img: "https://www.shutterstock.com/image-vector/b-letter-on-square-600nw-742730539.jpg",
            title: "Get in contact instantly",
            text: "Connect with a potential employee with a few clicks and discuss your project right away.",
          },
          {
            img: "https://as1.ftcdn.net/jpg/01/96/21/46/1000_F_196214661_LKZTtsAtygWvNvQ1uBZ9USXo59YzXzQj.jpg",
            title: "Approve reports every week",
            text: "Receive reports with the logged hours spent on the project from your hire once per week.",
          },
        ].map((item, index) => (
          <div className="col-4 p-0" key={index}>
            <div
              className="h-100 d-flex flex-column align-items-center"
              style={{
                border: "1px solid #dee2e6",
                borderBottom: "none",
                backgroundColor:
                  item.title === "Approve reports every week"
                    ? "red"
                    : "transparent",
                color:
                  item.title === "Approve reports every week"
                    ? "#fff"
                    : "inherit",
                padding: "1rem",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ width: "50px", height: "50px" }}
              />
              <h6 className="mt-2">{item.title}</h6>
              <small>{item.text}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
