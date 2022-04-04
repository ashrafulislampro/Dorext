import axios from "axios";
import "./AllOrders.css";
import React, { useEffect, useState } from "react";
import AllOrderItem from "../AllOrderItem/AllOrderItem";
import Swal from "sweetalert2";
import popupSuccess from "../../popup/popupSuccess";

const AllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://shrieking-corpse-81438.herokuapp.com/all_orders")
      .then((data) => setAllOrders(data.data));
  }, []); //get all orders from DB

  /* -------------------------------------------------------------------------- */
  /*                        DELETE A ORDER FUNCTIONALITY                       */
  /* -------------------------------------------------------------------------- */
  const handleOrderDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://shrieking-corpse-81438.herokuapp.com/my_order_list/${id}`
          )
          .then((data) => {
            console.log(data);
            const isDeleted = data.data.deletedCount;

            if (isDeleted) {
              popupSuccess("removed");
              const remaining = allOrders.filter((order) => order._id !== id);
              setAllOrders(remaining);
            }
          });
      }
    });
  };

  return (
    <ul className="all-orders" data-aos="fade-up">
      <h1>All Orders</h1>
      {allOrders.map((order, index) => (
        <AllOrderItem
          key={order._id}
          order={order}
          index={index}
          handleOrderDelete={handleOrderDelete}
        ></AllOrderItem>
      ))}
    </ul>
  );
};

export default AllOrders;
