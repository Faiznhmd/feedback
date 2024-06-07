import { useContext } from 'react';
import FeedBackContext from '../context/FeedbackContext';

const FeedBackstat = () => {
  const { feedback } = useContext(FeedBackContext);

  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} : Reviews</h4>
      <h4> Average rating : {average}</h4>
    </div>
  );
};

export default FeedBackstat;

// const FeedBackstat = ({ feedback }) => {
//   let average =
//     feedback.reduce((acc, cur) => {
//       return acc + cur.rating;
//     }, 0) / feedback.length;
//   return (
//     <div className="feedback-stats">
//       <h4>{feedback.length} : Reviews</h4>
//       <h4> Average rating : {average}</h4>
//     </div>
//   );
// };

// export default FeedBackstat;
