import { List, Datagrid, TextField, DateField, ImageField, TopToolbar, CreateButton, ReferenceField, BooleanField} from 'react-admin';

const ListActions = (props) => {
  return (
  <TopToolbar>
      <CreateButton label="Agregar"/>
  </TopToolbar>)
};

export const PersonalList = (props) => {
  return (
    <List {...props} title="Lista del personal" actions={<ListActions/>}>
           <Datagrid rowClick="edit">
                <TextField source="nombre" label="Nombre completo" />
                <ImageField source="file.src" title="file.title" label="Foto" />
                <TextField source="movil" label="Teléfono móvil" />
                <ReferenceField label="Nacionalidad" source="nacionalidad" reference="nacionalidad">  
                  <TextField source="pais" />
                </ReferenceField>
                <ReferenceField label="Sección" source="seccion" reference="seccion">  
                  <TextField source="nombre" />
                </ReferenceField>
                <ReferenceField label="Cargo" source="cargo" reference="cargo">  
                  <TextField source="nombre" />
                </ReferenceField>
                <DateField source="fecha_nacimiento" label="Fecha de nacimiento" locales="es-CL"/>
                <DateField source="fecha_ingreso" label="Fecha de ingreso" locales="es-CL" />
                <BooleanField source="desvinculado" label="Desvinculado" />
                <DateField source="fecha_egreso" label="Fecha de desvinculación" locales="es-CL" />
           </Datagrid>
        </List>
  )
}