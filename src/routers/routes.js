import { Route, Switch } from "react-router-dom";

import CodeSplitting from "../advancedGuides/CodeSplitting";

import UserDetails from "../mainConcepts/ComponentsAndProps";
import userData from "../mainConcepts/data/userDetails";
import HandlingEvents from "../mainConcepts/HandlingEvents";
import ContionalRendering from "../mainConcepts/ConditionalRendering";
import ListandKeys from "../mainConcepts/ListAndKeys";
import Forms from "../mainConcepts/Forms";
import LiftingStateUp from "../mainConcepts/LiftingStateUp";
import CompositionVsInheritence from "../mainConcepts/CompositionVsInheritence";
import FilterableProductTable from "../mainConcepts/ThinkingInReact";

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

function AllComponents() {
  return (
    <div>
      <FilterableProductTable />
      <CompositionVsInheritence />
      <LiftingStateUp />
      <Forms />
      <ListandKeys />
      <ContionalRendering />
      <HandlingEvents />
      <UserDetails
        name={formatName(userData)}
        avator={userData.avator}
        date={formatDate(userData.date)}
      />
    </div>
  );
}

export default function Routes() {
  return (
    <article>
      <Switch>
        <Route path="/advanced-concepts/code-splitting">
          <CodeSplitting />
        </Route>
        <Route path="/main-concepts/handling-events">
          <HandlingEvents />
        </Route>
        <Route path="/main-concepts/contional-rendering">
          <ContionalRendering />
        </Route>
        <Route path="/main-concepts/list-and-keys">
          <ListandKeys />
        </Route>
        <Route path="/main-concepts/forms">
          <Forms />
        </Route>
        <Route path="/main-concepts/lifting-state-up">
          <LiftingStateUp />
        </Route>
        <Route path="/main-concepts/composition-vs-inheritence">
          <CompositionVsInheritence />
        </Route>
        <Route path="/main-concepts/thinking-in-react">
          <FilterableProductTable />
        </Route>
        <Route path="/main-concepts/components-and-props">
          <UserDetails
            name={formatName(userData)}
            avator={userData.avator}
            date={formatDate(userData.date)}
          />
        </Route>
        <Route path="/">
          <AllComponents />
        </Route>
      </Switch>
    </article>
  );
}
