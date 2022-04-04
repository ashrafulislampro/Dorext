import React from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";
import { useHistory } from "react-router";
import "./Tour.css";

const Tour = ({ tour }) => {
  const {
    img,
    name,
    description,
    category,
    price,
    duration,
    rating,
    reviews,
    _id,
  } = tour;

  const history = useHistory();
  const url = `/tour/booking/${_id}`;
  // console.log(url)
  const handleGoToBooking = () => {
    history.push(url);
  };
  return (
    <Card className="tour justify-content-between" data-aos="zoom-in">
      <Card.Img variant="top" src={img} />
      <Card.Body className=" d-flex flex-column justify-content-between">
        <Card.Title className="title d-flex justify-content-between align-items-center">
          {name}

          {/* -------------------------------------------------------------------------- */
          /*                     SET STYLES DEPEND ON TOUR CATEGORY                     */
          /* -------------------------------------------------------------------------- */}
          {category === "popular" && (
            <span className="popular-box">
              {category} <i className="fas fa-fire ms-2"></i>
            </span>
          )}
          {category === "adventure" && (
            <span className="adventure-box">
              {category} <i className="fas fa-biohazard ms-2"></i>
            </span>
          )}
          {category === "explore" && (
            <span className="explore-box">
              {category} <i className="fas fa-dove ms-2"></i>
            </span>
          )}
        </Card.Title>
        <Card.Text className="description ">
          {description.slice(0, 150)}..
          <h6 className="tour-price">
            Starting from :{" "}
            <span>
              ${price} / {duration} day
            </span>
          </h6>
          <div className="review-box mt-2 ">
            <button onClick={handleGoToBooking} className="btn-book">
              Book Now
            </button>
            <div className="total-reviews">
              <Rating
                readonly
                className="star"
                initialRating={rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
              />

              <span className="total">
                <i className="fas fa-users"></i> {reviews}
              </span>
            </div>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Tour;
