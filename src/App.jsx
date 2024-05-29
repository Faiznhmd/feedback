import { useState } from 'react';
import Header from './component/Header';
import FeedBackList from './component/FeedBackList';
import data from './data/FeedbackData';
import './App.css';
import FeedBackstat from './component/FeedBackstat';
import FeedBackForm from './component/FeedBackForm';

function App() {
  const [feedback, setFeedback] = useState(data);

  const DeletefeedBack = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header text={'Faizan App'} />
      <div className="container">
        <FeedBackForm />
        <FeedBackstat feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={DeletefeedBack} />
      </div>
    </>
  );
}

export default App;
