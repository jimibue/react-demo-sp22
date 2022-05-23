// props is always going to be an object {}

const Card = (props) => {
  return (
      <div className="container">
          <div className="bio">
          <h3 className="user-name">{props.name || 'no name prop given'}</h3>
          <p>{props.about || 'no about prop given'}</p>
          <p>votes: 0</p>
          <button>upvote</button>
          <button>downvote</button>
          </div>
      </div>
  )
}

export default Card

// as a function declaration
// function Card(){
    // return (
    //     <div>
    //         <h3>User name</h3>
    //         <p>about user</p>
    //     </div>
    // )
// }