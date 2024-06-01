import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This text comes form context',
      rating: 10,
    },
    {
      id: 2,
      text: 'This text comes form context',
      rating: 3,
    },
  ]);

  //DeletefeedBack
  const DeletefeedBack = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //AddfeedBack
  const AddFeedBAck = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedBackContext.Provider
      value={{
        feedback,
        DeletefeedBack,
        AddFeedBAck,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};
