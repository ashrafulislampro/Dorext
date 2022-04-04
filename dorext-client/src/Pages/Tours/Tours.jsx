import axios from "axios";
import React from "react";
import "./Tours.css";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Tour from "../../Components/Tour/Tour";
import { PuffLoader } from "react-spinners";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get("https://shrieking-corpse-81438.herokuapp.com/tours")
        .then((data) => {
          setTours(data.data);
          setLoading(false);
        });
    }, 1500);
  }, []); //get all tours from dB

  return (
    <section className="tours">
      <h1 className="text-center">All Tours</h1>

      {loading ? (
        <div className="spinner-box">
          <PuffLoader color="#fc5b62" />
        </div>
      ) : (
        <div className="container mt-3">
          <Row xs={1} md={2} lg={3} className="g-4">
            {tours.map((tour) => (
              <Col key={tour._id}>
                <Tour tour={tour}></Tour>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </section>
  );
};

export default Tours;
