import React, { useState } from "react";

export const CreateComment = ({ onComment }) => {
  const [commentChange, setCommentChange] = useState({
    comment: {},
    errors: {},
  });
  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid()) {
      onComment(commentChange.comment);
      setCommentChange({ comment: {}, errors: {} });
    }
  };
  const changeHandler = (event) => {
    const formData = { [event.target.name]: event.target.value };
    setCommentChange({
      ...commentChange,
      comment: { ...commentChange.comment, ...formData },
    });
  };
  const formIsValid = () => {
    const errors = {};
    if (!commentChange.comment.author) {
      errors.author = "Name is required";
    }
    if (!commentChange.comment.text) {
      errors.text = "Text is required";
    }
    setCommentChange({ ...commentChange, errors });
    return !(errors.author || errors.text);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label>Name</label>
        <input
          onChange={changeHandler}
          type="text"
          name="author"
          className="form-control"
          value={commentChange.comment.author || ""}
        />
        <small className="form-text text-danger">
          {commentChange.errors.author}
        </small>
      </div>
      <div className="form-group">
        <label className="form-label">Enter your review</label>
        <textarea
          onChange={changeHandler}
          className="form-control"
          rows="5"
          name="text"
          value={commentChange.comment.text || ""}
        ></textarea>
        <small className="form-text text-danger">
          {commentChange.errors.text}
        </small>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
