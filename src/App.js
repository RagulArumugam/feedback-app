import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import ReviewComponent from "./components/reviewsComponent/reviewComponent";
import FormComponent from "./components/fromComponent/formComponent";
import data from "./data/data.json";
import { v4 } from "uuid";

function App() {
  const [feedback, setFeedback] = useState(data);

  const handleAddFeedback = (data) => {
    let d = data;
    d.id = v4();
    let newData = [...feedback, d];
    setFeedback(newData);
  };

  const handleDelete = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <FormComponent handleAddFeedback={handleAddFeedback} />
      <ReviewComponent feedback={feedback} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
