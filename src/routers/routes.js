import { Route, Switch } from "react-router-dom";
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
        <Route path="/HandlingEvents">
          <HandlingEvents />
        </Route>
        <Route path="/ContionalRendering">
          <ContionalRendering />
        </Route>
        <Route path="/ListandKeys">
          <ListandKeys />
        </Route>
        <Route path="/Forms">
          <Forms />
        </Route>
        <Route path="/LiftingStateUp">
          <LiftingStateUp />
        </Route>
        <Route path="/CompositionVsInheritence">
          <CompositionVsInheritence />
        </Route>
        <Route path="/ThinkingInReact">
          <FilterableProductTable />
        </Route>
        <Route path="/ComponentsAndProps">
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
