import { Edit } from "ra-ui-materialui";
import { CustomersForm } from "./CustomersForm";

export const CustomersEdit = (props: any) => (
  <Edit {...props}>
    <CustomersForm {...props} />
  </Edit>
);
