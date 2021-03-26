import { Edit } from "ra-ui-materialui";
import { LocationsForm } from "./LocationsForm";

export const LocationsEdit = (props: any) => (
  <Edit {...props}>
    <LocationsForm {...props} />
  </Edit>
);
