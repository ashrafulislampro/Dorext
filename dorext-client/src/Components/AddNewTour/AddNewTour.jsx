import React from "react";
import "./AddNewTour.css";
import { useForm } from "react-hook-form";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
import axios from "axios";
import popupSuccess from "../../popup/popupSuccess";

const AddNewTour = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm(); //import from react hook form

  const onSubmit = (data) => {
    const newTour = {
      name: data.name,
      category: data.category,
      img: data.img,
      description: data.description,
      price: Number(data.price),
      rating: Number(data.rating),
      reviews: Number(data.reviews),
      duration: Number(data.duration),
    }; //new tour object information

    axios
      .post("https://shrieking-corpse-81438.herokuapp.com/tours", newTour)
      .then((data) => {
        const isAdded = data.data.insertedId;
        if (isAdded) {
          popupSuccess("new tour");
          reset();
        }
      }); //adding new tour on DB & received confirmation response
  };

  return (
    <section className="add-new-tour" data-aos="fade-up">
      <h1>Add New Tour</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3" xs={1} lg={3}>
          {/* -------------------------------------------------------------------------- */
          /*                                 TITLE FIELD                                */
          /* -------------------------------------------------------------------------- */}
          <Form.Group as={Col} controlId="formGridName">
            <FloatingLabel controlId="floatingInput" label="Tour Title">
              <Form.Control
                type="name"
                placeholder="title"
                {...register("name", { required: true })}
              />
              {errors.name?.type === "required" && (
                <small>Title is required.</small>
              )}
            </FloatingLabel>
          </Form.Group>

          {/* -------------------------------------------------------------------------- */
          /*                               IMAGE URL FIELD                              */
          /* -------------------------------------------------------------------------- */}
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel controlId="floatingInput" label="Tour Banner Url">
              <Form.Control
                type="name"
                placeholder="url"
                {...register("img", { required: true })}
              />
            </FloatingLabel>
            {errors.img?.type === "required" && (
              <small>Image is required.</small>
            )}
          </Form.Group>

          {/* -------------------------------------------------------------------------- */
          /*                               CATEGORY FIELD                               */
          /* -------------------------------------------------------------------------- */}
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel controlId="floatingInput" label="Choose Category">
              <Form.Select
                defaultValue="Choose..."
                {...register("category", { required: true })}
              >
                <option value="explore">Explore</option>
                <option value="popular">Popular</option>
                <option value="adventure">Adventure</option>
              </Form.Select>
              {errors.category?.type === "required" && (
                <small>Category is required.</small>
              )}
            </FloatingLabel>
          </Form.Group>
        </Row>

        {/* -------------------------------------------------------------------------- */
        /*                              DESCRIPTION FIELD                             */
        /* -------------------------------------------------------------------------- */}
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <FloatingLabel
            controlId="floatingInput"
            label="Description (minimum 200 words)"
          >
            <Form.Control
              as="textarea"
              style={{ height: "100px" }}
              {...register("description", { required: true })}
            />
            {errors.description?.type === "required" && (
              <small>Description is required.</small>
            )}
          </FloatingLabel>
        </Form.Group>

        <Row className="mb-3" xs={2} lg={4}>
          {/* -------------------------------------------------------------------------- */
          /*                                 PRICE FIELD                                */
          /* -------------------------------------------------------------------------- */}
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel controlId="floatingInput" label="Prices">
              <Form.Select
                defaultValue="Choose..."
                {...register("price", { required: true })}
              >
                <option value="200">200</option>
                <option value="250">250</option>
                <option value="300">300</option>
                <option value="350">350</option>
                <option value="400">400</option>
                <option value="450">450</option>
                <option value="500">500</option>
                <option value="550">550</option>
                <option value="600">600</option>
                <option value="650">650</option>
              </Form.Select>
              {errors.price?.type === "required" && (
                <small>Price is required.</small>
              )}
            </FloatingLabel>

            {/* -------------------------------------------------------------------------- */
            /*                                PACKAGE FIELD                               */
            /* -------------------------------------------------------------------------- */}
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel controlId="floatingInput" label="Choose Package">
              <Form.Select
                defaultValue="Choose..."
                {...register("duration", { required: true })}
              >
                <option value="2">2 Days 1 Night</option>
                <option value="3">3 Days 2 Night</option>
                <option value="5">5 Days 4 Night</option>
              </Form.Select>
              {errors.duration?.type === "required" && (
                <small>Package is required.</small>
              )}
            </FloatingLabel>
          </Form.Group>

          {/* -------------------------------------------------------------------------- */
          /*                                RATING FIELD                                */
          /* -------------------------------------------------------------------------- */}
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel controlId="floatingInput" label="Ratings">
              <Form.Select
                defaultValue="Choose..."
                {...register("rating", { required: true })}
              >
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="2.5">2.5</option>
                <option value="3">3</option>
                <option value="3.5">3.5</option>
                <option value="4">4</option>
                <option value="4.5">4.5</option>
                <option value="5">5</option>
              </Form.Select>
              {errors.rating?.type === "required" && (
                <small>Ratings is required.</small>
              )}
            </FloatingLabel>
          </Form.Group>

          {/* -------------------------------------------------------------------------- */
          /*                             TOTAL REVIEW FIELD                             */
          /* -------------------------------------------------------------------------- */}
          <Form.Group as={Col} controlId="formGridEmail">
            <FloatingLabel controlId="floatingInput" label="Total Reviews">
              <Form.Select
                defaultValue="Choose..."
                {...register("reviews", { required: true })}
              >
                <option value="0">0</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </Form.Select>
              {errors.reviews?.type === "required" && (
                <small>Review is required.</small>
              )}
            </FloatingLabel>
          </Form.Group>
        </Row>

        <button className="btn-book" type="submit">
          Add Tour
        </button>
      </Form>
    </section>
  );
};

export default AddNewTour;
