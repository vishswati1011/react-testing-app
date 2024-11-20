import React from 'react'

const FeedbackOverview = ({feedbackList}) => {

  if(feedbackList && feedbackList?.length == 0){
    return <h3>No Feedback Found</h3>
  }

  return (
    <div>
      <h2>Feedback Overview</h2>
      <ul>
        {feedbackList && feedbackList.map((item)=>(
          <li key={item.id}>{item.feedbackText}</li>
        ))}
      </ul>
    </div>
  )
}

export default FeedbackOverview
