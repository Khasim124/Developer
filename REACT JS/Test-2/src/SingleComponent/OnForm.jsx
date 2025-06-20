import React from "react";
import Carousel from "react-bootstrap/Carousel";

const OnForm = () => {
  return (
    <div className="d-flex" style={{ height: "100vh", overflow: "hidden" }}>
      <div
        className="w-50 d-flex align-items-center justify-content-center bg-light"
        style={{ height: "100%" }}
      >
        <Carousel data-bs-theme="white" className="w-100 h-100">
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "100vh", objectFit: "cover" }}
              src="https://img.freepik.com/free-photo/silhouette-group-people-have-fun-top-mountain-near-tent-sunset_146671-18472.jpg?semt=ais_hybrid&w=740"
              alt="First slide"
            />
            <Carousel.Caption>
              <div style={{ textAlign: "left" }}>
                <h6>Travelling App 1</h6>
                <h3>
                  Meet people from all over the world and make lasting
                  relationships
                </h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "100vh", objectFit: "cover" }}
              src="https://parade.com/.image/t_share/MTkwNTgwOTY1ODExMTY4Mzgx/how-to-make-friends-jpg.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <div style={{ textAlign: "left", color: "black" }}>
                <h6>Travelling App 2</h6>
                <h3>
                  Meet people from all over the world and make lasting
                  relationships
                </h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "100vh", objectFit: "cover" }}
              src="https://st.depositphotos.com/1016676/4017/i/450/depositphotos_40175491-stock-photo-hikers.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <div style={{ textAlign: "left", color: "blue" }}>
                <h6>Travelling App 3</h6>
                <h3>
                  Meet people from all over the world and make lasting
                  relationships
                </h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{ height: "100vh", objectFit: "cover" }}
              src="https://thumbs.dreamstime.com/b/mountaineer-help-determination-accomplishment-together-268642249.jpg"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <div style={{ textAlign: "left" }}>
                <h6>Travelling App 4</h6>
                <h3>
                  Meet people from all over the world and make lasting
                  relationships
                </h3>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div
        className="w-50 d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <form
          className="my-4"
          style={{
            width: "75%",
            maxHeight: "100%",
            padding: "20px",
            boxSizing: "border-box",
            margin: "60px 0",
          }}
        >
          <h2 className="mb-2">Welcome back</h2>
          <p className="mb-3" style={{ fontSize: "0.9rem" }}>
            Travel like a local, begin connecting
          </p>

          <div className="mb-2">
            <input
              type="email"
              className="form-control"
              placeholder="Find in your email"
              style={{ height: "45px" }}
            />
          </div>

          <div className="mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Find in Your password"
              style={{ height: "45px" }}
            />
          </div>

          <div className="mb-2 d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Keep me logged in
              </label>
            </div>
            <span style={{ color: "orange", fontSize: "0.8rem" }}>
              I forgot my password
            </span>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mb-2"
            style={{
              height: "45px",
              backgroundColor: "orange",
              border: "none",
            }}
          >
            Log in
          </button>

          <div className="d-flex align-items-center my-2">
            <hr className="flex-grow-1" />
            <span className="mx-2" style={{ fontSize: "0.8rem" }}>
              or
            </span>
            <hr className="flex-grow-1" />
          </div>

          <button
            type="button"
            className="btn btn-primary w-100 mb-2 d-flex align-items-center justify-content-center"
            style={{
              height: "40px",
              backgroundColor: "#3b5998",
              border: "none",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook Logo"
              style={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
            Log in with Facebook
          </button>

          <button
            type="button"
            className="btn btn-light w-100 d-flex align-items-center justify-content-center"
            style={{
              height: "40px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              color: "black",
              marginTop: "20px",
              marginBottom: "60px",
            }}
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google Logo"
              style={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
            Log in with Google
          </button>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #ddd",
              margin: "10px 0",
              width: "100%",
            }}
          />

          <div
            className="mt-2 text-left"
            style={{
              fontSize: "0.85rem",
              whiteSpace: "nowrap",
            }}
          >
            Don't have an account yet?{" "}
            <span style={{ color: "orange", cursor: "pointer" }}>
              Join Travelling App
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnForm;
