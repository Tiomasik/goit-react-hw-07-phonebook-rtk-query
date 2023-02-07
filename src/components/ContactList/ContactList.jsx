import { useSelector } from "react-redux";

import { getFilter } from "redux/selectors";
import { useFetchAllQuery } from '../../redux/contactsSlice'
import ContactItem from '../ContactItem/ContactItem'
import { List, Item, Info, Filter } from './ContactList.styled'

export const ContactList = () => {
    const { data } = useFetchAllQuery()
    const filter = useSelector(getFilter)
    
    const getVisibleContacts = () => {
        return data.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase()))
    }
        
    return (
        <>
            {getVisibleContacts().length === 0 && data.length === 0 && <Info>Sorry, but you don't have any contacts</Info>}
            {getVisibleContacts().length === 0 && data.length !== 0
                && <Info><span>Sorry, but you don't have contact</span> 
                <Filter>{filter}</Filter></Info>}
            {data.length !== 0 && < List >
                {getVisibleContacts().map(({ id, name, number }) =>
                    <Item key={id}>
                        <ContactItem name={name}
                            number={number}
                            id={id} />
                    </Item>)}
            </List >}
        </>
    )
}

export default ContactList