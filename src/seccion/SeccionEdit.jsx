import { Edit, SimpleForm, TextInput, required } from 'react-admin';

export const SeccionEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nombre" label="Sección" validate={required()} />
        </SimpleForm>
    </Edit>
);