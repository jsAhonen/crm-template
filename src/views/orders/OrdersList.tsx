import {
  Datagrid,
  DateField,
  List,
  ListProps,
  TextField,
} from "ra-ui-materialui";

export const OrdersList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <DateField source="date" />
      <TextField source="title" />
      <TextField source="status" />
      <TextField source="description" />
    </Datagrid>
  </List>
);
