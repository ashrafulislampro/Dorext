import React from "react";
import "./MyOrderList.css";

const MyOrderList = ({ order, handleOrderDelete }) => {
  const { date, status, tour, _id } = order;
  const { name, img, price, duration } = tour;

  return (
    <li className="my_orders-list">
      <div className="image-box">
        <img src={img} alt="" />
        {status === "pending" && <p className="pending"></p>}
        {status === "confirm" && <p className="confirm"></p>}
      </div>

      <h5> {name}</h5>
      <h6>Order Date : {date}</h6>
      <h6 className="price">
        Package : ${price} / {duration} day
      </h6>
      <button onClick={() => handleOrderDelete(_id)} className="btn-delete">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};

export default MyOrderList;
