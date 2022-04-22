import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router";

import { CommentList, CreateComment } from "../components/comment";

import { cartStore, productService, addToCart } from "../components/product";
export const DetailPage = () => {
  //for find id in details
  const [detail, setDetail] = useState([]);
  const [data, setData] = useState();
  const { detailId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/`)
      .then((response) => setDetail(response.data[detailId - 1]));
  }, [detail]);
  console.log(detail);
  const AddToCarthandle = () => {
    cartStore.dispatch(addToCart(data));
  };
  const submitComment = async (comment) => {
    const response = await productService.addComment(data.id, comment);
    if (response.status === 200) {
      const { data } = await productService.getComments(data.id);
      setData({ data: { ...data, comments: data } });
    }
  };

  if (!detail) {
    return <div className="text-center mt-5">Loading...</div>;
  }
  console.log(detail);

  return (
    <Fragment>
      <div className="row">
        <div className="col-5">
          <img src={detail.pic} width="100%" alt={detail.title} />
        </div>
        <div className="col-7">
          <h1>{detail.title}</h1>
          <p>{detail.desc}</p>
          <strong>{detail.price}</strong>
          <br />
          <button
            onClick={AddToCarthandle}
            className="btn btn-primary btn-lg mt-5"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto">
          {/*<CommentList comments={comments || []} />*/}
          <hr className="my-5" />
          <CreateComment onComment={submitComment} />
        </div>
      </div>
    </Fragment>
  );
};
