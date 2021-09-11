import Clock from "./mainConcepts/StateAndProps";
import UserDetails from "./mainConcepts/ComponentsAndProps";

const userData = {
  firstname: "Jeevanath",
  lastname: "Gopalakrishnan",
  avator: "https://placekitten.com/g/150/150",
  date: new Date(),
};

const formatName = (person) => {
  return (
    <p>
      {person.firstname} {person.lastname}
    </p>
  );
};
const formatDate = (date) => {
  return date.toLocaleDateString();
};

function App() {
  return (
    <>
      <h1>React Concepts</h1>
      <Clock />
      <UserDetails
        name={formatName(userData)}
        avator={userData.avator}
        date={formatDate(userData.date)}
      />
      <hr />
    </>
  );
}

export default App;
