import { Edit } from "ra-ui-materialui";
import { WorkersForm } from "./WorkersForm";

export const WorkersEdit = (props: any) => (
  <Edit {...props}>
    <WorkersForm {...props} />
  </Edit>
);
