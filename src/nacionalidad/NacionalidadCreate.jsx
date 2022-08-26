import React from 'react';
import { Create, SimpleForm, TextInput, required } from 'react-admin';

export const NacionalidadCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="pais" label="País de origen" validate={required()} />
        </SimpleForm>
    </Create>
);