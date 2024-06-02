import { useState, useContext, useEffect } from 'react';
import FeedBackContext from '../context/FeedbackContext';
import Card from './Shared/Card';
import Button from './Shared/Button';
import RatingSelect from './RatingSelect';

const FeedBackForm = () => {
  const { AddFeedBAck, feedbackEdit, updateFeedBack } =
    useContext(FeedBackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const [text, setText] = useState('');

  const [btnDisabled, setBtnDisabled] = useState(true);

  const [message, setMessage] = useState('');

  const [rating, setRating] = useState(10);

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be at least 10 Character');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  //feedback add
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedBack(feedbackEdit.item.id, newFeedback);
      } else {
        AddFeedBAck(newFeedback);
      }

      setText('');
      // console.log(newFeedback);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How Would you rate your service with us ?</h2>

        {/* //Rating */}

        <RatingSelect select={(rating) => setRating(rating)} />

        <div className="input-group">
          <input
            type="text"
            placeholder="Write a Review"
            onChange={handleTextChange}
            value={text}
          />
          <Button version="primary" type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedBackForm;

// import { useState } from 'react';
// import Card from './Shared/Card';
// import Button from './Shared/Button';
// import RatingSelect from './RatingSelect';

// const FeedBackForm = ({ addForm }) => {
//   const [text, setText] = useState('');

//   const [btnDisabled, setBtnDisabled] = useState(true);

//   const [message, setMessage] = useState('');

//   const [rating, setRating] = useState(10);

//   const handleTextChange = (e) => {
//     if (text === '') {
//       setBtnDisabled(true);
//       setMessage(null);
//     } else if (text !== '' && text.trim().length <= 10) {
//       setMessage('Text must be at least 10 Character');
//       setBtnDisabled(true);
//     } else {
//       setMessage(null);
//       setBtnDisabled(false);
//     }

//     setText(e.target.value);
//   };

//   //feedback add
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (text.trim().length > 10) {
//       const newFeedback = {
//         text,
//         rating,
//       };
//       addForm(newFeedback);
//       setText('');
//       // console.log(newFeedback);
//     }
//   };

//   return (
//     <Card>
//       <form onSubmit={handleSubmit}>
//         <h2>How Would you rate your service with us ?</h2>

//         {/* //Rating */}

//         <RatingSelect select={(rating) => setRating(rating)} />

//         <div className="input-group">
//           <input
//             type="text"
//             placeholder="Write a Review"
//             onChange={handleTextChange}
//             value={text}
//           />
//           <Button version="primary" type="submit" isDisabled={btnDisabled}>
//             Send
//           </Button>
//         </div>
//         {message && <div className="message">{message}</div>}
//       </form>
//     </Card>
//   );
// };

// export default FeedBackForm;
