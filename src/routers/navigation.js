import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <h3>Advanced Guides</h3>
      <ul>
        <li>
          <Link to="/advanced-concepts/code-splitting">Code Splitting</Link>
        </li>
      </ul>
      <h3>Main concepts</h3>
      <ul>
        <li>
          <Link to="/main-concepts/components-and-props">
            Components And Props
          </Link>
        </li>
        <li>
          <Link to="/main-concepts/handling-events">Handling Events</Link>
        </li>
        <li>
          <Link to="/main-concepts/contional-rendering">
            Contional Rendering
          </Link>
        </li>
        <li>
          <Link to="/main-concepts/list-and-keys">List And Keys</Link>
        </li>
        <li>
          <Link to="/main-concepts/forms">Forms</Link>
        </li>
        <li>
          <Link to="/main-concepts/lifting-state-up">Lifting State Up</Link>
        </li>
        <li>
          <Link to="/main-concepts/composition-vs-inheritence">
            Composition Vs Inheritence
          </Link>
        </li>
        <li>
          <Link to="/main-concepts/thinking-in-react">Thinking In React</Link>
        </li>
        <li>
          <Link to="/">Main Concepts</Link>
        </li>
      </ul>
    </nav>
  );
}
