import { useState, createContext, useEffect } from 'react';

const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    FetchFeedBack();
  }, []);

  //Fetch feedBack

  const FetchFeedBack = async () => {
    const response = await fetch(
      `http://localhost:5000/feedback?_sort=id&_order=desc`
    );
    const data = await response.json();
    setFeedback(data);
    setLoading(false);
  };
  //DeletefeedBack
  const DeletefeedBack = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //AddfeedBack
  const AddFeedBAck = async (newFeedback) => {
    const response = await fetch('http://localhost:5000/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
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
        loading,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};

export default FeedBackContext;

// import { useState, createContext } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// const FeedBackContext = createContext();

// export const FeedBackProvider = ({ children }) => {
//   const [feedback, setFeedback] = useState([
//     {
//       id: 1,
//       text: 'This text comes form context',
//       rating: 10,
//     },
//     {
//       id: 2,
//       text: 'This text comes form context',
//       rating: 3,
//     },
//   ]);

//   const [feedbackEdit, setFeedbackEdit] = useState({
//     item: {},
//     edit: false,
//   });

//   //DeletefeedBack
//   const DeletefeedBack = (id) => {
//     if (window.confirm('Are you sure you want to delete?')) {
//       setFeedback(feedback.filter((item) => item.id !== id));
//     }
//   };

//   //AddfeedBack
//   const AddFeedBAck = (newFeedback) => {
//     newFeedback.id = uuidv4();
//     setFeedback([newFeedback, ...feedback]);
//   };

//   //EditFeedBack
//   const EditFeedBack = (item) => {
//     setFeedbackEdit({
//       item,
//       edit: true,
//     });
//   };

//   //updateFeedBack
//   const updateFeedBack = (id, updItem) => {
//     setFeedback(
//       feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
//     );
//   };

//   return (
//     <FeedBackContext.Provider
//       value={{
//         feedback,
//         DeletefeedBack,
//         AddFeedBAck,
//         EditFeedBack,
//         feedbackEdit,
//         updateFeedBack,
//       }}
//     >
//       {children}
//     </FeedBackContext.Provider>
//   );
// };

// export default FeedBackContext;
