import * as React from "react";
import { Admin, Resource } from "react-admin";
import fakeDataProvider from "ra-data-fakerest";
import data from "./testData";
import customers from "./views/customers";
import workers from "./views/workers";
import locations from "./views/locations";
import orders from "./views/orders";

const dataProvider = fakeDataProvider(data);
const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource {...customers} name="customers" />
      <Resource {...workers} name="workers" />
      <Resource {...locations} name="locations" />
      <Resource {...orders} name="orders" />
    </Admin>
  );
};

export default App;
