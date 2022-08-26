import React from 'react';
import { Edit, SimpleForm, TextInput, required } from 'react-admin';

export const NacionalidadEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="pais" label="País de origen" validate={required()} />
        </SimpleForm>
    </Edit>
);