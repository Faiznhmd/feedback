import { useState } from 'react';
import Header from './component/Header';
import FeedBackList from './component/FeedBackList';
import data from './data/FeedbackData';
import './App.css';

function App() {
  const [feedback, setFeedback] = useState(data);

  return (
    <>
      <Header text={'Faizan App'} />
      <div className="container">
        <FeedBackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
