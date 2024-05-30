import { useState } from 'react';
import Card from './Shared/Card';
import Button from './Shared/Button';

const FeedBackForm = () => {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How Would you rate your service with us ?</h2>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a Review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" version="primary">
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedBackForm;
