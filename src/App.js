import "./App.css";
import Card from "./Card";
import CardInline from "./CardInline";
import JSXDemo from "./JSXDemo";
let users = [
  { id: 1, name: "Bob", about: "likes to Fish", initialVotes: 2 },
  { id: 2, name: "Jill", about: "likes to Swim", initialVotes: 10 },
  { id: 3, name: "George", about: "likes to Code and Paint", initialVotes: 5 },
  { id: 4, name: "Sally", about: "likes to Paint" },
];

function App() {
  const renderUsers = () => {
    return users.map((user) => {
      return (
        <Card
          key={user.id}
          initialVotes={user.initialVotes}
          name={user.name}
          about={user.about}
        />
      );
    });
  };

  return (
    <>
      <h1>App</h1>
      {/* <Card name='Bob' about='likes to fish' />
      <Card name='Jill' about='likes to swim'/> */}
      {renderUsers()}

      {/* <JSXDemo /> */}
    </>
  );
}

export default App;
