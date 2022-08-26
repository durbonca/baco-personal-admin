import React from 'react';
import { Edit, AutocompleteInput, ReferenceInput, DateInput, FileInput, ImageField, SimpleForm, TextInput, required } from 'react-admin';

export const PersonalEdit = (props) => {
    return (
        <Edit {...props}>
        <SimpleForm>
            <TextInput style={{width: '100%'}} source="nombre" validate={required()} />
            <TextInput style={{width: '100%'}} source="movil" />
            <DateInput style={{width: '100%'}} source="fecha_nacimiento" />
            <ReferenceInput source="nacionalidad" reference="nacionalidad">
                <AutocompleteInput optionText='pais' />            
            </ReferenceInput>
            <ReferenceInput source="cargo" reference="cargo">
                <AutocompleteInput optionText='nombre' />            
            </ReferenceInput>
            <DateInput style={{width: '100%'}} source="fecha_ingreso" label="Fecha de ingreso" />
            <DateInput style={{width: '100%'}} source="fecha_egreso" label="Fecha de desvinculación" />
            <FileInput source="file" label="Foto personal" accept="image/*" >
                <ImageField source="file.src" title="file.title" />
            </FileInput>
        </SimpleForm>
    </Edit>
    )
}
