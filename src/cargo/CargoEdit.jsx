import { Edit, SimpleForm, TextInput, required } from 'react-admin';

export const CargoEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nombre" label="Titulo" validate={required()} />
        </SimpleForm>
    </Edit>
);