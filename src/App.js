import { Admin, Resource } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider
} from "react-admin-firebase";
import { firebaseConfig, options } from "./FIREBASE_CONFIG";
import { PersonalList, PersonalCreate, PersonalEdit } from "./personal";
import { NacionalidadList, NacionalidadCreate, NacionalidadEdit } from "./nacionalidad";
import { CargoList, CargoCreate, CargoEdit } from "./cargo";

function App() {

  const dataProvider = FirebaseDataProvider(firebaseConfig, options);
  const authProvider = FirebaseAuthProvider(firebaseConfig, options);

  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="personal" options={{ label: 'Personal' }} list={PersonalList} create={PersonalCreate} edit={PersonalEdit} />
      <Resource name="cargo" options={{ label: 'Cargo' }} list={CargoList} create={CargoCreate} edit={CargoEdit} />
      <Resource name="nacionalidad" options={{ label: 'País de origen' }} list={NacionalidadList} create={NacionalidadCreate} edit={NacionalidadEdit} />
    </Admin>
  );
}

export default App;
