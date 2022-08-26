import { Create, SimpleForm, TextInput, required } from 'react-admin';

export const CargoCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="nombre" label="Titulo" validate={required()} />
        </SimpleForm>
    </Create>
);