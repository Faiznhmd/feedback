import { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedBackContext = createContext();

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

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

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

  //EditFeedBack
  const EditFeedBack = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //updateFeedBack
  const updateFeedBack = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedBackContext.Provider
      value={{
        feedback,
        DeletefeedBack,
        AddFeedBAck,
        EditFeedBack,
        feedbackEdit,
        updateFeedBack,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};

export default FeedBackContext;
