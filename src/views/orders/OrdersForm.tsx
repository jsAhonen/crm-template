import {
  DateInput,
  ReferenceArrayInput,
  ReferenceInput,
  SelectArrayInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "ra-ui-materialui";

export const OrdersForm = (props: any) => (
  <SimpleForm {...props}>
    <TextInput source="id" />
    <DateInput source="date" />
    <TextInput source="title" />
    <TextInput source="status" />
    <TextInput source="description" />
    <ReferenceInput source="location" reference="locations">
      <SelectInput optionText="streetAddress" />
    </ReferenceInput>
    <ReferenceArrayInput source="workers" reference="workers">
      <SelectArrayInput optionText="firstName" />
    </ReferenceArrayInput>
  </SimpleForm>
);
