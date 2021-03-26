import { SimpleForm, TextInput } from "ra-ui-materialui";

export const CustomersForm = () => (
  <SimpleForm>
    <TextInput source="id" />
    <TextInput source="firstName" />
    <TextInput source="lastName" />
    <TextInput source="email" />
    <TextInput source="telephone" />
    <TextInput source="streetAddress" />
    <TextInput source="zipcode" />
    <TextInput source="city" />
  </SimpleForm>
);
