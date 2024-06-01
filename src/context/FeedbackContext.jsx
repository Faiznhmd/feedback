import { useState, createContext } from 'react';

export const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [feedBack, setFeedBack] = useState([
    {
      id: 1,
      rating: 10,
      text: 'This text comes form context',
    },
    {
      id: 2,
      rating: 3,
      text: 'This text comes form context',
    },
    {
      id: 3,
      rating: 8,
      text: 'This text comes form context',
    },
  ]);

  return (
    <FeedBackContext.Provider value={{ feedBack }}>
      {children}
    </FeedBackContext.Provider>
  );
};
