import { Create } from "ra-ui-materialui";
import { CustomersForm } from "./CustomersForm";

export const CustomersCreate = (props: any) => (
  <Create {...props}>
    <CustomersForm />
  </Create>
);
