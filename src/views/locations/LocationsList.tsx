import {
  Datagrid,
  FunctionField,
  List,
  ListProps,
  ReferenceField,
  TextField,
} from "ra-ui-materialui";

export const LocationsList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="streetAddress" />
      <TextField source="zipcode" />
      <TextField source="city" />
      <ReferenceField source="customer" reference="customers" link="show">
        <FunctionField
          render={(record: any) => `${record.firstName} ${record.lastName}`}
        />
      </ReferenceField>
    </Datagrid>
  </List>
);
