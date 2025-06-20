import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    if (activeSection === "home") {
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
              <button
                className="btn btn-primary btn-sm"
                onClick={() => setActiveSection("Hire a pro")}
              >
                Hire a Pro
              </button>
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
                        ? "#007bff"
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
    } else {
      return (
        <div style={{ overflow: "auto", flex: 1, padding: "1rem" }}>
          <h1 className="mb-3">About {activeSection}</h1>
          <p>Information for {activeSection} goes here.</p>
        </div>
      );
    }
  };

  return (
    <div
      className="d-flex flex-column"
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        border: "40px solid rgb(127, 0, 255)",
        borderBottom: "0px",
        boxSizing: "border-box",
        paddingLeft: "5rem",
      }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light px-3"
        style={{ height: "60px" }}
      >
        <a
          className="navbar-brand"
          href="#"
          onClick={() => setActiveSection("home")}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1I205QZ99qj7_wn6a3s3RWikCwJ5WJ3QUUg&s"
            alt="Logo"
            style={{ height: "40px" }}
          />
        </a>

        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            {["home", "Employers", "Consultants", "Register"].map((item) => (
              <li className="nav-item" key={item}>
                <button
                  className="btn btn-link nav-link"
                  onClick={() => setActiveSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}

            <li className="nav-item">
              <button
                className="btn btn-primary ms-2 btn-sm"
                onClick={() => setActiveSection("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {renderSection()}
    </div>
  );
};

export default Navbar;
