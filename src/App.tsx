import * as React from "react";
import { Admin, Resource } from "react-admin";
import fakeDataProvider from "ra-data-fakerest";
import data from "./testData";
import customers from "./views/customers";
import workers from "./views/workers";
import locations from "./views/locations";
import orders from "./views/orders";
import { GrUserWorker, GrUserManager, GrDocumentText } from "react-icons/gr";
import { IoBusinessSharp } from "react-icons/io5";

const dataProvider = fakeDataProvider(data);
const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource {...customers} name="customers" icon={GrUserManager} />
      <Resource {...workers} name="workers" icon={GrUserWorker} />
      <Resource {...locations} name="locations" icon={IoBusinessSharp} />
      <Resource {...orders} name="orders" icon={GrDocumentText} />
    </Admin>
  );
};

export default App;
