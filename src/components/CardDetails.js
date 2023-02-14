import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, ADD, REMOVE } from "../redux/actions/actions";

function CardDetails() {
  const [data, setData] = useState([]);
  // console.log(data);

  const { id } = useParams();
  // console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  const send = (e) => {
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <div className="container mt-2">
        <h2 className="text-center">Item Details</h2>
        <section className="container mt-3">
          <div
            className="itemsdetails"
            style={{ borderRadius: "10px", boxShadow: "2px" }}
          >
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img mx-3">
                    <img src={ele.imgdata} />
                  </div>
                  <div className="details">
                    <Table>
                      <tr>
                        <td className="mx-3">
                          <p>
                            <strong>{ele.rname} </strong>
                            
                          </p>
                          <p>
                            <strong>Price: </strong>${ele.price}
                          </p>
                          <p>
                            <strong>Category: </strong>
                            {ele.address}
                          </p>
                          <p>
                            <strong>Total: </strong>${ele.price * ele.qnty}
                          </p>
                          <div
                            className="mt-5 mx-2 d-flex justify-content-between align-items-center"
                            style={{
                              width: 80,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={
                                ele.qnty <= 1
                                  ? () => dlt(ele.id)
                                  : () => remove(ele)
                              }
                            >
                              -
                            </span>
                            <span className="mx-2" style={{ fontSize: 22 }}>
                              {ele.qnty}
                            </span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(ele)}
                            >
                              +
                            </span>
                          </div>
                        </td>
                        <td>
                          <p>
                            <strong>Ratings: </strong>
                            <span
                              style={{
                                background: "green",
                                padding: "3px 5px",
                                color: "#fff",
                                borderRadius: "5px",
                              }}
                            >
                              {ele.rating} <i class="fa-solid fa-star"></i>
                            </span>
                          </p>
                          <p>
                            <strong>Description: </strong>
                            {ele.somedata}
                          </p>
                          <p>
                            <strong>Remove: </strong>
                            <i
                              class="fa-solid fa-trash"
                              style={{ color: "red", cursor: "pointer" }}
                              onClick={() => dlt(ele.id)}
                            ></i>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

export default CardDetails;
