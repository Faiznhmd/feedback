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
    FetchFeedBack(); //eslint-disable-next-line
  }, []);

  //Fetch feedBack

  const FetchFeedBack = async () => {
    const response = await fetch(`/feedback`);
    const data = await response.json();
    // console.log(data);
    setFeedback(data);
    setLoading(false);
  };

  //DeletefeedBack
  const DeletefeedBack = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' });
      setFeedback(feedback.filter((item) => item._id !== id));
    }
  };

  //AddfeedBack
  const AddFeedBAck = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  //updateFeedBack
  const updateFeedBack = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();
    setFeedback(feedback.map((item) => (item._id === id ? data : item)));
  };

  //EditFeedBack
  // const EditFeedBack = (item) => {
  //   setFeedbackEdit({
  //     item,
  //     edit: true,
  //   });
  // };

  // setFeedbackEdit({
  //   item: {},
  //   edit: false,
  // });

  const EditFeedBack = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
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
