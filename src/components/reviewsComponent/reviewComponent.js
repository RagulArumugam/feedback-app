import React from "react";
import "./reviewComponent.scss";
import { FaTrashAlt } from "react-icons/fa";
import Animate from "react-smooth/lib/Animate";

const ReviewComponent = ({ feedback, handleDelete }) => {
  let total = 0;
  feedback.map((item) => {
    total = item.rating + total;
  });
  const avg = total / feedback.length;
  return (
    <div className="review_container">
      <div className="info_container">
        <div>{feedback.length} Feedbacks</div>
        <div>Average Rating: {feedback.length > 0 ? avg.toFixed(1) : 0}</div>
      </div>
      {feedback.map((item, index) => (
        <Animate from={{ opacity: 0 }} to={{ opacity: 1 }} easing="ease-in">
          <div className="review-card">
            <div className="notation">{item.rating}</div>
            <div className="opertion-bar" onClick={() => handleDelete(item.id)}>
              <FaTrashAlt color="#f04444" size={"20px"} />
            </div>
            <div className="review-content">{item.feedback}</div>
          </div>
        </Animate>
      ))}
    </div>
  );
};

export default ReviewComponent;
