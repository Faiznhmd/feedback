import { useState } from 'react';
import Card from './Shared/Card';

const FeedBackForm = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How Would you rate your servuce with us ?</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a Review"
            onChange={handleTextChange}
            value={text}
          />
          <button type="submit"> Send</button>
        </div>
      </form>
    </Card>
  );
};

export default FeedBackForm;
