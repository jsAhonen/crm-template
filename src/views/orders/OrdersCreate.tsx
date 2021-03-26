import { Create } from "ra-ui-materialui";
import { OrdersForm } from "./OrdersForm";

export const OrdersCreate = (props: any) => (
  <Create {...props}>
    <OrdersForm />
  </Create>
);
