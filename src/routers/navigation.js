import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/ComponentsAndProps">Components And Props</Link>
        </li>
        <li>
          <Link to="/HandlingEvents">Handling Events</Link>
        </li>
        <li>
          <Link to="/ContionalRendering">Contional Rendering</Link>
        </li>
        <li>
          <Link to="/ListandKeys">List And Keys</Link>
        </li>
        <li>
          <Link to="/Forms">Forms</Link>
        </li>
        <li>
          <Link to="/LiftingStateUp">Lifting State Up</Link>
        </li>
        <li>
          <Link to="/CompositionVsInheritence">Composition Vs Inheritence</Link>
        </li>
        <li>
          <Link to="/ThinkingInReact">Thinking In React</Link>
        </li>
        <li>
          <Link to="/">Main Concepts</Link>
        </li>
      </ul>
    </nav>
  );
}
