import { Create } from "ra-ui-materialui";
import { WorkersForm } from "./WorkersForm";

export const WorkersCreate = (props: any) => (
  <Create {...props}>
    <WorkersForm />
  </Create>
);
