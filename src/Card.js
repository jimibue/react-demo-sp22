// props is always going to be an object {}
import React, { useState } from "react";
const Card = (props) => {
  // useState hook
  // useState return a piece of state and
  // a function to set that state
  // let [state, setState] = useState(initialState)
  // when this setState function is called
  // react render the component
  let [votes, setVotes] = useState(props.initialVotes || 0);
  let [showThing, setShowThing] = useState(false);
  const upVote = () => {
    setVotes(votes + 1);
  };
  const downVote = () => {
    if (votes == 0) {
      return;
    }
    setVotes(votes - 1);
  };
  return (
    <div className="container">
      <div className="bio">
        <h3 className="user-name">{props.name || "no name prop given"}</h3>
        <p>{props.about || "no about prop given"}</p>
        <p>votes: {votes}</p>
        <button onClick={upVote}>upvote</button>
        <button onClick={downVote}>downvote</button>
        <div>
          {showThing && <p>some other thing to show here</p>}
          <button
            onClick={() => {
              setShowThing(!showThing);
            }}
          >
            {showThing ? 'hide':'show'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;

// as a function declaration
// function Card(){
// return (
//     <div>
//         <h3>User name</h3>
//         <p>about user</p>
//     </div>
// )
// }
