import { List, Datagrid, TextField, TopToolbar, CreateButton} from 'react-admin';

const ListActions = (props) => {
  return (
  <TopToolbar>
      <CreateButton label="Agregar"/>
  </TopToolbar>)
};

export const SeccionList = (props) => {
  return (
    <List {...props} title="Lista de secciones" actions={<ListActions/>}>
           <Datagrid>
                <TextField source="nombre" label="Sección" />
           </Datagrid>
        </List>
  )
}