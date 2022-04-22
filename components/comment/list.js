import React from "react";

import CommentItem from "./item";
export const CommentList = ({ comments }) => {
  if (!comments.length) {
    return <div className="comment">No Comment...</div>;
  }
  return (
    <ul className="list-group list-group-flush">
      {comments.map((comment, index) => (
        <li className="list-group-item" key={index}>
          <CommentItem author={comment.author} text={comment.text} />
        </li>
      ))}
    </ul>
  );
};
