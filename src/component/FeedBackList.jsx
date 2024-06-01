import FeedBackItem from './FeedBackItem';
import { useContext } from 'react';
import FeedBackContext from '../context/FeedbackContext';

const FeedBackList = () => {
  const { feedback } = useContext(FeedBackContext);

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedBackItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FeedBackList;

// import FeedBackItem from './FeedBackItem';

// const FeedBackList = ({ feedback, handleDelete }) => {
//   if (!feedback || feedback.length === 0) {
//     return <p>No Feedback yet</p>;
//   }

//   return (
//     <div className="feedback-list">
//       {feedback.map((item) => (
//         <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
//       ))}
//     </div>
//   );
// };

// export default FeedBackList;
