import { List, Datagrid, TextField, TopToolbar, CreateButton} from 'react-admin';

const ListActions = (props) => {
  return (
  <TopToolbar>
      <CreateButton label="Agregar"/>
  </TopToolbar>)
};

export const NacionalidadList = (props) => {
  return (
    <List {...props} title="Lista del personal" actions={<ListActions/>}>
           <Datagrid rowClick="edit">
                <TextField source="pais" label="País de origen" />
           </Datagrid>
        </List>
  )
}