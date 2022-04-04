import React from "react";
import { Carousel } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import user2 from "../../assets/images/others/cvphoto.png";
import banner from "../../assets/images/others/review-banner.jpg";
import user1 from "../../assets/images/others/user-1.jpg";
import user3 from "../../assets/images/others/user-3.jpg";
import "./TopReviews.css";

const TopReviews = () => {
  return (
    <section className="top-reviews" data-aos="fade-up" data-aos-offset="200">
      <div className="review-banner">
        <img src={banner} alt="" />
      </div>
      <div className="review-carousel-container">
        <h2 className="text-center">Our Top Reviews</h2>
        <Carousel
          fade
          indicators={false}
          controls={false}
          className="review-carousel"
        >
          {/* -------------------------------------------------------------------------- */
          /*                                  REVIEW 1                                  */
          /* -------------------------------------------------------------------------- */}
          <Carousel.Item className="review-carousel-item">
            <div className="content">
              <h4>Highlight Rome</h4>
              <span>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
              <p className="mt-5">
                I went to Rome last December for three weeks with my family.
                After arriving in Rome we met with the owner of PANAGEA. We had
                lots of exciting times during our stay in Rome. Their service is
                good and they are well experienced in tourism all over the
                world.
              </p>

              <div className="happy-customer-name my-3">Hert Coney</div>
              <img src={user1} alt="" />
            </div>
          </Carousel.Item>

          {/* -------------------------------------------------------------------------- */
          /*                                  REVIEW 2                                  */
          /* -------------------------------------------------------------------------- */}
          <Carousel.Item className="review-carousel-item">
            <div className="content">
              <h4>Discover Narsingdi</h4>
              <span>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
              <p className="mt-5">
                I recommended the service of Adventure A++. All the arrangements
                were excellent and service was really great. The staffs were
                very professionals and their arrangement was Superb.
              </p>

              <div className="happy-customer-name my-3">Ashraful Islam</div>
              <img src={user2} alt="" />
            </div>
          </Carousel.Item>

          {/* -------------------------------------------------------------------------- */
          /*                                  REVIEW 3                                  */
          /* -------------------------------------------------------------------------- */}
          <Carousel.Item className="review-carousel-item">
            <div className="content">
              <h4>Explore Bangladesh</h4>
              <span>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
              <p className="mt-5">
                I would like to say thanks to PANAGEA for making my Bandarban
                trip so memorable. It was my first experience of booking my tour
                through any tour operator in Bangladesh.I would recommend this
                company to my friends for booking any of their tour in future.
              </p>

              <div className="happy-customer-name my-3">Roman Paolera</div>
              <img src={user3} alt="" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default TopReviews;
