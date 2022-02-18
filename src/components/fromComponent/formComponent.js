import React, { useState } from "react";
import "./formComponent.scss";

const FormComponent = ({ handleAddFeedback }) => {
  let ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleRating = (value) => {
    if (value === rating) {
      setRating(0);
    } else {
      setRating(value);
    }
  };

  const handleFeedbackContent = (e) => {
    setFeedback(e.target.value);
  };

  const handleSend = () => {
    let feed = feedback;
    feed = feed.trim();
    if (rating < 1 || feed === "") {
      return alert("Please give the rating and fill the field");
    }
    handleAddFeedback({ rating, feedback });
    setFeedback("");
    setRating(0);
  };

  return (
    <div className="form_container">
      <div className="form">
        <div className="title-container">
          How would you rate your service with us ?
        </div>
        <div className="rating-container">
          {ratings.map((it, index) => (
            <div
              className={`number ${rating >= it ? "active" : ""} `}
              onClick={() => handleRating(it)}
              key={index}
            >
              {it}
            </div>
          ))}
        </div>
        <div className="input-btn-container">
          <input
            value={feedback}
            placeholder="Enter your feedback"
            onChange={handleFeedbackContent}
          />
          <button className="send-btn" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
