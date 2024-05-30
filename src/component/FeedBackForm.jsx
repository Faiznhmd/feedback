import { useState } from 'react';
import Card from './Shared/Card';
import Button from './Shared/Button';

const FeedBackForm = () => {
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
      setBtnDisabled(true);
    }

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
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message"> {message}</div>}
      </form>
    </Card>
  );
};

export default FeedBackForm;
