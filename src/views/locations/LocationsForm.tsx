import { SimpleForm, TextInput } from "ra-ui-materialui";

export const LocationsForm = (props: any) => (
  <SimpleForm {...props}>
    <TextInput source="id" />
    <TextInput source="streetAddress" />
    <TextInput source="zipcode" />
    <TextInput source="city" />
    <TextInput source="customer" />
  </SimpleForm>
);
