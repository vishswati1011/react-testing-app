import React, { useState } from "react";

const FeedbackForm = ({setFeedbacks}) => {
  const [feedbackText, setFeedbackText] = useState("");
  const [tncBox, setTncBox] = useState(false);

  const submitFeedback = () => {
    console.log("Feedback submitted!");
    setFeedbacks((prev)=>[...prev,{id:Date.now(),feedbackText:feedbackText}]);
    setFeedbackText("");
  };

  return (
    <div className="feedback-container">
      <h2>Feedback Form</h2>
      <br />
      <input
        type="text"
        placeholder="Enter you feedback here"
        value={feedbackText}
        onChange={(e) => setFeedbackText(e.target.value)}
        defaultValue={"new feedback"}
      />
      <br />
      <input
        id="tncBox"
        type="checkbox"
        defaultChecked={tncBox}
        onChange={() => setTncBox(!tncBox)}
      />{" "}
      <label htmlFor="tncBox">I accept the terms and conditions</label>
      <br />
      <button
        onClick={() => submitFeedback()}
        disabled={!tncBox || !feedbackText}
      >
        {" "}
        Add Feedback
      </button>
    </div>
  );
};

export default FeedbackForm;
