import {
  FunctionField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "ra-ui-materialui";

export const LocationsShow = (props: any) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="streetAddress" />
      <TextField source="zipcode" />
      <TextField source="city" />
      <ReferenceField source="customer" reference="customers" link="show">
        <FunctionField
          render={(record: any) => `${record.firstName} ${record.lastName}`}
        />
      </ReferenceField>
    </SimpleShowLayout>
  </Show>
);
