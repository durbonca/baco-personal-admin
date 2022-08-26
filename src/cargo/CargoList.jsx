import { List, Datagrid, TextField, TopToolbar, CreateButton} from 'react-admin';

const ListActions = (props) => {
  return (
  <TopToolbar>
      <CreateButton label="Agregar"/>
  </TopToolbar>)
};

export const CargoList = (props) => {
  return (
    <List {...props} title="Lista de cargos" actions={<ListActions/>}>
           <Datagrid>
                <TextField source="nombre" label="Titulo" />
           </Datagrid>
        </List>
  )
}