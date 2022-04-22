import React from "react";
import User from "../Image/User.jpg";
const CommentItem = ({ author, text }) => {
  return (
    <div className="row">
      <div className="col-2">
        <img src={User} alt={User} className="responsive-img" width="100%" />
      </div>
      <div className="col-10">
        <h3 className="heading">{author}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default CommentItem;
