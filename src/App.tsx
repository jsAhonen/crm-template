import * as React from "react";
import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
        name="users"
      />
      <Resource
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
        name="posts"
      />
      <Resource
        list={ListGuesser}
        edit={EditGuesser}
        show={ShowGuesser}
        name="comments"
      />
    </Admin>
  );
};

export default App;
