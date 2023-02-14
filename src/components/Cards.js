import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import CardsData from "./CardsData";
import "./style.css";
import { ADD } from "../redux/actions/actions";
import { NavLink } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState(CardsData);
  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  };
  
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  return (
    <div className="container mt-3">
      <h2 className="text-center mt-20">Product List</h2>
      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
          return (
            <>
              <Card
                style={{ width: "22rem", padding: 5, border: "none" }}
                className="mx-2 mt-3 card_style"
              >
                <NavLink to={`/cart/${element.id}`}>
                  <Card.Img
                    variant="top"
                    src={element.imgdata}
                    style={{ height: "20rem", padding: 10 }}
                    className="mt-1"
                  />
                </NavLink>
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                    Price: $ {element.price} <br></br>
                  </Card.Text>
                  <div className="button_div d-flex justify-content-center">
                    <Button
                      variant="primary"
                      className="col-lg-12"
                      style={{
                        backgroundColor: "black",
                        border: "none",
                        padding: 10,
                      }}
                      onClick={() => send(element)}
                    >
                      Add To Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
