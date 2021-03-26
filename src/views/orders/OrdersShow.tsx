import {
  Datagrid,
  DateField,
  FunctionField,
  ReferenceArrayField,
  ReferenceField,
  Show,
  ShowButton,
  SimpleShowLayout,
  TextField,
} from "ra-ui-materialui";

export const OrdersShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="date" />
      <TextField source="title" />
      <TextField source="status" />
      <TextField source="description" />
      <ReferenceField source="location" reference="locations" link="show">
        <FunctionField
          render={(record: any) => `${record.streetAddress}, ${record.city}`}
        />
      </ReferenceField>
      <ReferenceArrayField source="workers" reference="workers">
        <Datagrid>
          <FunctionField
            render={(record: any) => `${record.firstName} ${record.lastName}\n`}
          />
          <ShowButton />
        </Datagrid>
      </ReferenceArrayField>
    </SimpleShowLayout>
  </Show>
);
