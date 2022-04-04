import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { PuffLoader } from "react-spinners";
import Banner from "../../Components/Banner/Banner";
import Statistics from "../../Components/Statistics/Statistics";
import TopReviews from "../../Components/TopReviews/TopReviews";
import Tour from "../../Components/Tour/Tour";
import "./Home.css";

const Home = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("http://localhost:5000/home/tours")
        .then((data) => {
          setTours(data.data);
          setLoading(false);
        });
    }, 1500);
  }, []); //get add popular tours from DB

  return (
    <div className="home">
      <Banner></Banner>

      <section className="popular-tours">
        <h1 className="text-center">Our Popular Tours</h1>
        {loading ? (
          <div className="spinner-box">
            <PuffLoader color="#fc5b62" />
          </div>
        ) : (
          <div className="container mt-4">
            <Row xs={1} md={2} lg={3} className="g-lg-5 g-4">
              {tours.map((tour) => (
                <Col key={tour._id}>
                  <Tour tour={tour}></Tour>
                </Col>
              ))}
            </Row>
          </div>
        )}
      </section>

      <TopReviews></TopReviews>
      <Statistics></Statistics>
    </div>
  );
};

export default Home;
