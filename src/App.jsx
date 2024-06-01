import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './component/Header';
import FeedBackList from './component/FeedBackList';
import data from './data/FeedbackData';
import './App.css';
import FeedBackstat from './component/FeedBackstat';
import FeedBackForm from './component/FeedBackForm';
import About from './component/Pages/About';
import Post from './component/Pages/Post';
import { FeedBackProvider } from './context/FeedbackContext';

function App() {
  const [feedback, setFeedback] = useState(data);

  return (
    <FeedBackProvider>
      <Router>
        <Link to={{ pathname: '/' }}>
          <Header text={'Faizan App'} />
        </Link>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedBackForm />

                  <FeedBackstat />

                  <FeedBackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<About />} />
            <Route path="/post/:id/:name" element={<Post />} />
          </Routes>
        </div>
      </Router>
    </FeedBackProvider>
  );
}

export default App;

// import { v4 as uuidv4 } from 'uuid';
// import { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Header from './component/Header';
// import FeedBackList from './component/FeedBackList';
// import data from './data/FeedbackData';
// import './App.css';
// import FeedBackstat from './component/FeedBackstat';
// import FeedBackForm from './component/FeedBackForm';
// import About from './component/Pages/About';
// import Post from './component/Pages/Post';

// function App() {
//   const [feedback, setFeedback] = useState(data);

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

//   return (
//     <Router>
//       <Link to={{ pathname: '/' }}>
//         <Header text={'Faizan App'} />
//       </Link>
//       <div className="container">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <FeedBackForm addForm={AddFeedBAck} />

//                 <FeedBackstat feedback={feedback} />

//                 <FeedBackList
//                   feedback={feedback}
//                   handleDelete={DeletefeedBack}
//                 />
//               </>
//             }
//           ></Route>
//           <Route path="/about" element={<About />} />
//           <Route path="/post/:id/:name" element={<Post />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
