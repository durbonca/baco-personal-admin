import { Create, SimpleForm, TextInput, required } from 'react-admin';

export const SeccionCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nombre" label="Sección" validate={required()} />
        </SimpleForm>
    </Create>
);