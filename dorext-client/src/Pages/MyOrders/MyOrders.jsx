import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import img from "../../assets/images/others/no-order.svg";
import MyOrderList from "../../Components/MyOrderList/MyOrderList";
import useAll from "../../hooks/useAll";
import popupSuccess from "../../popup/popupSuccess";
import "./MyOrders.css";

const MyOrders = () => {
  const { user } = useAll();
  console.log(user);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://shrieking-corpse-81438.herokuapp.com/my_order/${user?.email}`
      )
      .then((data) => {
        setMyOrders(data.data);
      });
  }, []); //get current user placed orders..

  const name = myOrders[0]?.name;
  const email = myOrders[0]?.email;
  const address = myOrders[0]?.address;

  /* --------------------------------------------------------------------------*/
  /*                         DELETE A ORDER FUNCTIONALITY                        */
  /* -------------------------------------------------------------------------- */
  const handleOrderDelete = (id) => {
    Swal.fire({
      title: "Do you want to cancel this order?",
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
              const remaining = myOrders.filter((order) => order._id !== id);
              setMyOrders(remaining);
            }
          });
      }
    });
  };

  return (
    <section className="my-orders" data-aos="fade-in">
      {myOrders.length ? (
        <>
          <div className="user-orders">
            <h1 className="text-center mb-4"> My Orders</h1>
            <div className="user-info d-lg-flex align-items-center">
              <h4>Name : {name}</h4>
              <h4>Email : {email}</h4>
              <h4>Address : {address}</h4>
              <h4> Total Orders : {myOrders.length}</h4>
            </div>
            <ul data-aos="fade-up">
              {myOrders.map((order) => (
                <MyOrderList
                  key={order._id}
                  order={order}
                  handleOrderDelete={handleOrderDelete}
                ></MyOrderList>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="no-order">
          <h1>No Orders added yet!</h1>
          <img src={img} alt="" />
        </div>
      )}
    </section>
  );
};

export default MyOrders;
