import { useDispatch } from "react-redux";

import { filterContacts } from "redux/filterSlice";
import { StyleName } from './Filter.styled'
import { StyleInput } from './Filter.styled'
import { useFetchAllQuery } from '../../redux/contactsSlice'

const Filter = () => {
    const dispatch = useDispatch();
    const { data } = useFetchAllQuery()

    const changeFilter = (evt) => {
        dispatch(filterContacts(evt.currentTarget.value))
    }

return (
    <>
        {data && <div>
            <h3 style={{textAlign: 'center',
                        fontSize: 26,
                        fontWeight: 700,
                        marginTop: 0,
                        marginBottom: 10}}>Contacts</h3>
            <StyleName htmlFor='filter'>Find contacts by names</StyleName>
            <StyleInput type="text"
                    id='filter'
                    onChange={changeFilter}/>
        </div >}
    </>
    )
}

export default Filter