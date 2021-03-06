import { useState } from "react"
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"

function App() {

  const [feedback, setFeedBack] = useState(FeedbackData)

const deleteFeedback = (id) => {
  if (window.confirm('Are you sure you want to delete?')) {
    setFeedBack(feedback.filter((item)=> item.id !== id))
  }
}

  return (
    <>
      <Header/>
      <FeedbackStats feedback={feedback}/>
      <div className="container">
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    </>
  )
}

export default App
