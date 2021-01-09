import React from "react";
import { Router } from "@reach/router";
import Search from "./Search";
import state from "./state";
import Person from "./Person";
import Planet from "./Planet";
import NotFound from "./NotFound";

const App = () => {
  const {
    data,
    setData,
    getData,
    selection,
    updateSelection,
    id,
    updateId,
  } = state();

  return (
    <>
      <Search
        selection={selection}
        updateSelection={updateSelection}
        id={id}
        updateId={updateId}
        path="/"
      />
      <Router>
        <Person
          data={data}
          getData={getData}
          setData={setData}
          path="/people/:id"
        />
        <Planet
          data={data}
          getData={getData}
          setData={setData}
          path="/planets/:id"
        />
        <NotFound path="/error" />
      </Router>
    </>
  );
};

export default App;
