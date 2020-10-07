import React from "react";

import List from "@components/List";

import data from '../../data/data.json';

function App() {
  return (
    <React.Fragment>
      <List data={data}/>
    </React.Fragment>
  );
}

export default React.memo(App);
