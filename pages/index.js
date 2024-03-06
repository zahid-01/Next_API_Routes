import axios from "axios";
import { useRef, useState } from "react";

function HomePage() {
  const [feedbacks, setFeedbacks] = useState([]);

  const emailRef = useRef();
  const feedbackRef = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredFeedback = feedbackRef.current.value;

    axios({
      method: "POST",
      url: "/api/feedback",
      data: {
        enteredEmail,
        enteredFeedback,
      },
    }).then(
      () => {},
      (err) => {
        console.log(err);
      }
    );
  };

  const getFeedbacks = () => {
    axios({
      method: "GET",
      url: "/api/feedback",
    }).then(
      (res) => {
        console.log(res.data.data);
        setFeedbacks(res.data.data);
      },
      () => {
        console.log("Something went wrong!");
      }
    );
  };

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Enter your email here</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Enter your feedback here</label>
          <textarea rows="5" id="feedback" ref={feedbackRef} />
        </div>
        <button>Send your feedback</button>
      </form>
      <hr />
      <button onClick={getFeedbacks}>Get Feedbacks</button>
      <ul>
        {feedbacks.map((el) => {
          let count = 0;
          return <li key={el.enteredEmail}>{el.enteredFeedback}</li>;
        })}
      </ul>
    </div>
  );
}

export default HomePage;
