import { FormDataConsumer, Edit, AutocompleteInput, ReferenceInput, DateInput, FileInput, BooleanInput, ImageField, SimpleForm, TextInput, required } from 'react-admin';

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
            <ReferenceInput source="seccion" reference="seccion">
                <AutocompleteInput optionText='nombre' />            
            </ReferenceInput>
            <ReferenceInput source="cargo" reference="cargo">
                <AutocompleteInput optionText='nombre' />            
            </ReferenceInput>
            <DateInput style={{width: '100%'}} source="fecha_ingreso" label="Fecha de ingreso" />
            <FileInput source="file" label="Foto personal" accept="image/*" >
                <ImageField source="file.src" title="file.title" />
            </FileInput>
            <BooleanInput label="Desvinculado?" source="desvinculado" />
            <FormDataConsumer>
                {({ formData }) => (
                formData.desvinculado && <DateInput style={{width: '100%'}} source="fecha_egreso" label="Fecha de desvinculación" validate={required()} />
                )}
            </FormDataConsumer>
        </SimpleForm>
    </Edit>
    )
}
