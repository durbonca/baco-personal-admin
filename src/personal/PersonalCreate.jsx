import { FormDataConsumer, Create, SimpleForm, TextInput, DateInput, FileInput, BooleanInput, ImageField, required, ReferenceInput, AutocompleteInput } from 'react-admin';

export const PersonalCreate = (props) => {
    return (
    <Create {...props}>
        <SimpleForm>
            <TextInput style={{width: '100%'}} source="nombre" validate={required()} />
            <TextInput style={{width: '100%'}} source="movil" />
            <DateInput style={{width: '100%'}} source="fecha_nacimiento" validate={required()} />
            <ReferenceInput source="nacionalidad" reference="nacionalidad">
                <AutocompleteInput optionText='pais' />            
            </ReferenceInput>
            <ReferenceInput source="seccion" reference="seccion">
                <AutocompleteInput optionText='nombre' />            
            </ReferenceInput>
            <ReferenceInput source="cargo" reference="cargo">
                <AutocompleteInput optionText='nombre' />            
            </ReferenceInput>
            <DateInput style={{width: '100%'}} source="fecha_ingreso" label="Fecha de ingreso" validate={required()} />
            <FileInput style={{width: '100%'}} source="file" label="Imagenes" accept="image/*" validate={required()} >
                <ImageField source="file.src" title="file.title"  />
            </FileInput>

            <BooleanInput label="Desvinculado?" source="desvinculado"
            />
            <FormDataConsumer>
                {({ formData }) => (
                formData.desvinculado && <DateInput style={{width: '100%'}} source="fecha_egreso" label="Fecha de desvinculación" validate={required()} />
                )}
            </FormDataConsumer>
        </SimpleForm>
    </Create>
)};