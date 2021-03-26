import {
  Datagrid,
  EmailField,
  List,
  ListProps,
  TextField,
} from "ra-ui-materialui";

export const WorkersList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="firstName" />
      <TextField source="lastName" />
      <EmailField source="email" />
      <TextField source="telephone" />
      <TextField source="streetAddress" />
      <TextField source="zipcode" />
      <TextField source="city" />
    </Datagrid>
  </List>
);
