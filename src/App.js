import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "./routers/navigation";
import Routes from "./routers/routes";

function App() {
  return (
    <div>
      <header>
        <h1>React Concepts</h1>
      </header>

      <Router>
        <section>
          <Navigation />
          <Routes />
        </section>
      </Router>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
