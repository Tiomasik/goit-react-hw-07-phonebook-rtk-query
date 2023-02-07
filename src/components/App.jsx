import Form from './Form/Form';
import { ContactList } from './ContactList/ContactList'
import Filter from './Filter/Filter'
import { AppBar } from './AppBar.styled'
import  Loader  from  '../components/Loader/Loader'
import { useFetchAllQuery } from '../redux/contactsSlice'

  
const App = () => {
  const { data, isFetching, isLoading, error } = useFetchAllQuery()

  return (
    <AppBar>
      <Form />
      {!isLoading && <>
        {data.length !== 0 && <Filter />}
        <ContactList />
      </>}
      {isFetching && !error && <Loader/>}
    </AppBar>
  )
};

export default App;
