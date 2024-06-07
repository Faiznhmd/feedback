import { FaTimes, FaEdit } from 'react-icons/fa';
import { useContext } from 'react';
import FeedBackContext from '../context/FeedbackContext';
import Card from './Shared/Card';

const FeedBackItem = ({ item }) => {
  const { DeletefeedBack, EditFeedBack } = useContext(FeedBackContext);

  return (
    <Card>
      <div className="num-display">{item.rating} </div>
      <button className="close" onClick={() => DeletefeedBack(item.id)}>
        <FaTimes color="purple" />
      </button>

      <button className="edit" onClick={() => EditFeedBack(item)}>
        <FaEdit color="purple" />
      </button>

      <div className="text-display">{item.text} </div>
    </Card>
  );
};

export default FeedBackItem;

// import { FaTimes } from 'react-icons/fa';
// import Card from './Shared/Card';

// const FeedBackItem = ({ item, handleDelete }) => {
//   return (
//     <Card>
//       <div className="num-display">{item.rating} </div>
//       <button className="close" onClick={() => handleDelete(item.id)}>
//         <FaTimes color="purple" />
//       </button>
//       <div className="text-display">{item.text} </div>
//     </Card>
//   );
// };

// export default FeedBackItem;
