import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackOverview from "./components/FeedbackOverview";
function App() {

  const [feedbacks,setFeedbacks]= useState([]);
  // const feedbackList = [
  //   {id:111,feedbackText:'Food was too spicy'},
  //   {id:222,feedbackText:'Staff should be more polite'},
  //   {id:333,feedbackText:'Price was high'}
  // ]
  return (
    <div className="App" data-testid="parent-div">
       <FeedbackForm setFeedbacks={setFeedbacks}/>
       <FeedbackOverview feedbackList={feedbacks}/>
    </div>
  );
}

export default App;
