import {
  EmailField,
  Show,
  SimpleShowLayout,
  TextField,
} from "ra-ui-materialui";

export const WorkersShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <EmailField source="email" />
      <TextField source="telephone" />
      <TextField source="streetAddress" />
      <TextField source="zipcode" />
      <TextField source="city" />
    </SimpleShowLayout>
  </Show>
);
