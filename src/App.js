import HeaderFunction from "./Header/Header";
import HeaderClass from "./Header/HeaderClass";
function App() {
  const compoentData = {
    functionComp: "Functional Component",
    classComp: "Class Component",
  };
  return (
    <>
      <h1>React Concepts</h1>
      <ol>
        <li>
          <HeaderFunction functionComp={compoentData.functionComp} />
        </li>
        <li>
          <HeaderClass classComp={compoentData.classComp} />
        </li>
      </ol>
    </>
  );
}

export default App;
