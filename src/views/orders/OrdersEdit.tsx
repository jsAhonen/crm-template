import { Edit } from "ra-ui-materialui";
import { OrdersForm } from "./OrdersForm";

export const OrdersEdit = (props: any) => (
  <Edit {...props}>
    <OrdersForm {...props} />
  </Edit>
);
