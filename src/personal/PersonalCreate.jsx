import { Create, SimpleForm, TextInput, DateInput, FileInput, ImageField, required, ReferenceArrayInput, AutocompleteArrayInput } from 'react-admin';

export const PersonalCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput style={{width: '100%'}} source="nombre" validate={required()} />
            <TextInput style={{width: '100%'}} source="movil" />
            <DateInput style={{width: '100%'}} source="fecha_nacimiento" />
            <ReferenceArrayInput source="nacionalidad" reference="nacionalidad">
                <AutocompleteArrayInput optionText='pais' />            
            </ReferenceArrayInput>
            <ReferenceArrayInput source="seccion" reference="seccion">
                <AutocompleteArrayInput optionText='nombre' />            
            </ReferenceArrayInput>
            <ReferenceArrayInput source="cargo" reference="cargo">
                <AutocompleteArrayInput optionText='nombre' />            
            </ReferenceArrayInput>
            <DateInput style={{width: '100%'}} source="fecha_ingreso" label="Fecha de ingreso" />
            <DateInput style={{width: '100%'}} source="fecha_egreso" label="Fecha de desvinculación" />
            <FileInput style={{width: '100%'}} source="file" label="Imagenes" accept="image/*" >
                <ImageField source="file.src" title="file.title" />
            </FileInput>
        </SimpleForm>
    </Create>
);